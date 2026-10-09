import { test, expect } from '@playwright/test';

test('menu categories expose all nine dishes through mouse and keyboard', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Roasted carrots' })).toBeVisible();
  const kitchen = page.getByRole('button', { name: 'From the Kitchen', exact: true });
  await expect(kitchen).toBeEnabled();
  await kitchen.focus();
  await page.keyboard.press('Enter');
  await expect(kitchen).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('heading', { name: 'Wild mushroom pappardelle' })).toBeVisible();
  await expect(page.locator('.dishes li')).toHaveCount(3);
  await page.getByRole('button', { name: 'Something Sweet', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Pear & almond tart' })).toBeVisible();
  await page.getByRole('button', { name: 'Small Plates', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Roasted carrots' })).toBeVisible();
});

test('reservation traps focus, closes on Escape and returns focus without submitting data', async ({ page }) => {
  const writes: string[] = [];
  page.on('request', (r) => {
    // Cloudflare may inject its zone-level performance beacon on the public host.
    // It is unrelated to the reservation preview; all application writes still fail this test.
    if (r.method() !== 'GET' && new URL(r.url()).pathname !== '/cdn-cgi/rum') {
      writes.push(r.method() + ' ' + r.url());
    }
  });
  await page.goto('/');
  const trigger = page.locator('.hero').getByRole('button', { name: 'Preview a reservation' });
  await trigger.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText('No personal details are collected or sent.')).toBeVisible();
  await expect(dialog.locator('input, textarea, form')).toHaveCount(0);
  for (let i = 0; i < 7; i++) {
    await page.keyboard.press('Tab');
    expect(await dialog.evaluate((el) => el.contains(document.activeElement))).toBe(true);
  }
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  expect(writes).toEqual([]);
});

for (const width of [320, 390, 430, 1440]) {
  test(`layout, imagery and anchors work at ${width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.setViewportSize({ width, height: width > 1000 ? 1000 : 844 });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await page.locator('nav').getByRole('link', { name: 'Menu', exact: true }).click();
    await expect(page).toHaveURL(/#menu$/);
    await page.locator('.site-footer').scrollIntoViewIfNeeded();
    const images = await page.locator('img:visible').evaluateAll(async (imgs) => {
      await Promise.all(imgs.map((img) => (img as HTMLImageElement).decode().catch(() => {})));
      return imgs.every(img => (img as HTMLImageElement).naturalWidth > 0);
    });
    expect(images).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; window.scrollTo(0, 0); });
    await page.waitForTimeout(1600);
    await page.screenshot({ path: `test-results/ember-hero-${width}.png` });
    await page.screenshot({ path: `test-results/ember-${width}.png`, fullPage: true });
    expect(errors).toEqual([]);
  });
}

test('reduced motion removes sticky choreography and keeps every moment readable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await expect(page.locator('.journey-visual')).toBeHidden();
  await expect(page.locator('.journey-mobile-photo:visible')).toHaveCount(3);
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  await expect(page.getByRole('heading', { name: 'Better together.' })).toBeVisible();
});

test('desktop signature images respond to scrolling and reset on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await expect(page.locator('.hero button')).toBeEnabled();
  await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; });
  const second = page.locator('.journey-step').nth(1);
  await second.scrollIntoViewIfNeeded();
  await expect.poll(() => page.locator('.frame-1').evaluate(el => Number(getComputedStyle(el).opacity))).toBeGreaterThan(0.8);
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'test-results/ember-journey-desktop.png' });
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator('.journey-visual')).toBeHidden();
  await expect(page.locator('.journey-mobile-photo:visible')).toHaveCount(3);
});

test('fictional notice and noindex are present; unknown routes return a 404', async ({ page, request }) => {
  await page.goto('/');
  await expect(page.locator('.concept-notice')).toContainText('Fictional restaurant concept');
  await expect(page.locator('meta[name=robots]')).toHaveAttribute('content', 'noindex, nofollow');
  await expect(page.locator('a[href^="tel:"],a[href*="wa.me"],form')).toHaveCount(0);
  const response = await request.get('/not-a-page');
  expect(response.status()).toBe(404);
  await page.goto('/not-a-page');
  await expect(page.getByRole('heading', { name: 'A little off the menu.' })).toBeVisible();
});

import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import appCss from '../styles.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Ember & Oak | A restaurant concept by Krelyvo Studio' },
      { name: 'description', content: 'Seasonal plates, shared moments. Explore a fictional restaurant experience designed by Krelyvo Studio.' },
      { name: 'robots', content: 'noindex, nofollow' },
      { name: 'theme-color', content: '#211c18' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }, { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  }),
  shellComponent: ({ children }: { children: ReactNode }) => <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>,
  component: Outlet,
  notFoundComponent: () => <main className="error-page"><p className="eyebrow">Ember &amp; Oak</p><h1>A little off the menu.</h1><p>This page doesn’t exist.</p><a className="button" href="/">Return to the table</a></main>,
  errorComponent: () => <main className="error-page"><h1>Let’s try that again.</h1><p>The page couldn’t load.</p><a className="button" href="/">Reload the experience</a></main>,
});

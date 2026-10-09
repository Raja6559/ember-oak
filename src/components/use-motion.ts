import { useEffect, type RefObject } from 'react';

export function useMotion(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!root.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    // Load choreography separately; the rendered page is visible without it.
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (disposed || !root.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      const context = gsap.context(() => {
        media.add('(prefers-reduced-motion: no-preference)', () => {
          gsap.from('.hero-line', { y: 28, opacity: 0, duration: 1, stagger: 0.14, ease: 'power2.out', clearProps: 'all' });
          gsap.from('.hero-image', { scale: 1.04, opacity: 0.65, duration: 1.4, ease: 'power2.out', clearProps: 'all' });
          gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
            gsap.from(element, { y: 20, opacity: 0, duration: 0.75, ease: 'power2.out', clearProps: 'all', scrollTrigger: { trigger: element, start: 'top 94%', once: true } });
          });
        });
        media.add('(min-width: 1000px) and (prefers-reduced-motion: no-preference)', () => {
          const frames = gsap.utils.toArray<HTMLElement>('.journey-frame');
          gsap.utils.toArray<HTMLElement>('.journey-step').slice(1).forEach((step, i) => {
            gsap.fromTo(frames[i + 1]!, { opacity: 0, scale: 1.04 }, { opacity: 1, scale: 1, ease: 'none', scrollTrigger: { trigger: step, start: 'top 80%', end: 'top 40%', scrub: 0.5 } });
          });
        });
      }, root);
      cleanup = () => { media.revert(); context.revert(); };
    }).catch(() => { /* Static content remains usable if the motion chunk fails. */ });
    return () => { disposed = true; cleanup?.(); };
  }, [root]);
}

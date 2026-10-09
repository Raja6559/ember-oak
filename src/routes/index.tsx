import { createFileRoute } from '@tanstack/react-router';
import { useRef } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Photo } from '../components/photo';
import { Reservation } from '../components/reservation';
import { SampleMenu } from '../components/sample-menu';
import { Journey } from '../components/journey';
import { useMotion } from '../components/use-motion';

export const Route = createFileRoute('/')({ component: EmberOak });

function EmberOak() {
  const root = useRef<HTMLDivElement>(null);
  useMotion(root);
  return <div ref={root}>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="concept-notice">Fictional restaurant concept by <a href="https://krelyvo.com/work/ember-oak">Krelyvo Studio <ArrowUpRight size={12} aria-hidden="true" /></a></div>
    <header className="site-header container">
      <a className="wordmark" href="#" aria-label="Ember and Oak home">Ember <span>&amp;</span> Oak<span className="wordmark-dot">.</span></a>
      <nav aria-label="Main navigation"><a href="#menu">Menu</a><a href="#story">Our Story</a><a href="#space">The Space</a></nav>
      <div className="header-reservation"><Reservation quiet /></div>
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-heading">
        <Photo name="interior" alt="Warm pendant light falling over an oak table in the Ember and Oak restaurant concept" className="hero-image" eager sizes="100vw" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="eyebrow hero-line">For the pleasure of gathering</p>
          <h1 id="hero-heading"><span className="hero-line">A good evening</span><em className="hero-line">starts here.</em></h1>
          <p className="hero-description hero-line">Seasonal plates, unhurried conversations and a warm welcome. Pull up a chair.</p>
          <div className="hero-actions hero-line"><a className="button" href="#menu">Explore the menu <ArrowDownRight size={17} aria-hidden="true" /></a><Reservation quiet /></div>
        </div>
      </section>
      <section id="story" className="section story-section container">
        <div className="story-copy" data-reveal><p className="eyebrow">The Ember &amp; Oak story</p><h2>For the pleasure<br />of <em>gathering.</em></h2><p>Some evenings ask for very little. A warm room. A generous plate. Your favourite people around the table.</p><p>That is the idea behind Ember &amp; Oak: a neighbourhood restaurant imagined for slow dinners, spontaneous catch-ups and the simple joy of staying a little longer.</p><a className="text-link" href="#space">Find your favourite corner <ArrowUpRight size={17} aria-hidden="true" /></a></div>
        <figure className="story-photo" data-reveal><Photo name="table" alt="AI concept imagery of an oak dining table with linen, bread and plates to share" /><figcaption>Good company. Warm light. One more conversation.</figcaption></figure>
      </section>
      <SampleMenu />
      <Journey />
      <section id="space" className="section space-section container">
        <div className="section-heading" data-reveal><p className="eyebrow">Make yourself at home</p><h2>Stay a little <em>longer.</em></h2><p>Soft light, natural textures, and a corner that feels like yours.</p></div>
        <div className="space-gallery"><figure className="space-wide" data-reveal><Photo name="space" alt="AI concept of an intimate dining room with oak panels and a dusk-lit window" /><figcaption>A room for unhurried evenings.</figcaption></figure><figure className="space-small" data-reveal><Photo name="dessert" alt="AI concept of a pear tart and vanilla cream on a warm oak table" /><figcaption>Always room for something sweet.</figcaption></figure></div>
        <p className="small-note gallery-note">A fictional setting, brought to life through concept imagery. Additional food and dining visuals are AI-generated.</p>
      </section>
      <section className="closing-section container" data-reveal><p className="eyebrow">An invitation</p><h2>The best plans<br />start at <em>the table.</em></h2><p>Bring your favourite people. Stay for another story.</p><Reservation /></section>
    </main>
    <footer className="site-footer container"><div className="footer-top"><a className="wordmark" href="#">Ember <span>&amp;</span> Oak<span className="wordmark-dot">.</span></a><a className="text-link" href="https://krelyvo.com/work/ember-oak">Explore the Krelyvo case study <ArrowUpRight size={16} aria-hidden="true" /></a></div><div className="footer-bottom"><p>Independent restaurant concept by Krelyvo Studio.</p><p>Fictional menu &amp; setting. Reservation preview only.</p><a href="#">Back to top ↑</a></div></footer>
  </div>;
}

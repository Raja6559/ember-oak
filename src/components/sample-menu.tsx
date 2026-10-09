import { useState } from 'react';
import { menu } from '../data/menu';
import { Photo } from './photo';
import { useHydrated } from './use-hydrated';

export function SampleMenu() {
  const [selected, setSelected] = useState(0);
  const ready = useHydrated();
  const category = menu[selected]!;
  return <section id="menu" className="section menu-section">
    <div className="container">
      <div className="section-heading" data-reveal><p className="eyebrow">At the table</p><h2>Seasonal plates.<br /><em>Shared moments.</em></h2><p>A little of what you love. A taste of something new.</p></div>
      <div className="menu-layout">
        <div className="menu-photo"><Photo name={category.image} alt={category.alt} /><span className="photo-caption">A taste of the concept</span></div>
        <div className="menu-content">
          <div className="menu-filters" role="group" aria-label="Sample menu categories">{menu.map((item, index) => <button disabled={!ready} key={item.name} type="button" aria-pressed={selected === index} aria-controls="sample-dishes" onClick={() => setSelected(index)}>{item.name}</button>)}</div>
          <div id="sample-dishes" aria-live="polite" aria-atomic="true">
            <h3 className="sr-only">{category.name}</h3>
            <ul className="dishes">{category.dishes.map((dish) => <li key={dish.name}><h3>{dish.name}</h3><p>{dish.detail}</p></li>)}</ul>
          </div>
          <p className="small-note">Illustrative menu. Dishes and imagery are part of a fictional restaurant concept.</p>
        </div>
      </div>
    </div>
  </section>;
}

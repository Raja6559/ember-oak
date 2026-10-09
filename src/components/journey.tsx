import { Photo } from './photo';

const moments = [
  { image: 'preparation', name: 'Made with care.', copy: 'A handful of herbs. A little heat. Good ingredients, given the attention they deserve.', alt: 'AI concept of a chef adding herbs to roasted carrots' },
  { image: 'dish', name: 'Finished with feeling.', copy: 'Seasonal flavours, familiar comforts and something worth passing across the table.', alt: 'AI concept of freshly prepared mushroom pappardelle' },
  { image: 'table', name: 'Better together.', copy: 'The plates arrive. The conversation carries on. There is nowhere else you need to be.', alt: 'AI concept of a shared oak table set for an evening meal' },
];

export function Journey() {
  return <section className="section journey-section" aria-labelledby="journey-heading">
    <div className="container">
      <div className="section-heading" data-reveal><h2 id="journey-heading">From the kitchen<br /><em>to the table.</em></h2><p>Good evenings are made of small things.</p></div>
      <div className="journey-layout">
        <div className="journey-visual" aria-hidden="true">{moments.map((moment, index) => <Photo key={moment.image} name={moment.image} alt="" className={`journey-frame frame-${index}`} />)}</div>
        <div className="journey-stories">{moments.map((moment, index) => <article className="journey-step" key={moment.image} data-step={index}><Photo className="journey-mobile-photo" name={moment.image} alt={moment.alt} /><div className="journey-copy"><span className="moment-number" aria-hidden="true">0{index + 1}</span><h3>{moment.name}</h3><p>{moment.copy}</p></div></article>)}</div>
      </div>
    </div>
  </section>;
}

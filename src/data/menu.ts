export const menu = [
  { name: 'Small Plates', image: 'preparation', alt: 'Concept image of roasted carrots being finished with herbs', dishes: [
    { name: 'Roasted carrots', detail: 'Whipped labneh, toasted seeds, garden herbs.' },
    { name: 'Burrata & late tomatoes', detail: 'Basil oil, sourdough crumbs, a little sea salt.' },
    { name: 'Warm sourdough', detail: 'Cultured butter, rosemary, olive oil for sharing.' },
  ] },
  { name: 'From the Kitchen', image: 'dish', alt: 'Concept image of mushroom pappardelle in a charcoal ceramic bowl', dishes: [
    { name: 'Wild mushroom pappardelle', detail: 'Thyme, parmesan, ribbons of fresh pasta.' },
    { name: 'Charred cauliflower', detail: 'White bean purée, capers, toasted almonds.' },
    { name: 'Lemon & herb chicken', detail: 'Roasted potatoes, seasonal greens, pan jus.' },
  ] },
  { name: 'Something Sweet', image: 'dessert', alt: 'Concept image of pear and almond tart with vanilla cream', dishes: [
    { name: 'Pear & almond tart', detail: 'Golden pastry, poached pear, vanilla cream.' },
    { name: 'Dark chocolate crémeux', detail: 'Olive oil, sea salt, crisp cocoa crumb.' },
    { name: 'Vanilla panna cotta', detail: 'Seasonal berries, a delicate almond biscuit.' },
  ] },
] as const;

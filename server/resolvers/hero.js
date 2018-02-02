const heros = [{ id: 1, name: 'R2-D2' }, { id: 2, name: 'Luke' }, { id: 3, name: 'Darth Vader' }];

module.exports = {
  HeroQuery: {
    all: () => ({ items: heros, count: heros.length }),
    item: (_, { id }) => heros.find(hero => hero.id === id)
  },
  Hero: {
    power: () => Math.floor(Math.random() * 100)
  }
};

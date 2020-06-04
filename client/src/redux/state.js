const state = {
  dbUpdatedAt: null,
  userBusinesses: [],
  isLoggedIn: false,
  userId: null,
  businesses: [
    {
      tempId: 1,
      name: 'Radio Coffee & Beer',
      address: '4204 Menchaca Rd, Austin, TX 78704',
      description: 'Hip spot for coffee, beer & pastries in wood-paneled digs, plus tables & a taco truck out back.',
      hours: '10 AM - 12AM',
      website: 'https://www.radiocoffeeandbeer.com/'
    },
    {
      tempId: 2,
      name: 'Summer Moon Coffee',
      address: '3115 S 1st St #1b, Austin, TX 78704',
      description: 'Local roaster for wood-fired, fair-trade coffee, pastries & breakfast tacos in a quaint setting.',
      hours: '6 AM - 12 AM',
      website: 'https://summermooncoffee.com/'
    },
    {
      tempId: 3,
      name: 'Brew & Brew',
      address: '500 San Marcos St #105, Austin, TX 78702',
      description: 'Bar & cafe pairing coffee & craft brews with sandwiches & light bites in stylish industrial digs.',
      hours: '8 AM - 8 PM',
      website: 'https://thebrewandbrew.com/'
    }
  ]
}

export default state;
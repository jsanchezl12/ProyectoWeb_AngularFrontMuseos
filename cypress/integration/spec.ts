//comando: ng e2e
//DESARROLLAR UNA  PRUEBA E2E POR CADA HU DESARROLLADA


describe('Pruebas Web - Museos', () => {

  it('1. Listado de Museos', () => {
    cy.visit('/')
    cy.contains('Museums')
    cy.get('app-museum-list').find('[class="row"]').first().next().find('[class="card p-2"]').first()
    .find('[class="card-title"]').first().should('contain','Bendigo Art Gallery');
  })

  it('2. Detalle de un Museo', () => {
    cy.visit('/')
    cy.contains('Museums')
    cy.get('app-museum-list').find('[class="row"]').first().next().find('[class="card p-2"]').first()
    .find('[aria-label="Basic example"]').first().click();
    cy.wait(1000);
    cy.get('[class="card p-2"]').first().should('contain','Located in Bendigo, Victoria')
  })

  it('3. Listado de Exhibiciones', () => {
    cy.visit('/')
    cy.contains('Museums')
    cy.get('app-museum-list').find('[class="row"]').first().next().find('[class="card p-2"]').first()
    .find('[aria-label="Basic example"]').first().click();
    cy.wait(3000);
    cy.get('app-museum-detailed').first().find('[class="container-fluid"]').first().find('[class="row"]').first()
    .next().next().next().next().next().next().find('[class="list-group"]').first().should('contain','Brett Whiteley: Drawing is Everything')
  })

  it('4. Detalle de una Exhibicion', () => {
    cy.visit('/')
    cy.contains('Museums')
    cy.get('app-museum-list').find('[class="row"]').first().next().find('[class="card p-2"]').first()
    .find('[aria-label="Basic example"]').first().click();
    cy.wait(3000);
    cy.get('app-museum-detailed').first().find('[class="container-fluid"]').first().find('[class="row"]').first()
    .next().next().next().next().next().next().find('[class="list-group"]').first().find('[class="col mb-2"]').first().find('[class="btn-group"]').scrollIntoView()
    .find('[class="btn btn-primary"]').click({force: true});
    cy.wait(3000);
    cy.get('app-exhibition-detailed').first().find('[class="container-fluid"]').first().find('[class="row"]').first()
    .next().next().next().find('[class="list-group"]').first().should('contain','Dogs')
  })

  it('5. Crear un Museo', () => {
    cy.visit('/museums/create')
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    cy.get('#name').type(`Museo #${id}`);
    cy.get('#description').type('Descripcion de Museo Prueba');
    cy.get('#address').type(' Siempre viva 742 ');
    cy.get('#city').type('Springfield');
    cy.get('#image').type('https://museonacional.gov.co/elementosDifusion/2016/noticias/CumpleMuseo.jpg');
    cy.get('[type="submit"]').click();
    cy.wait(3000);
    cy.get('[aria-label="Confirmation"]').first().should('contain','Confirmation');

  })

  it('6. Crear una exhibicion', () => {
    cy.visit('/')
    cy.contains('Museums')
    cy.get('app-museum-list').find('[class="row"]').first().next().find('[class="card p-2"]').first()
    .find('[aria-label="Basic example"]').first().click();
    cy.wait(3000);
    cy.get('app-museum-detailed').first().find('[class="container-fluid"]').first().find('[class="row"]').first()
    .next().next().next().next().next().scrollIntoView().find('[class="btn btn-primary"]').click({force: true});
    cy.wait(3000);
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    cy.get('#name').type(`Exhibicion #${id}`);
    cy.get('#description').type('Descripcion de exhibicion de Prueba');
    cy.get('[type="submit"]').click();
    cy.wait(3000);
    cy.get('[aria-label="Confirmation"]').first().should('contain','Confirmation');
  })
})

describe('Pruebas Web - Artistas', () => {
  it('1. Listado de Artistas', () => {
    cy.visit('/')
    cy.contains('Museums')
    cy.wait(2000)
    cy.visit('/artists/list')
    cy.wait(3000);
    cy.get('app-artist-list').find('[class="row"]').first().next().find('[class="card p-2"]').first().find('[class="card-body"]').first().find('[class="card-title"]')
    .should('contain','Brett Whiteley')
  })

  it('2. Detalle de un Artista', () => {
    cy.visit('/');
    cy.contains('Museums');
    cy.wait(2000);
    cy.visit('/artists/list');
    cy.wait(3000);
    cy.get('app-artist-list').find('[class="row"]').first().next().find('[class="card p-2"]').first().find('[class="card-body"]').first().find('[class="btn btn-primary"]')
    .click({force:true});
    cy.wait(2000);
    cy.get('app-artist-detailed').find('[class="row"]').first().next().next().next().should('contain','Avant-garde')
  })

  it('3. Listado de Obras de Arte', () => {
    cy.visit('/');
    cy.contains('Museums');
    cy.wait(2000);
    cy.visit('/artists/list');
    cy.get('app-artist-list').find('[class="row"]').first().next().find('[class="card p-2"]').first().find('[class="card-body"]').first().find('[class="btn btn-primary"]')
    .click({force:true});
    cy.wait(2000);
    cy.get('app-artist-detailed').find('[class="row"]').first().next().next().next().next().next().next().should('contain','Dogs')
  })

  it('4. Detalle de una Obra de Arte', () => {
    cy.visit('/')
    cy.contains('Museums')
    cy.wait(2000);
    cy.visit('/artists/list');
    cy.get('app-artist-list').find('[class="row"]').first().next().find('[class="card p-2"]').first().find('[class="card-body"]').first().find('[class="btn btn-primary"]')
    .click({force:true});
    cy.wait(2000);
    cy.get('app-artist-detailed').find('[class="row"]').first().next().next().next().next().next().next().find('[class="col mb-2"]').first().find('img').first().invoke('attr', 'src')
    .should('contain', 'https://www.bendigoregion.com.au/sites/default/files/2021-05/brett_whiteley_greg_dogs.jpg')

    //https://www.bendigoregion.com.au/sites/default/files/2021-05/brett_whiteley_greg_dogs.jpg
  })

  it('5. Crear un Artista', () => {
    cy.visit('/')
    cy.contains('Museums')
    cy.wait(3000)
    cy.visit('/artists/create')
    cy.wait(3000)
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    cy.get('#name').type(`Artista #${id}`);
    cy.get('#birthplace').type('Bogota, Colombia');
    cy.get('#birthdate').type('2022-05-05');
    cy.get('#image').type('https://www.larazon.es/resizer/qApt0WBVFkIqcI0ruMUBvqbNP8Y=/1800x1200/smart/filters:format(jpg)/cloudfront-eu-central-1.images.arcpublishing.com/larazon/YAY7H5LXJJCZVAJ33ZINW27PDY.jpg');
    cy.get('[type="submit"]').click();
    cy.wait(3000);
    cy.get('[aria-label="Confirmation"]').first().should('contain','Confirmation');
  })

  it('6. Crear una Obra de Arte', () => {
    cy.visit('/');
    cy.contains('Museums');
    cy.wait(3000);
    cy.visit('/artists/list');
    cy.wait(3000);
    cy.get('app-artist-list').find('[class="row"]').first().next().find('[class="card p-2"]').first().find('[class="card-body"]').first().find('[class="btn btn-primary"]')
    .click({force:true});
    cy.wait(2000);
    cy.get('app-artist-detailed').find('[class="row"]').first().next().next().next().next().next().find('[class="btn btn-primary"]').first().click({force:true});
    cy.wait(2000);
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    cy.get('#name').type(`ArtWork #${id}`);
    cy.get('#description').type('Descripcion de Obra de Arte de Prueba');
    cy.get('#year').type('2022');
    cy.get("#type").select('Painting');
    cy.get('[type="submit"]').click();
    cy.wait(3000);
    cy.get('[aria-label="Confirmation"]').first().should('contain','Confirmation');
  })
})

describe('Pruebas Web - Movimientos', () => {
  it('1. Listado de Movimientos', () => {
    cy.visit('/')
    cy.contains('Museums')
    cy.wait(3000)
    cy.visit('/movements/list')
    cy.wait(3000);
    cy.get('app-movements-list').find('[class="row"]').first().next().should('contain','Avant-garde');
  })
  it('2. Crear un Movimiento', () => {
    cy.visit('/')
    cy.contains('Museums')
    cy.wait(2000)
    cy.visit('/movements/create')
    cy.wait(3000)
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    cy.get('#name').type(`Movimiento #${id}`);
    cy.get('#description').type('Descripcion de Movimiento de Prueba');
    cy.get('#countryOfOrigin').type('Colombia');
    cy.get('#activeYears').type('2022-2030');
    cy.get('[type="submit"]').click();
    cy.wait(3000);
    cy.get('[aria-label="Confirmation"]').first().should('contain','Confirmation');
  })
})

describe('Pruebas Web - Sponsors', () => {
  it('1. Listado de Sponsors', () => {
    cy.visit('/')
    cy.contains('Museums')
    cy.wait(3000)
    cy.visit('/sponsors/list')
    cy.wait(3000);
    cy.get('app-sponsor-list').find('[class="row"]').first().next().should('contain','Greater Bendigo');
  })
  it('2. Crear un Sponsor', () => {
    cy.visit('/')
    cy.contains('Museums')
    cy.wait(3000)
    cy.visit('/sponsors/create')
    cy.wait(3000)
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    cy.get('#name').type(`Sponsor #${id}`);
    cy.get('#description').type('Descripcion de Sponsor de Prueba');
    cy.get('#website').type('https://www.greaterbendigo.com.au/');
    cy.get('[type="submit"]').click();
    cy.wait(3000);
    cy.get('[aria-label="Confirmation"]').first().should('contain','Confirmation');
  })
})

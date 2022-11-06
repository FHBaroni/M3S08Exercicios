context('Testes entradas e saídas', () => {
  before(() => {
    cy.visit('https://localhost:44360/ControleEntradasSaidas.aspx');
  });

  afterEach(() => {
    cy.get('input').contains('Enviar').click();
    cy.get('#btnLimpar').click();
  });

  it('Entradas1', () => {
    cy.get('#txtN1').type('Boneca');
    cy.get('#txtV1').type(4);
    cy.get('#txtN2').type('Carrinho');
    cy.get('#txtV2').type(1);
    cy.get('#txtN3').type('Doces');
    cy.get('#txtV3').type(5);
    cy.get('#txtN4').type('Refrigerantes');
    cy.get('#txtV4').type(6);
  });
  it('Entradas2', () => {
    cy.get('#txtN1').type('Boneca');
    cy.get('#txtV1').type(78);
    cy.get('#txtN2').type('Bolo');
    cy.get('#txtV2').type(3);
    cy.get('#txtN3').type('Doces');
    cy.get('#txtV3').type(8);
  });
  it('Entradas3', () => {
    cy.get('#txtN1').type('café');
    cy.get('#txtV1').type(2);
    cy.get('#txtN2').type('Coxinha');
    cy.get('#txtV2').type(3);
    cy.get('#txtN3').type('Pavê');
    cy.get('#txtV3').type(1);
    cy.get('#txtN4').type('Bolo Seco');
    cy.get('#txtV4').type(1);
    cy.get('#txtN5').type('Gelatina');
    cy.get('#txtV5').type(2);
  });
  it('Entradas4', () => {
    cy.get('#txtN1').type('Caneta');
    cy.get('#txtV1').type(234);
    cy.get('#txtN2').type('Folhas A4');
    cy.get('#txtV2').type(530);
  });
  it('Entradas5', () => {
    cy.get('#txtN1').type('Lápis');
    cy.get('#txtV1').type(4320);
  });
  it('Entradas6', () => {
    cy.get('#txtN1').type('Bolsas');
    cy.get('#txtV1').type(135);
    cy.get('#txtN2').type('Cadernos');
    cy.get('#txtV2').type(1200);
    cy.get('#txtN3').type('Livros');
    cy.get('#txtV3').type(1200);
  });
});

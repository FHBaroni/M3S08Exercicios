context('Testes entradas e saídas', () => {
  before(() => {
    cy.visit('https://localhost:44360/ControleEntradasSaidas.aspx');
  });

  afterEach(() => {
    cy.get('#btnLimpar').click();
    for (let index = 1; index < 8; index++) {
      cy.get('#txtN' + index).then((form) => {
        expect(form).to.be.empty;
      });
      cy.get('#txtV' + index).then((form) => {
        expect(form).to.be.empty;
      });
    }
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
    cy.get('input').contains('Enviar').click();

    cy.get('tbody tr').should('have.length', 5);
    cy.get('tbody tr').each(($el, index, $list) => {
      if (index == 1) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('4');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Boneca');
          });
      }
      if (index == 2) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('1');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Carrinho');
          });
      }
      if (index == 3) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('5');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Doces');
          });
      }
      if (index == 4) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('6');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Refrigerantes');
          });
      }
    });
  });

  it('Etradas2', () => {
    cy.get('#txtN1').type('Boneca');
    cy.get('#txtV1').type(78);
    cy.get('#txtN2').type('Bolo');
    cy.get('#txtV2').type(3);
    cy.get('#txtN3').type('Doces');
    cy.get('#txtV3').type(8);
    cy.get('input').contains('Enviar').click();
    cy.get('tbody tr').should('have.length', 4);
    cy.get('tbody tr').each(($el, index, $list) => {
      if (index == 1) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('78');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Boneca');
          });
      }
      if (index == 2) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('3');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Bolo');
          });
      }
      if (index == 3) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('8');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Doces');
          });
      }
    });
  });

  it('Entradas3', () => {
    cy.get('#txtN1').type('Café');
    cy.get('#txtV1').type(2);
    cy.get('#txtN2').type('Coxinha');
    cy.get('#txtV2').type(3);
    cy.get('#txtN3').type('Pavê');
    cy.get('#txtV3').type(1);
    cy.get('#txtN4').type('Bolo Seco');
    cy.get('#txtV4').type(1);
    cy.get('#txtN5').type('Gelatina');
    cy.get('#txtV5').type(2);
    cy.get('input').contains('Enviar').click();
    //integridade
    cy.get('tbody tr').should('have.length', 6);
    cy.get('tbody tr').each(($el, index, $list) => {
      if (index == 1) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('2');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Café');
          });
      }
      if (index == 2) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('3');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Coxinha');
          });
      }
      if (index == 3) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('1');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Pavê');
          });
      }
      if (index == 4) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('1');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Bolo Seco');
          });
      }
      if (index == 5) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('2');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Gelatina');
          });
      }
    });
  });
  it('Entradas4', () => {
    cy.get('#txtN1').type('Caneta');
    cy.get('#txtV1').type(234);
    cy.get('#txtN2').type('Folhas A4');
    cy.get('#txtV2').type(530);
    cy.get('input').contains('Enviar').click();
    cy.get('tbody tr').should('have.length', 3);
    cy.get('tbody tr').each(($el, index, $list) => {
      if (index == 1) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('234');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Caneta');
          });
      }
      if (index == 2) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('530');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Folhas A4');
          });
      }
    });
  });

  it('Entradas5', () => {
    cy.get('#txtN1').type('Lápis');
    cy.get('#txtV1').type(4320);
    cy.get('input').contains('Enviar').click();
    cy.get('tbody tr').should('have.length', 2);
    cy.get('tbody tr').each(($el, index, $list) => {
      if (index == 1) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('4320');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Lápis');
          });
      }
    });
  });
  it('Entradas6', () => {
    cy.get('#txtN1').type('Bolsas');
    cy.get('#txtV1').type(135);
    cy.get('#txtN2').type('Cadernos');
    cy.get('#txtV2').type(1200);
    cy.get('#txtN3').type('Livros');
    cy.get('#txtV3').type(1200);
    cy.get('input').contains('Enviar').click();
    cy.get('tbody tr').should('have.length', 4);
    cy.get('tbody tr').each(($el, index, $list) => {
      if (index == 1) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('135');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Bolsas');
          });
      }
      if (index == 2) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('1200');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Cadernos');
          });
      }
      if (index == 3) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('1200');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('Livros');
          });
      }
    });
  });
});

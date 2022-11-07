context('Teste Conexão', () => {
  before(() => {
    cy.visit('https://localhost:44360/CalcSimples.aspx');
  });

  it('Teste 1', () => {
    cy.get('#txtN1').type(10);
    cy.get('#txtN2').type(123);

    cy.get('input').contains('Calcular').click();
    cy.get('#lbResultado').then((resultado) => {
      const resSoma = resultado.text();

      // multiplicação
      cy.get('#btnLimpar').click();
      cy.get('#txtN1').type(97);
      cy.get('#rbFuncao_1').click();
      cy.get('#txtN2').type(70);
      cy.get('input').contains('Calcular').click();
      cy.get('#lbResultado').then((resultado) => {
        const resSubtracao = resultado.text();

        cy.visit('https://localhost:44360/ControleEntradasSaidas.aspx');
        cy.get('#txtV1').type(resSoma);
        cy.get('#txtV2').type(resSubtracao);
      });
    });

    cy.get('#txtN1').type('pássaros');
    cy.get('#txtN2').type('peixes');
    cy.get('input').contains('Enviar').click();

    //integridade
    cy.get('tbody tr').should('have.length', 3);
    cy.get('tbody tr').each(($el, index, $list) => {
      if (index == 1) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('133');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('pássaros');
          });
      }
      if (index == 2) {
        cy.get($el)
          .find('#pValor')
          .invoke('text')
          .then((val) => {
            expect(val).to.be.equal('27');
          });
        cy.get($el)
          .find('#pNome')
          .invoke('text')
          .then((nome) => {
            expect(nome).to.be.equal('peixes');
          });
      }
    });
  });

  it.only('Teste 2', () => {
    // multiplicação
    cy.get('#txtN1').type(10);
    cy.get('#rbFuncao_2').click();
    cy.get('#txtN2').type(100);
    cy.get('input').contains('Calcular').click();
    cy.get('#lbResultado').then((resultado) => {
      const resMultplicacao = resultado.text();
      //divisão
      cy.get('#btnLimpar').click();
      cy.get('#txtN1').then((form) => {
        expect(form).to.be.empty;
      });
      cy.get('#txtN1').then((form) => {
        expect(form).to.be.empty;
      });
      cy.get('#txtN1').type(90);
      cy.get('#rbFuncao_3').click();
      cy.get('#txtN2').type(3);
      cy.get('input').contains('Calcular').click();
      cy.get('#lbResultado').then((resultado) => {
        const resDivisao = resultado.text();
        //soma
        cy.get('#btnLimpar').click();
        cy.get('#txtN1').then((form) => {
          expect(form).to.be.empty;
        });
        cy.get('#txtN1').then((form) => {
          expect(form).to.be.empty;
        });
        cy.get('#txtN1').type(125);
        cy.get('#txtN2').type(25);
        cy.get('input').contains('Calcular').click();
        cy.get('#lbResultado').then((resultado) => {
          const resSoma = resultado.text();
          //subtração
          cy.get('#btnLimpar').click();
          cy.get('#txtN1').then((form) => {
            expect(form).to.be.empty;
          });
          cy.get('#txtN1').then((form) => {
            expect(form).to.be.empty;
          });
          cy.get('#txtN1').type(2);
          cy.get('#rbFuncao_1').click();
          cy.get('#txtN2').type(1);
          cy.get('input').contains('Calcular').click();
          cy.get('#lbResultado').then((resultado) => {
            const resSubtracao = resultado.text();

            cy.visit('https://localhost:44360/ControleEntradasSaidas.aspx');
            cy.get('#txtV1').type(resMultplicacao);
            cy.get('#txtV2').type(resDivisao);
            cy.get('#txtV3').type(resSoma);
            cy.get('#txtV4').type(resSubtracao);
          });
        });

        cy.get('#txtN1').type('Ração');
        cy.get('#txtN2').type('petiscos');
        cy.get('#txtN3').type('Coleiras');
        cy.get('#txtN4').type('Remédios');
        cy.get('input').contains('Enviar').click();

        //integridade
        cy.get('tbody tr').should('have.length', 5);
        cy.get('tbody tr').each(($el, index, $list) => {
          if (index == 1) {
            cy.get($el)
              .find('#pValor')
              .invoke('text')
              .then((val) => {
                expect(val).to.be.equal('1000');
              });
            cy.get($el)
              .find('#pNome')
              .invoke('text')
              .then((nome) => {
                expect(nome).to.be.equal('Ração');
              });
          }
          if (index == 2) {
            cy.get($el)
              .find('#pValor')
              .invoke('text')
              .then((val) => {
                expect(val).to.be.equal('30');
              });
            cy.get($el)
              .find('#pNome')
              .invoke('text')
              .then((nome) => {
                expect(nome).to.be.equal('petiscos');
              });
          }
          if (index == 3) {
            cy.get($el)
              .find('#pValor')
              .invoke('text')
              .then((val) => {
                expect(val).to.be.equal('150');
              });
            cy.get($el)
              .find('#pNome')
              .invoke('text')
              .then((nome) => {
                expect(nome).to.be.equal('Coleiras');
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
                expect(nome).to.be.equal('Remédios');
              });
          }
        });
      });
    });
  });
});

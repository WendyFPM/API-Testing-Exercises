
  describe('Crear una nueva mascota', () => {
    it('Should create a new Pet successfully', () => {
      // New Pet data
      cy.fixture('TASK-001-newPet').then((newPet) => {
//STEP: Make a POST request to endpoint /pet
        cy.request('POST', '/pet', newPet)
            .its('body').then(body => {

//STEP: Verify that the new Pet has assigned an ID and a Name (name set in the fixture)
          expect(body).to.have.property('id', 10);
          expect(body).to.have.property('name', newPet.name);
        })
      })
    })
  });

describe('Edit a Pet - Name and Status', () => {

//PREREEQUISITES:  Create a new Pet
  before('Create a Pet - then getting the id', () => {
    // New Pet Data
    cy.fixture('TASK-002-editPet').then((newPet) => {
      // Make a POST request to endpoint /pet
      cy.request('POST', '/pet', newPet)
          .its('body').then(body => {
            //getting the body.id and saving it in alias named idValue
            cy.wrap(body.id).as('idValue')
            // verificar que se haya asignado un ID
            expect(body).to.have.property('id', newPet.id)

      })
    })
  })

  it('should edit the Pet correctly', function () {
// STEP: Update data of the new Pet
    cy.get('@idValue').then((ID) => {
        cy.fixture('TASK-002-editPet').then((editPet) => {
            // Make a PUT request to endpoint /pet
            const ID = this.idValue;
            cy.request('PUT', `/pet`, {
                "id": 20,
                "name": "Patroclo",
                "category": {
                    "id": 2,
                    "name": "Cats"
                },
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 1,
                        "name": "cat"
                    }
                ],
                "status": "sold"
            })
                .its('body').then(body => {
// STEP: Verify the Pet was updated (Name and Status)
                expect(body).to.have.property('name', 'Patroclo');
                expect(body).to.have.property('status', 'sold');
            })
        })
    })

  })
});
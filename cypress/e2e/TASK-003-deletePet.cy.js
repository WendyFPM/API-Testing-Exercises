
describe('Edit a Pet - Name and Status', () => {
// PREREQUISITES: Create a new Pet
  before('Create a Pet - then getting the id', () => {
    // Datos de la nueva mascota
    cy.fixture('TASK-003-deletePet').then((newPet) => {
      // Hacer una solicitud POST al endpoint /pet
      cy.request('POST', '/pet', newPet)
          .its('body').then(body => {
            //getting the body.id and saving it in alias named idValue
            cy.wrap(body.id).as('idValue')
            // verificar que se haya asignado un ID
            expect(body).to.have.property('id', newPet.id)

      })
    })
  })

  it('should delete the Pet correctly', function () {
    cy.get('@idValue').then((ID) => {
        cy.fixture('TASK-002-editPet').then((editPet) => {
// STEP: Make a DELETE request to endpoint /pet
            const ID = this.idValue;
            cy.request({
                method: 'DELETE',
                url: `/pet/${ID}`,
                api_key: 123456
            })
                .its('body').then(body => {
// STEP: Verify that the Response returns "Pet Deleted"
                expect(body).to.contains('Pet deleted');
            })
        })
    })

  })
});
describe('Read and write csv', ()=>{
    it('test1',()=> {
        cy.task('readFromCsv').then(res =>{
            console.log(res)
        })
    })
})
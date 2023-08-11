describe('Read and write csv', ()=>{
    it('test1',()=> {
        cy.task('readFromCsv').then(res =>{
            console.log(res)

            res.unshift({Channel:'Channel', Subbed:'Subbed', Like:'Liked'})
            res.push({Channel:'ChannelNew', Subbed:'Subbed', Like:'Yes'})

            cy.task('writeToCsv', {
                name:'tmp',
                rows:res
            })
        })
    })
})
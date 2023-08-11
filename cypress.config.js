const { defineConfig } = require("cypress");
const csv = require('@fast-csv/parse')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        //create task to read csv
        readFromCsv(){
          return new Promise(resolve =>{
            let dataArray = []
            csv.parseFile("./test.csv", {headers: true})
            .on('data', (data)=>{
              dataArray.push(data)
            })
            .on('end', ()=>{
              resolve(dataArray)
            })
          })
        }
      })
    },
  },
});

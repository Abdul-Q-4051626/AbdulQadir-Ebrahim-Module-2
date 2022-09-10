const fs = require('fs');


const app = "App name: Uniwise, " +
            "Develop: OGO studio, " +
            "Category: Campus Cup, "+
            "Institution: Buffalo city public Tvet college (BCC).";
            
fs.readFile('module-2.txt', 'utf8', (err, data)=>{
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
});



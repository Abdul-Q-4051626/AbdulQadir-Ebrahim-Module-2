const fs = require('fs');


const data = 
            "App name: Uniwise, " +
            "Develop: OGO studio, " +
            "Category: 'Campus Cup', "+
            "Institution: Buffalo city public Tvet college (BCC).";

fs.writeFile('module-2.txt', data, err =>{
    if(err){
        console.err;
        return;
    }
    console.log(data);
});
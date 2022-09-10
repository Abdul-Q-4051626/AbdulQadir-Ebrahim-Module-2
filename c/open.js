const fs = require('fs');

const newData = 
            "App name: Uniwise, " +
            "\nDevelop: OGO studio, " +
            "\nCategory: 'Campus Cup', "+
            "\nInstitution: Buffalo city public Tvet college (BCC).";

fs.writeFile('module-2.txt', newData, err =>{
    if(err){
        console.err;
        return;
    }
    console.log(newData);
});
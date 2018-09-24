var sass = require('node-sass');
var fs = require('fs');
sass.render({
  file: 'public/styles/style.ssas'
}, function(err, result) { 
    fs.writeFile('public/styles/style.css',result.css,(err)=>{
        if(err){
            console.log(err);
        }
    })

 });
var fs = require('fs');

fs.unlink('demo.txt',function(err){
    if(err) throw err;
    console.log('file deleted');
});
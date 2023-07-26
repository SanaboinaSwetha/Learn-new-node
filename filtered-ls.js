// var fs=require('fs');
// var path=require('path');
// var folder=process.argv[2];
// var ext='.'+process.argv[3];
// fs.readdir(folder,function(err,files){
//     if(err){
//         console.log(err);
//         files.forEach(function(file){
//             if(path.extname(file)==ext){
//                 console.log(file);
//             }
//         })
//     }
// })
'use strict'
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
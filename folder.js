const fs = require('fs');
const os = require('os');

// fs.mkdir('assets', (err) => {
//     if(err) {
//         console.log('folder creation failed.')
//     }
//     else {
//         console.log('folder successfully created.')
//     }
// })

// fs.rmdir('assets', (err) => {
//     if(err) {
//         console.log('folder deletion failed.')
//     }
//     else {
//         console.log('folder successfully deleted.')
//     }
// })

// fs.mkdir('lib2', (err) => {
//     if(err) {
//         console.log('folder creation failed.')
//     }
//     else {
//         console.log('folder successfully created.');
//         fs.writeFile('./lib/log.txt',  os.type() , (err) => {
//             if(err) {
//                 console.log('file creation failed - ', err);
//             }
//             else {
//                 console.log('successfully created file.');
//                 fs.readFile('./lib/log.txt', 'utf8', (err, file) => {
//                     if(err) {
//                         console.log('file reading failed - ', err);
//                     }
//                     else {
//                         console.log('file content ++++++++++', file);
//                     }
//                 })
//             }
//         });
//     }
// })


// fs.unlink('./lib2/log.txt' ,(err) => {
//         if(err) {
//             console.log('file deletion failed.')
//         }
//         else {
//             console.log('file deleted.');
//             fs.rmdir('lib2', (err) => {
//                 if(err) {
//                     console.log('folder deletion failed.')
//                 }
//                 else {
//                     console.log('folder successfully deleted.')
//                 }
//             })
//         } 
//     } 
// )

fs.readdir('lib', (err, files) => {
    if(err) {
        console.log('read failed.')
    }
    else {
        console.log(files);
        for(element of files) {
            console.log(element);
            // fs.readFileSync('./lib/'+element, (err, filedata) => {
            //     console.log('inside read file sync---');
            //     if(err) {
            //         console.log('file read failed for - ', element);
            //     }
            //     else {
            //         console.log(`content of ${element} - ${filedata}`)
            //     }
            // })
        };
    }
})




// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//          console.log(i);
//         }, i * 1000 );
// }


// {
//     setTimeout(function() { console.log(i); }, 0 * 1000 );
// }
// {
//     setTimeout(function() { console.log(i); }, 1 * 1000 );
// }
// {
//     setTimeout(function() { console.log(i); }, 2 * 1000 );
// }
// {
//     setTimeout(function() { console.log(i); }, 3 * 1000 );
// }
// {
//     setTimeout(function() { console.log(i); }, 4 * 1000 );
// }



// i = 5 - var


// {console.log(i)}
// {console.log(i)}
// {console.log(i)}
// {console.log(i)}
// {console.log(i)}


// 0 1 2 3 4
// 5 5 5 5 5


// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//          console.log(i);
//         }, i * 1000 );
// }

// IIFE

// for (var i = 0; i < 5; i++) {
//     (setTimeout(function(i) {
//          console.log(i);
//         }, i * 1000 ))(i);
// }

// {
//     i=0
//     setTimeout(function() { console.log(i); }, 0 * 1000 );
// }
// {   
//     i=1
//     setTimeout(function() { console.log(i); }, 1 * 1000 );
// }
// {
//     i=2
//     setTimeout(function() { console.log(i); }, 2 * 1000 );
// }
// {
//     i=3
//     setTimeout(function() { console.log(i); }, 3 * 1000 );
// }
// {   
//     i=4
//     setTimeout(function() { console.log(i); }, 4 * 1000 );
// }


// {
//     i=0
//     console.log(i) ;
// }
// {
//     i=1
//     console.log(i); ;
// }
// {
//     i=2
//     console.log(i)  ;
// }
// {
//     i=3
//     console.log(i) ;
// }
// {
//     i=4
//      console.log(i) ;
// }
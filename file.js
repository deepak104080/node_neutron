const fs = require('fs');

// writefile - create a file and write some content
// readfile - read a file

// fs.writeFile('file2.txt', 'I work at NS - new----', (err) => {
//     if(err) {
//         console.log('file creation failed - ', err);
//     }
//     else {
//         console.log('successfully created file.');
//         fs.readFile('file2.txt', 'utf8', (err, file) => {
//             if(err) {
//                 console.log('file reading failed - ', err);
//             }
//             else {
//                 console.log('file content ++++++++++', file);
//             }
//         })
//     }
// });


// fs.rename('file2.txt', 'newfile2.txt', (err) => {
//     if(err) {
//         console.log('file rename failed - ', err);
//     }
//     else {
//         console.log('file renamed');
//     }
// })

// fs.unlink('newfile2.txt', (err) => {
//     if(err) {
//         console.log('file deletion failed - ', err);
//     }
//     else {
//         console.log('file deleted.');
//     }
// })

// fs.appendFile('file1.txt', 'My country is India.' , (err) => {
//     if(err) {
//         console.log('file append failed - ', err);
//     }
//     else {
//         console.log('file appended.');
//     }
// } )
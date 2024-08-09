 const { error, log } = require('console');
const fs  =  require('fs');

// create file

fs.writeFile('example.txt', "this is an example", (err) => {
  if(err)
    console.log(err);
  else{
    console.log('file successfully created');
    fs.readFile('example.txt', 'utf8', (err, file) => {
      if(err)
        console.log(err)
      else
        console.log(file)
    })
  }
});

//  rename file
fs.rename('example.txt', "example2.tst", (err) => {
  if(err)
    console.log(err)
  else
      console.log('succeessfully renamed')
})


//  append file
fs.appendFile('example2.txt', 'Some data being appended', (err) => {
  if(err)
    console.log(err)
  else
      console.log('Successfully appended data to file')
})

  // delete file
fs.unlink('example2.txt', (err) => {
  if(err)
    console.log(err);
  else
      console.log('successfully deleted the file');
});

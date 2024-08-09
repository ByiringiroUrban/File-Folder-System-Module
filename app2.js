   
           
    const fs  = require('fs')        
           
           //  to create folder  corred tutorial
fs.mkdir('tutorial', (err) => {
  if(err) throw err;
  console.log("successfull folder created");
}) 
   
            // to remove folder corred tutorial
  fs.rmdir('tutorial', (err) => {
    if(err) throw err;
    console.log('successfully deleted the folder')

  })
   

          // to create file into folder
  fs.writeFile('./tutorial/example.txt','123',  (err) => {
    if(err)
      console.log(err)
    else{
      console.log("successfull file created")
    }
  })


            // remove folder have file in it


fs.unlink('./tutorial/example.txt', (err) => {
  if(err)
    console.log(err);
  else{
    fs.rmdir('tutorial', (err) => {
      if(err)throw err;
      console.log("deleted folder")
    });
  }
});


        // to delete  all files that are include in folder named example
fs.readdir('example', (err, files) => {
  if(err)  
    console.log(err)
  else{
    for (let file of files){
      fs.unlink('./example/' + file, (err) => {
        if(err)
          console.log(err);
        else{
          console.log('Successfully deleted file');
        }
      })
    }
  }
});


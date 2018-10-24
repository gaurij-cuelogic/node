
var fs = require('fs');
var glob = require('glob');
//reading file
fs.readFile('textfile.txt', function(err,data){
    if(err){
        return console.log(err);
    } 
    console.log(data.toString());
})

//open a file
console.log("going to open file");
fs.open('textfile.txt','r+',function(err,fd){
if(err){
    return console.log(err);
}
console.log("file opened successfully");
})

//append file
console.log("appendin file");
fs.appendFile('textfile.txt','appending',function(err){
 if(err){
    return console.log(err);
 }
 console.log("append successful");
});


//get file information

console.log("getting file info");
fs.stat('textfile.txt',function(err,stats){
    if(err){
        return console.log(err);
    }
    console.log(stats);
    console.log("got info successfully");

    console.log("is file?" ,stats.isFile());
    console.log("is directory?",stats.isDirectory());
})

//writing in file(over-write)
console.log("Going to write into existing file");
fs.writeFile('textfile.txt', 'adding a line', function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
});

//reading a file
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('textfile.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to read the file");
 //fs.read(fd, buffer, offset, length, position, callback)
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + " bytes read");
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }

      fs.truncate(fd,10,function(err){
          if(err){
              console.log(err);
          }
          console.log("file truncated successfully");
          fs.read(fd,buf,0,buf.length,0,function(err,bytes){
              if(err){
                  console.log(err);
              }
          })
          if(bytes>0){
              console.log(buf.slice(0,bytes).toString());
          }
      //closing
      fs.close(fd,function(err){
          if(err){
              console.log(err);
          }
          console.log("file closed successfully");
      });
        });


   });
});

//deleting a file

console.log("going to delete an existing file");
fs.unlink('textfile1.txt',function(err){
    if(err){
        return console.log(err);
    }
    console.log("file deleted successfully");
})

creating a directory

console.log("creating a directory");
fs.mkdir('abc',function(err){
   if(err){
       return console.log(err);
   } 
   console.log("directory created successfully");
})

//read a directory
console.log("Going to read directory ");
fs.readdir("abc",function(err, files) {
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file) {
      console.log( file );

  });
});

//reading directory recursively
var getDirectories = function (src, callback) {
    glob(src + '/**/*', callback);
  };
  getDirectories('abc', function (err, res) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log(res);
    }
  });

//remove directory
console.log("Going to delete directory /tmp/test");
fs.rmdir("/tmp/test",function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Going to read directory /tmp");
   
   fs.readdir("/tmp/",function(err, files) {
      if (err) {
         return console.error(err);
      }
      files.forEach( function (file) {
         console.log( file );
      });
   });
});

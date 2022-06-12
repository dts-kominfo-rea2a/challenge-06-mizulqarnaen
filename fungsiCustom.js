// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  const files = [file1, file2, file3];
  const message = [];

  files.forEach((file, index) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if(err) {
          fnCallback(err, null);
        } else {
          data = JSON.parse(data);
          switch (file) {
            case file1:
              message.push(data.message.split(" ")[1]); break;
            case file2:
              message.push(data[0].message.split(" ")[1]); break;
            case file3:
              message.push(data[0].data.message.split(" ")[1]); break;
          }
          if(index == (files.length - 1)){
            fnCallback(err, message);
          }
        }
      }
    );
  });
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};

// used to initialize the database with some dummy data
const fs = require("fs");

// create data
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
const jsonData = JSON.stringify(messages);

function createData() {
    fs.writeFileSync("./data/data.json", jsonData, (err) => {
        if (err) {
            console.log("Error writing file", err);
        } else {"Data written successfully"}
    });
}

module.exports = {createData}

// fs.writeFile("./data/data.json", jsonData, (err) => {
//     if (err) {
//         console.log("Error writing file", err);
//     } else {"Data written successfully"}
// });


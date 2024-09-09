const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/data.json'); // Path to your messages file

// Write a new entry to the JSON file
const writeEntry = async (newEntry) => {
    let messages = await getAllMessages(); // Fetch current messages
    messages.push(newEntry); // Add the new message
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2)); // Write updated data back to the file
};

// Read messages from the JSON file
const getAllMessages = async () => {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8'); // Read the file
        return JSON.parse(data); // Parse the JSON data
    }
    return []; // If no file exists, return an empty array
};

module.exports = { writeEntry, getAllMessages };

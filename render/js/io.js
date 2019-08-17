const fs = require('fs');

// Attempts to read the user data from disk
// If read is successful, return json object
// If read fails, return null
export function readData() {
    try {
        console.log("test");
        obj = JSON.parse(fs.readFileSync('userData.json'));
        return obj;
    } catch (err) { console.log(`Failed to read file: ${err}`); }

    return null;
}

// Attempts to save user data to disk
// If save is successful, return true, false otherwise
export function saveData(data) {
    try {
        fs.writeFileSync('userData.json', JSON.stringify(data));
        return true;
    } catch (err) { console.log(`Failed to save file: ${err}`); }

    return false;
}

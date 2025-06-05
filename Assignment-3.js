const fs = require("fs");
const path = require("path");

// LEVEL 1: Basic File Operations

// 1. Create a Text File
fs.writeFileSync("notes.txt", "This is a note.");
console.log("File 'notes.txt' created successfully.");

// 2. Read and Display File Content
const content = fs.readFileSync("notes.txt", "utf-8");
console.log("File Content:", content);

// 3. Append Text to a File
fs.appendFileSync("notes.txt", "\nThis note was updated.");
console.log("Text appended successfully.");

// LEVEL 2: Conditional and Error Handling

// 4. Check if File Exists Before Writing
if (fs.existsSync("notes.txt")) {
  fs.appendFileSync("notes.txt", `\nChecked at ${new Date().toLocaleString()}`);
  console.log("File exists. Appended timestamp.");
} else {
  fs.writeFileSync("notes.txt", "This is a note.");
  console.log("File did not exist, so it was created.");
}

// 5. Rename a File
if (fs.existsSync("notes.txt")) {
  fs.renameSync("notes.txt", "updatedNotes.txt");
  console.log("File renamed to 'updatedNotes.txt'.");
}

// 6. Delete a File Safely
if (fs.existsSync("updatedNotes.txt")) {
  fs.unlinkSync("updatedNotes.txt");
  console.log("'updatedNotes.txt' deleted.");
} else {
  console.log("File 'updatedNotes.txt' does not exist.");
}

// LEVEL 3: Working with Directories

// 7. Create a Folder and Write a File Inside
const logsDir = "logs";
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}
fs.writeFileSync(path.join(logsDir, "log1.txt"), "Log created");
console.log("Folder 'logs' and file 'log1.txt' created.");

// 8. Read All Files in a Folder
const files = fs.readdirSync(logsDir);
console.log("Files inside 'logs' folder:", files);

// LEVEL 4: Mini Projects

// 9. File Logger
function logMessage(message) {
  const logsDir = "logs";
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
  }
  const date = new Date();
  const filename = `log-${date.toISOString().slice(0, 10)}.txt`;
  const timestamp = date.toLocaleTimeString();
  fs.appendFileSync(path.join(logsDir, filename), `[${timestamp}] ${message}\n`);
  console.log(`Logged: ${message}`);
}
logMessage("This is a log message");

// 10. File Backup Script
const sourceDir = "source";
const backupDir = "backup";

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

if (fs.existsSync(sourceDir)) {
  const sourceFiles = fs.readdirSync(sourceDir);
  sourceFiles.forEach(file => {
    if (file.endsWith(".txt")) {
      fs.copyFileSync(path.join(sourceDir, file), path.join(backupDir, file));
      console.log(`Copied ${file} to backup.`);
    }
  });
} else {
  console.log("Source directory does not exist.");
}

console.log("All tasks executed successfully!");


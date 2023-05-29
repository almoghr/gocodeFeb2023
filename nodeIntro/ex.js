import fs from 'fs'
import express from 'express'

const app = express();

app.get('/sayHello', (req, res) => {
    res.send('Hello World!')
  });

  app.get('/sayGoodBye', (req, res) => {
    res.send('Goodbye World!')
  });

  app.get('/', (req,res) => {
    res.send('got here!')
  })
const readFile = (path) => {
    return JSON.parse(fs.readFileSync(path, 'utf8'))
}

const writeToFileSingleObject = (obj, path) => {
    const fileArray = readFile(path)
    fileArray.push(obj)
    fs.writeFile(path, JSON.stringify(fileArray), writeFunc);        console.log("Done writing"); // Success 

    
}
const writeFunc = (err) => {  
    // Checking for errors 
    if (err) throw err; 
};      

const writeToFileArray = (arr, path) => {
    fs.writeFile(path, JSON.stringify(arr), writeFunc)
    console.log("Done writing"); // Success 
}
// writeToFile({id:Date.now(), title:'zohar', description:'hello world', isCompleted:false}, "./users.json")

const deleteFromFile = (id, path) => {
    const fileArray = readFile(path);
    const itemToBeDeletedIndex = fileArray.findIndex(item => item.id === id)
    const clone = [...fileArray]
    clone.splice(itemToBeDeletedIndex, 1)
    writeToFileArray(clone, path)
}

// deleteFromFile(2, "./users.json")

const updateFile = (id, path, updatedObj) => {
    const fileArray = readFile(path);
    const itemToBeUpdated = fileArray.findIndex(item => item.id === id)
    const clone = [...fileArray]
    for (const key in updatedObj)
    clone[itemToBeUpdated][key] = updatedObj[key]
    writeToFileArray(clone, path)
}

updateFile(1, "./users.json",{isCompleted:false, title:'yabadabadu', check:123})


app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
  });
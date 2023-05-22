import fs from "fs";
import express from "express";

const app = express();

app.use(express.json());


const readFile = (path) => {
  return JSON.parse(fs.readFileSync(path, "utf8"));
};

const writeToFileSingleObject = (obj, path) => {
  const fileArray = readFile(path);
  fileArray.push(obj);
  fs.writeFile(path, JSON.stringify(fileArray), writeFunc);
  console.log("Done writing"); // Success
  return fileArray
};
const writeFunc = (err) => {
  // Checking for errors
  if (err) throw err;
};

const writeToFileArray = (arr, path) => {
  fs.writeFile(path, JSON.stringify(arr), writeFunc);
  console.log("Done writing"); // Success
};
// writeToFile({id:Date.now(), title:'zohar', description:'hello world', isCompleted:false}, "./users.json")

const deleteFromFile = (id, path) => {
  const fileArray = readFile(path);
  const itemToBeDeletedIndex = fileArray.findIndex((item) => item.id === +id);
  const clone = [...fileArray];
  clone.splice(itemToBeDeletedIndex, 1);
  writeToFileArray(clone, path);
  return clone
};

// deleteFromFile(2, "./users.json")

const updateFile = (id, path, updatedObj) => {
    const fileArray = readFile(path);
    const itemToBeUpdated = fileArray.findIndex(item => item.id === +id)
    const clone = [...fileArray]
    for (const key in updatedObj)
    clone[itemToBeUpdated][key] = updatedObj[key]
    writeToFileArray(clone, path)
    return clone
}

app.get("/", (req, res) => res.send(readFile("./scores.json")));

app.get("/score/:id", (req,res) => {
    const fileArray = readFile("./scores.json")
    const id = req.params.id
    const desiredScore = fileArray.find(item => item.id===parseInt(id))
    console.log(desiredScore)
    res.send(desiredScore)
})

app.post("/", (req,res)=>{
    const obj = {...req.body}
    console.log(obj)
    if(Object.keys(obj).length === 0 ){
        res.send("failed")
    }
    const answer = writeToFileSingleObject(obj,"./scores.json")
    res.send(answer)
})

app.put("/score/:id", (req,res) => {
    const id = req.params.id
    const obj = {...req.body}
    const answer = updateFile(id, "./scores.json", obj)
    res.send(answer)
})

app.delete("/score/:id/", (req,res) => {
    const id = req.params.id
    const answer = deleteFromFile(id, "./scores.json")
    res.send(answer)
})

app.listen(8001, () => {
  console.log("Example app listening on port 8001!");
});

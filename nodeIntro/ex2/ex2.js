import cors from 'cors'
import mongoose from "mongoose";
import express from "express";

const app = express();

app.use(express.json());
app.use(cors())
//CRUD
//CREATE - writeToFile - singleObject \ array - POST
//READ - readfile - GET
//UPDATE - update object in a file - PUT\PATCH
//DELETE - delete object from a file - DELETE

const scoreSchema = new mongoose.Schema({
  score: {
    type: Number,
    required: true,
  },
  isExellence:{
    type: Boolean,
    default:false
  }
});

const Score = mongoose.model("Score", scoreSchema);

// const readFile = (path) => {
//   console.log(`reading from ${path}`)
//   return JSON.parse(fs.readFileSync(path, "utf8"));
// };

// const writeToFileSingleObject = (obj, path) => {
//   // const fileArray = readFile(path);
//   // fileArray.push(obj);
//   // fs.writeFile(path, JSON.stringify(fileArray), writeFunc);
//   // console.log("Done writing"); // Success
//   // return fileArray
// };
// const writeFunc = (err) => {
//   // Checking for errors
//   if (err) throw err;
// };

// const writeToFileArray = (arr, path) => {
//   fs.writeFile(path, JSON.stringify(arr), writeFunc);
//   console.log("Done writing"); // Success
// };
// // writeToFile({id:Date.now(), title:'zohar', description:'hello world', isCompleted:false}, "./users.json")

// const deleteFromFile = (id, path) => {
//   const fileArray = readFile(path);
//   const itemToBeDeletedIndex = fileArray.findIndex((item) => item.id === +id);
//   const clone = [...fileArray];
//   clone.splice(itemToBeDeletedIndex, 1);
//   writeToFileArray(clone, path);
//   return clone
// };

// // deleteFromFile(2, "./users.json")

// const updateFile = (id, path, updatedObj) => {
//     const fileArray = readFile(path);
//     const itemToBeUpdated = fileArray.findIndex(item => item.id === +id)
//     const clone = [...fileArray]
//     for (const key in updatedObj)
//     clone[itemToBeUpdated][key] = updatedObj[key]
//     writeToFileArray(clone, path)
//     return clone
// }

app.get("/", async (req, res) => {
  const scores = await Score.find({});
  res.status(200).send(scores);
});

app.get("/score/:id", async (req, res) => {
  const id = req.params.id;
  const score = await Score.findOne({ _id: id });
  res.status(200).send(score);

});
app.get("/average", async (req, res) => {
  const scores = await Score.find({});
  let totalScore = 0;
  scores.forEach((element) => (totalScore += element.score));
  console.log(totalScore);
  const average = totalScore / fileArray.length;
  res.send(
    `your total score is ${totalScore} and the average of it all is ${average}`
  );
});
app.post("/", async (req, res) => {
  try{
    const obj = { ...req.body };
    console.log(obj);
    if (Object.keys(obj).length === 0) {
      res.send("failed");
      return  
    }
    const score = new Score(obj)
    await score.save()
    res.send(score)

  }catch(e){
    console.log(e)
    res.status(500).send({message:e})
}
});

app.put("/score/:id", async (req, res) => {
  const userAllowedUpdates = ["score", "isExellence"]
  const updates = Object.keys(req.body);
  const isValidOperation = updates.every((update) =>
  userAllowedUpdates.includes(update)
  );

  if (!isValidOperation) {
      res.status(400).send({message: "Invalid updates"})
  }
  
  try {
      const id = req.params.id
      const score = await Score.findOne({_id:id})
    if (!score) {
      res.status(404).send({message: "score does not exist"})
    }
    updates.forEach((update) => (score[update] = req.body[update]));
    await score.save();
    res.status(200).send(score)
  } catch (e) {
      console.log(e)
      res.status(500).send({message:e})
  }
});

app.delete("/score/:id/", async (req, res) => {
  const id = req.params.id;
  const deletedScore = await Score.findOneAndDelete({_id:id})

  if (!deletedScore) {
    res.status(404).send({message: "score does not exist"})
  }

  res.status(200).send(deletedScore)
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/go-code-shop");
}

main().catch((err) => console.log(err));

app.listen(8001, () => {
  console.log("Example app listening on port 8001!");
});

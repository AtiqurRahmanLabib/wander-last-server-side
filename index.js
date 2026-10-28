import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const port = 8000;
const client = new MongoClient(process.env.MONGODB_URI);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

const mondoClient = await connectToMongoDB();
const db = mondoClient.db("wanderlast");
const destinationCollention = db.collection("destination");
const bookingCollention = db.collection("Booking");

app.get("/add-destination", (req, res) => {
  res.send("Add destination API is working!");
});

app.post("/add-destination", async (req, res) => {
  const data = req.body;
  const result = await destinationCollention.insertOne(data);
  console.log(result);
  res.json({
    success: true,
    message: "Destination added successfully",
    insertedId: result.insertedId,
  });
});

app.get("/destinations", async (req, res) => {
  const result = await destinationCollention.find().toArray();
  res.send(result);
});
app.get("/destination/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const result = await destinationCollention.findOne({ _id: new ObjectId(id) });
  console.log(result);
  res.send(result);
});

app.patch("/destination/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await destinationCollention.updateOne(
    { _id: new ObjectId(id) },
    { $set: data },
  );
  res.send(result);
});

app.delete("/destination/:id", async (req, res) => {
  const { id } = req.params;
  const result = await destinationCollention.deleteOne({
    _id: new ObjectId(id),
  });
  res.send(result);
});

app.post("/booking", async (req, res) => {
  const data = req.body;
  console.log(data);
  const result = await bookingCollention.insertOne(data);
  console.log(result);
  res.send(result);
});

app.get("/my-booking/:email", async (req, res) => {
  const { email } = req.params;
  const result = await bookingCollention.find({ email: email }).toArray();
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

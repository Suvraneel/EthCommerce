import { WithId, Document } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req: {
  query: any; method: any; body: string; 
}, res: { json: (arg0: { status: number; data: WithId<Document>[]; }) => void; }) {
  const client = await clientPromise;
  const db = client.db("gumroad");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      await db.collection("products").insertOne(bodyObject);
      res.json({
        status: 200,
        data: []
      });
      break;
    case "GET":
      const products = await db.collection("products").find({}).sort({ createdAt: -1 }).toArray();
      res.json({ status: 200, data: products });
      break;
  }
}

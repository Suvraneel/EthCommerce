import { WithId, Document, ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req: { query: any }, res: { json: (arg0: { status: number; data: WithId<Document>; }) => void; }) {
    const client = await clientPromise;
    const db = client.db("gumroad");
    console.log(req.query);
    const query = { _id: new ObjectId(req.query.id) };

    const product = await db.collection("products").findOne(query);
    res.json({ status: 200, data: product! });

}

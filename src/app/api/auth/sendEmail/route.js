import { MongoClient } from "mongodb";
import crypto from 'crypto';
import { NextResponse, NextRequest } from "next/server";

const client = new MongoClient(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const database = client.db('url-shortener');
const collection = database.collection('auth');

export async function POST(request, response) {
  const { email, password, firstName, lastName, rememberMe } = request.body;

  const existingUser = await collection.findOne({ email, password });

  if (existingUser) {
    return response.status(404).send('User already exists');
  }

  const payload = { email, firstName, lastName, password, rememberMe };
  try{

  
  const cipher = crypto.createCipheriv('aes-256-ocb', process.env.SECRET_KEY, process.env.IV);
  let encryptedData = cipher.update(JSON.stringify(payload), 'utf8', 'hex');
  encryptedData += cipher.final('hex');
}
  catch(err){
    console.log(err)
  }
  const link = `/api/auth/create-user?data=${encryptedData}`;

  return response.status(200).send(link);
}
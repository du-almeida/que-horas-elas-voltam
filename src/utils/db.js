import mongoose from "mongoose";


export default async function Connect() {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error(error);
  }
}

































































































// // lib/db.js
// import mongoose from "mongoose";

// export default async function connect() {
//   try {
//     await mongoose.connect(process.env.MONGO);
//   } catch (error) {
//     throw new Error(error);
//   }
// }


// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('Defina a variável de ambiente MONGODB_URI');
// }

// /** Função para conectar ao MongoDB */
// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// export async function connectToDatabase() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://duevelynsantos:usuarios@usuarios.qvxap.mongodb.net/auth?retryWrites=true&w=majority&appName=Usuarios";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
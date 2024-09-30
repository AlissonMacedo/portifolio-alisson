import mongoose from "mongoose"
import { Db } from "mongodb"

let cachedDb: Db | null = null

const connect = async () => {
  if (cachedDb) {
    return cachedDb
  }

  try {
    await mongoose.connect(process.env.DB_HOST ?? "")

    console.log("Mongo connection successful")
  } catch (error) {
    throw new Error("Error in connecting to mongodb.")
  }
}

export default connect

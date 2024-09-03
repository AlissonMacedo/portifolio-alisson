import { MongoClient, Db } from "mongodb"
import { URL } from "url"

let cachedDb: Db | null = null

export default async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb
  }

  const client = await MongoClient.connect(uri)

  const parsedUrl = new URL(uri)
  const dbName = parsedUrl?.pathname?.substr(1) || ""

  const db = client.db(dbName)

  cachedDb = db

  return db
}

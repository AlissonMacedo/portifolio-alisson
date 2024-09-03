import "server-only"
import { MongoClient, Db } from "mongodb"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcrypt"
import connectToDatabase from "../dataBase/connectToDatabase"

const POST = async (request: NextRequest) => {
  try {
    const { email, password } = await request.json()

    const hashedPassword = await bcrypt.hash(password, 10)

    const db = await connectToDatabase(process.env.DB_HOST ?? "")

    const collection = db.collection("users")

    await collection.insertOne({ email, password: hashedPassword })

    return Response.json(
      { message: `Foi inserido um novo usuário com sucesso` },
      { status: 201 }
    )
  } catch (e: any) {
    return Response.json({ message: e.message }, { status: 500 })
  }
}

const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const db = await connectToDatabase(process.env.DB_HOST ?? "")

    const users = await db
      .collection("users")
      .find({})
      .sort({ metacritic: -1 })
      .toArray()

    return Response.json({ users: users }, { status: 201 })
  } catch (e: any) {
    return Response.json({ message: e.message }, { status: 500 })
  }
}

const PUT = async (req: NextRequest, res: NextResponse) => {
  return Response.json({ message: "PUT" }, { status: 200 })
}

const DELETE = async (req: NextRequest, res: NextResponse) => {
  return Response.json({ message: "DELETE" }, { status: 200 })
}

export { POST, GET, PUT, DELETE }

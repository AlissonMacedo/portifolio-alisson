import { MongoClient, Db } from "mongodb"
import { NextRequest, NextResponse } from "next/server"
import url from "url"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import connectToDatabase from "../dataBase/connectToDatabase"

const POST = async (request: NextRequest) => {
  try {
    const { email, password } = await request.json()

    const db = await connectToDatabase(process.env.DB_HOST ?? "")

    const collection = db.collection("users")

    const user = await collection.findOne({ email })

    if (!user) {
      return Response.json(
        { message: "Usuário não encontrado" },
        { status: 404 }
      )
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return Response.json(
        { message: "Falha na autenticação" },
        { status: 401 }
      )
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET ?? "", {
      expiresIn: "1h",
    })

    return Response.json({ token: token }, { status: 201 })
  } catch (e: any) {
    return Response.json({ message: e.message }, { status: 500 })
  }
}

export { POST }

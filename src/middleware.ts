import { NextRequest, NextResponse } from "next/server"
import * as jose from "jose"

interface CustomNextRequest extends NextRequest {
  userId?: string
}

const jwtConfig = {
  secret: new TextEncoder().encode(process.env.SECRET),
}

export async function middleware(req: CustomNextRequest) {
  let token =
    req.headers.get("authorization") || req.headers.get("Authorization")

  if (!token) {
    return Response.json({ message: "Not authenticated." }, { status: 401 })
  }

  try {
    if (token.startsWith("Bearer")) {
      token = token.replace("Bearer ", "")
    }

    const decoded = (await jose.jwtVerify(
      token,
      jwtConfig.secret
    )) as unknown as {
      userId: string
    }

    req.userId = decoded.userId

    return NextResponse.next()
  } catch (e: any) {
    return Response.json({ message: e.message }, { status: 500 })
  }
}

export const config = {
  matcher: ["/api/users/:path*"],
}

"use client"

import { signOut } from "next-auth/react"

export const SignOutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="bg-red-500 text-white px-4 py-2 rounded-lg"
    >
      Sign Out
    </button>
  )
}

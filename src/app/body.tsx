import axios from "axios"
import React, { useState } from "react"

// import { Container } from './styles';

export const Body = () => {
  const [authorization, setAuthorization] = useState()
  const [users, setUsers] = useState<
    { name?: string; email?: string; _id: string }[]
  >([])

  const login = async () => {
    const {
      data: { token },
    } = await axios.post("/api/login", {
      email: "alisson@gmail.com2",
      password: "123",
    })
    setAuthorization(token)
    console.log("teste", login)
  }

  const teste = async () => {
    const {
      data: { users },
    } = await axios.get("/api/users", {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    })
    setUsers(users)
  }

  return (
    <>
      <button
        style={{ background: "#fff", color: "#000", padding: "10px" }}
        onClick={() => login()}
      >
        Login
      </button>
      <button
        style={{
          background: "#fff",
          color: "#000",
          padding: "10px",
          marginTop: "10px",
        }}
        onClick={() => teste()}
      >
        Teste
      </button>
      <ul>
        {users?.map((user: any) => (
          <>
            <li key={user._id}>{user.name}</li>
            <li key={user._id}>{user.email}</li>
          </>
        ))}
      </ul>
    </>
  )
}

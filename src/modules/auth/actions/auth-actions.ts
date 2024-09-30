interface ILogin {
  email: string
  password: string
}

async function login({ email, password }: ILogin) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
    if (response.ok) {
      const { token } = await response.json()
      localStorage.setItem("token", token)
      return true
    }
    const { message } = await response.json()
    throw new Error(message)
  } catch (e: any) {
    throw new Error(e.message)
  }
}

export default login

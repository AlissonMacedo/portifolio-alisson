import React from "react"
import login from "../actions/auth-actions"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Input from "./input"

type FormProps = {
  email?: string
  password?: string
}

const schema = z.object({
  email: z.string().min(10, "Minimo 10 caracteres").email(),
  password: z.string().min(6, "Minimo 6 caracteres"),
})

type FormValues = z.infer<typeof schema>

export default function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  })
  const [loading, setLoading] = React.useState(false)

  async function handleSubmitForm(data: FormValues) {
    console.log("data", data)

    setLoading(true)

    const response = await login({
      email: "alisson@gmail.com2",
      password: "123",
    })

    console.log("response", response)
    setLoading(false)
  }
  console.log("errors", errors)

  if (loading) {
    return <span>Loading...</span>
  }

  if (errors.email?.message || errors.password?.message) {
    return (
      errors.email && <span>{errors.email.message}</span>,
      errors.password && <span>{errors.password.message}</span>
    )
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input {...register("email")} />
        {/* <input name="email" type="text" placeholder="email"  />
        <input name="password" type="password" placeholder="senha" /> */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

"use client"
import axios from "axios"
import { useState } from "react"
import { Header } from "./header"
import { Body } from "./body"

export default function Home() {
  return (
    <>
      <Header />
      <Body />
    </>
  )
}

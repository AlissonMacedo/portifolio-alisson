"use client"

import React from "react"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#333" }}>
      <h1>Header</h1>
      {children}
      <h1>Footer</h1>
    </div>
  )
}

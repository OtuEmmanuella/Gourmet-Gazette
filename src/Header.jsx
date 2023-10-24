import React from "react"
import "./Header.css"

export default function Header() {
  return (
    <>
      <header>
        <div className="Heading container">
          <img src="./logo.svg" className="logo" />
          <p className="title">Gourmet Gazette</p>
        </div>
      </header>
    </>
  )
}

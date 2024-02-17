import React from 'react'
import logo from "../assets/logo-oficial.png";

function Logo({width = "214px", height = "52px"}) {
  return (
    <img src={logo} width={width} height={height} alt="Juntos Logotipo" />
  )
}

export default Logo
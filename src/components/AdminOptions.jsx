import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AdminOptions() {
  return (
    <Container>
        <Row>Conteúdos para aprovar</Row>
        <Row>Categorias para aprovar</Row>
        <Row>Comentários para aprovar</Row>
        <Row>Fazer usuário mentor</Row>
    </Container>
  )
}

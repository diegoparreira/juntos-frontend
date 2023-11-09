import React from 'react'
import CardContent from './CardContent'
import { Container, Row } from 'react-bootstrap';

export default function CategorySection({category, contents}) {
    console.log(`Category ${category.name} debug`);
    console.log(category);
    console.log(contents);
  return (
    <Row>
        <h1 className='mb-3' style={{color: category.color}}>{category.name}</h1>
        {contents.map(content => {
            return <CardContent key={content.id} content={content}/>
        })}
    </Row>
  )
}

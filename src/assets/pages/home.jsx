import React from 'react'
import { Header } from '../components/header'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Home = () => {
  const record = useSelector(state => state.crud.users) || [];
  console.log(record);
  return (
    <>
      <Header />
      <Container>
        <Row className='d-flex flex-wrap justify-content-between'>

          {
            record.map((val) => {
              const { id, movieName, movieDes, movieRating, movieImage, movieCategory } = val
              return (
                <Card style={{ width: '18rem', backgroundColor: '#000021' }} className='m-3'>
                  <Card.Img variant="top" height={375} src={movieImage} />
                  <Card.Body className='d-flex flex-column'>
                    <p className='text-secondary text-opacity-50'>#{movieCategory}</p>
                    <Card.Title className='text-white'>{movieName}</Card.Title>
                    <Card.Text className='text-secondary'>
                      {movieDes}
                    </Card.Text>
                    <div className='mt-auto'>
                      <Button variant="primary">Rating : {movieRating}/5</Button>
                    </div>
                  </Card.Body>
                </Card>
              )
            })
          }
          <Link to={'/add'}>Add</Link>
        </Row>
      </Container>
    </>
  )
}

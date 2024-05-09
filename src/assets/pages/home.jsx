import React from 'react'
import { Header } from '../components/header'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {FILTTER_DATA} from '../../redux/action/action';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Home = () => {
  const dispatch = useDispatch();
  const record = useSelector(state => state.crud.users) || [];
  const rec = useSelector(state => state.crud.fltr) || [];
  console.log(rec);
  let data = rec.length > 0 ? rec : record
  let btn = ["Comedy", "Action", "Sci-fi", "Crime", "Family", "Romance", "Advanture", "Animation", "Documentary", "Drama", "Fantasy", "History", "Horror", "Western", "War", "Thriller", "TV Movie", "Music", "Mystery"]
  const Filter =(value)=> {
    dispatch(FILTTER_DATA(value))
  }
  
  return (
    <>
      <Header />
      <Container>
        <Row className='d-flex flex-wrap justify-content-between'>
        <div className="d-flex flex-wrap justify-content-center">
        <Button variant="outline-light" className='m-3 py-2 px-4' >All </Button>
        {
          btn.map((val)=>{
            return(
              <Button key={val} variant="outline-light" className='m-3 py-2 px-4' onClick={()=>Filter(val)}>{val}</Button>
            )
          })
        }
        </div>
          {
            data.map((val) => {
              const { id, movieName, movieDes, movieRating, movieImage, movieCategory } = val
              return (
                <Card key={id} style={{ width: '18rem', backgroundColor: '#000021' }} className='m-3'>
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

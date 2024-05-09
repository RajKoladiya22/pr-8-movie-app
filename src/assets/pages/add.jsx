import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Header } from '../components/header';
import { Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ADD_DATA } from '../../redux/action/action';


export const Add = () => {
    const dispatch = useDispatch();
    const [movieName, setMovieName] = useState('');
    const [movieDes, setMovieDes] = useState('');
    const [movieRating, setMovieRating] = useState('');
    const [movieImage, setMovieImage] = useState('');
    const [movieCategory, setMovieCategory] = useState([]);
    const categories = ["Comedy", "Action", "Sci-fi", "Crime", "Family", "Romance", "Advanture", "Animation", "Documentary", "Drama", "Fantasy", "History", "Horror", "Western", "War", "Thriller", "TV Movie", "Music", "Mystery"]

    let cat = categories.sort((a, b) => {
        return a.localeCompare(b)
    })
    
    const handalsubmit =(e)=> {
        e.preventDefault();
        let obj = {
            id : Math.floor(Math.random()*100),
            movieName, movieDes,movieRating, movieImage, movieCategory
        }
        dispatch(ADD_DATA(obj));

    }

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Form className='w-50' onSubmit={handalsubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='mt-4'>Movie Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Movie Name" onChange={(e) => setMovieName(e.target.value)} value={movieName} />
                            <Form.Text className="text-muted">
                            </Form.Text>

                            <Form.Label className='mt-4'>Movie Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Movie Description" onChange={(e) => setMovieDes(e.target.value)} value={movieDes} />
                            <Form.Text className="text-muted">
                            </Form.Text>

                            <Form.Label className='mt-4'>Movie Rating</Form.Label>
                            <div className="d-flex justify-content-between  ">
                            <Form.Check type="radio" onChange={(e) => setMovieRating(e.target.value)} value='1' checked={movieRating === "1"} label='1'/>
                            <Form.Check type="radio" onChange={(e) => setMovieRating(e.target.value)} value='2' checked={movieRating === "2"} label='2' />
                            <Form.Check type="radio" onChange={(e) => setMovieRating(e.target.value)} value='3' checked={movieRating === "3"} label='3' />
                            <Form.Check type="radio" onChange={(e) => setMovieRating(e.target.value)} value='4' checked={movieRating === "4"} label='4' />
                            <Form.Check type="radio" onChange={(e) => setMovieRating(e.target.value)} value='5' checked={movieRating === "5"} label='5' />
                            </div>
                            <Form.Text className="text-muted">
                            </Form.Text>

                            <Form.Label className='mt-4'>Movie Image</Form.Label>
                            <Form.Control type="text" placeholder="Enter Movie Name" onChange={(e) => setMovieImage(e.target.value)} value={movieImage} />
                            <Form.Text className="text-muted">
                            </Form.Text>

                            <Form.Label className='mt-4'>Select Category</Form.Label><br />


                            {cat.map((category, index) => (
                                <Form.Check
                                    inline
                                    key={index}
                                    type="checkbox"
                                    label={category}
                                    onChange={(e) => setMovieCategory(e.target.value)}
                                    value={category}
                                />
                            ))}

                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container >
        </>
    )
}

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Header } from '../components/header';
import { Container, Row } from 'react-bootstrap';

export const Add = () => {
    const [movieName, setMovieName] = useState('');
    const [movieRating, setMovieRating] = useState('');
    const [movieImage, setMovieImage] = useState('');
    const [movieCategory, setMovieCategory] = useState([]);
    const categories = ["Comedy", "Action", "Sci-fi", "Crime", "Family", "Romance", "Advanture", "Animation", "Documentary", "Drama", "Fantasy", "History", "Horror", "Western", "War", "Thriller", "TV Movie", "Music", "Mystery"]

    const hendalSubmit = (e) => {
        e.preventDefault();
        console.log(movieCategory);
    }
    movieCategory.forEach((category) => {
        // Check if selected category already exists
        const existingCategoryIndex = categories.findIndex(cat => cat.name === category);
        if (existingCategoryIndex !== -1) {
          const updatedMovies = [...movies];
          updatedMovies[existingCategoryIndex].movies.push(newMovie);
          setMovies(updatedMovies);
        } else {
          const newCategory = {
            name: category,
            movies: [newMovie],
          };
          setMovies([...movies, newCategory]);
          setCategories([...categories, { name: category }]);
        }
      });

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Form className='w-50' onSubmit={hendalSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='mt-4'>Movei Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Movei Name" onChange={(e) => setMovieName(e.target.value)} value={movieName}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                            <Form.Label className='mt-4'>Movei Rating(0-5)</Form.Label>
                            <Form.Control type="text" placeholder="Enter Movei Rating" onChange={(e) => setMovieRating(e.target.value)} value={movieRating}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                            <Form.Label className='mt-4'>Movei Image</Form.Label>
                            <Form.Control type="text" placeholder="Enter Movei Name" onChange={(e) => setMovieImage(e.target.value)} value={movieImage}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                            <Form.Label className='mt-4'>Select Category</Form.Label>
                            <Form.Control
                                as="select"
                            value={movieCategory}
                            onChange={(e) => setMovieCategory(e.target.value)}
                            >
                                <option value="">Select Category</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </Form.Control>

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

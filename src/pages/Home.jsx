import React from 'react';
import MovieCard from '../components/MovieCard';
import styled from 'styled-components';
import { getPopularMovies } from '../api';

function Home() {

    const [search, setSearch]= React.useState("");
    const [movies, setMovies]=React.useState([]);
    const [error, setError]=React.useState(null);
    const [loading, setLoading]=React.useState(true);

    console.log(movies);

React.useEffect(()=> {
    const loadMovies = async () => {
        try {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        } catch (error) {
            setError("Failed to fetch data");
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    loadMovies();

}, [])

    const handleSubmit=(e)=> {
        e.preventDefault();
        if(!search.trim()) return; 
        if(loading) return;
        alert(search);
        setSearch("");
        try {
            
        } catch (error) {
            
        }
    }


  return (
    <div className="home center">
    <Form className="search-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search movies..." value={search} onChange={(e)=> setSearch(e.target.value)}></input>
        <button type="submit">Submit</button>
    </Form>

    {error && (<div className="error">{error}</div>)}

      {loading ? <div className="loading">Loading</div> : (
        <Div className="movies-grid">
        {movies.map((movie) => (
            movie.title.toLowerCase().startsWith(search) && <MovieCard key={movie.id} movie={movie}></MovieCard>

        ) )}
      </Div>
      )}
    </div>
  )
}

const Form = styled.form`
margin: 0 auto;
padding: 1rem 0;
display: flex;
width: 300px;
align-items: center;
justify-content: space-between;
 input {
    width: 220px;
    padding: 0.5rem;
    border: none;
    border-radius: 0.1rem;
    outline: 1px solid black;
 }

 button {
    color: #fff;
    background-color: #333;
    padding: 0.5rem 1rem;
    border-radius: 0.1rem;
    border: none;
    cursor: pointer;
    transition: all 0.5s ease;
 }

 button:hover {
    background-color: red;
 }
`

const Div = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1rem;
justify-content: center;
align-items: center;
`

export default Home

import React, { useState, useEffect } from "react";
import '../styles.css';
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [genre, setGenre] = useState("All Genres");
    const [rating, setRating] = useState("All Ratings");

    useEffect(() => {
        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data))
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleGenres =(e) => {
        setGenre(e.target.value)
    };
    const handleRatings =(e) => {
        setRating(e.target.value)
    };
    
    const matchesGenre = (movie , genre) =>{
        return genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
    };

    const matchesSearchTerm = (movie, searchTerm) =>{
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    };

    const matchesRating = (movie, rating) =>{

     switch(rating){
        case "All Ratings" : return true;
        case "Good" : return movie.rating >=8;
        case "Ok" : return movie.rating >=5 && movie.rating <8;
        case "Bad" : return movie.rating < 5;
        default : return false
     }
           
    };

    const filteredMovies = movies.filter(movie => 
        matchesGenre(movie, genre) && matchesSearchTerm(movie , searchTerm) && matchesRating(movie, rating));

    return (
        <div>
            <input type="text" placeholder="Search Movies" className="search-input" value={searchTerm} onChange={handleSearch} />
            <div className="fiter-bar">
                <div className="filter-slot">
                    <select value={genre} onChange={handleGenres} className="filter-dropdown">
                        <option>All Genres</option>
                        <option>Horror</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Action</option>
                    </select>
                </div>

                <div className="filter-slot">
                    <select value={rating} onChange={handleRatings} className="filter-dropdown">
                        <option>All Ratings</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>
                    </select>
                </div>
            </div>
            <div className="movies-grid">
                {
                    filteredMovies.map(movie => (
                        <MovieCard movie={movie} key={movie.id}></MovieCard>
                    ))
                }
            </div>
        </div>
    );
}
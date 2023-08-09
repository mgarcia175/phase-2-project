import React, { useState } from "react";

function WatchList({ watchList, handleWatchListDelete, ReviewForm, setReviews }) {
    //initializes the form as false, to hide it
    const [showReviewForm, setShowReviewForm] = useState(false)
    //Setting to null then will be updated to shwow the movie to be reviewed
    const [currentMovie, setCurrentMovie] = useState(null)

    const watchListArray = Array.from(watchList)

    function handleReviewSubmission(movie, reviewText) {
        const review = {
            movieId: movie.imdbID,
            reviewText: reviewText
        }

        return fetch('http://localhost:3001/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Oops! Something went wrong.. :(')
            }
            return response.json()
        })
        .then(function(data) {
            console.log('Success!', data)
            setReviews(data)
        })
        .catch(function(error) {
            console.error('Oh no! Something went wrong!', error)
        })
    }

    function openReviewForm(movie) {
        //unhides form by setting to true
        setShowReviewForm(true)
        //giving the currentMovie state the movie to be reviewed information
        setCurrentMovie(movie)
    }

    function closeReviewForm() {
        //sets the form back to being hidden, and movie information 
        setShowReviewForm(false)
        setCurrentMovie(null)
    }
    return (
    <div>
        <h1 className="nav-text">My Watch List</h1>
        <div className="card-container">
                {watchListArray.map((movie) => (
                    <div className="movie-style" key={movie.imdbID}>
                        <img src={movie.Poster} alt={movie.Title} id="img"></img>
                        <button 
                        className="buttons" 
                        onClick={() => handleWatchListDelete(movie.imdbID)}>&#9989;
                        </button>

                        <button
                        className="buttons"
                        id='pencil'
                        onClick={() => openReviewForm(movie)}>&#9998;
                        </button>
                    </div>
                //If the form is being show, the component that handles the form will be shown vvv
                ))}
                {showReviewForm && (
                    <ReviewForm
                    movie={currentMovie}
                    onClose={closeReviewForm}
                    handleReviewSubmission={handleReviewSubmission}
                    />
                )}
        </div>
    </div>
    )
}

export default WatchList;
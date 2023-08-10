import React from "react";

function MyReviews({ reviews }) {
    console.log(reviews)
    return (
        <div>
            <h1 className="nav-text">My Reviews</h1>
            <div className="review-list">
                {reviews.map((review) => (
                    <div key={review.movieId} className="review-item">
                        <h1 id="review-title">{review.movie}</h1>
                        <h4 id="review-imdbID">Movie imdbID: {review.movieId}</h4>
                        <p id='review-paragraph'>{review.reviewText}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyReviews;
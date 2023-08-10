import React from "react";

function MyReviews({ reviews }) {

    return (
        <div>
            <h1 className="nav-text">My Reviews</h1>
            <div className="review-list">
                {Object.keys(reviews).map((reviewId) => (
                    <div key={reviewId} className="review-item">
                        <h1 id="review-title">{reviews[reviewId].movie}</h1>
                        <h4 id="review-imdbID">Movie imdbID: {reviews[reviewId].movieId}</h4>
                        <p id='review-paragraph'>{reviews[reviewId].reviewText}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyReviews;
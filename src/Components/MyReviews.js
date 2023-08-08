import React from "react";

function MyReviews({ reviews }) {
    console.log(reviews)

    return (
        <div>
            <h1 className="nav-text">My Reviews</h1>
            <div className="review-list">
                {reviews.map((review, index) => (
                    <div index={index} className="review-item">
                        <h3>{review.movie.Title}</h3>
                        <p>{review.reviewText}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyReviews
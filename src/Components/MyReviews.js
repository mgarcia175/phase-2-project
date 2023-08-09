import React from "react";

function MyReviews({ reviews }) {
    console.log(reviews)

    return (
        <div>
            <h1 className="nav-text">My Reviews</h1>
            <div className="review-list">
                {Object.keys(reviews).map((reviewId) => (
                    <div key={reviewId} className="review-item">
                        <h2>{reviews[reviewId].movieId}</h2>
                        <p>{reviews[reviewId].reviewText}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyReviews
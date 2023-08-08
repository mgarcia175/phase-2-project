import React, { useState } from "react";

function ReviewForm({ movie, onClose, handleReviewSubmission }) {
    const [reviewText, setReviewText] = useState('')


    function handleSubmit(e) {
        e.preventDefault()
        handleReviewSubmission(movie, reviewText)

        //close form after submission
        onClose()
    }

    return (
    <div>
        <h2 id='review-text'>Write a review!</h2>

        <form onSubmit={handleSubmit}>
            <textarea
            rows='4'
            cols='50'
            value={reviewText}
            onChange={(event) => setReviewText(event.target.value)}
            placeholder="Write your review.."
            ></textarea>
            
            <button type='submit'>Submit</button>
            <button onClick={onClose}>Cancel</button>
        </form>
    </div>
    )
}

export default ReviewForm;
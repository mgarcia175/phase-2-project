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
            id="review-box"
            rows='10'
            cols='70'
            value={reviewText}
            onChange={(event) => setReviewText(event.target.value)}
            placeholder=" Write your review.."
            ></textarea>
            <div className="review-buttons">
                <button id="submit-button" type='submit'>Submit</button>
                <button id="cancel-button" onClick={onClose}>Cancel</button>
            </div>
        </form>
    </div>
    )
}

export default ReviewForm;
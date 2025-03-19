import React, { useState } from "react";

const getStarTitle = (star: number): string => {
    switch (star) {
        case 5:
            return "perfect";
        case 4:
            return "good";
        case 3:
            return "not bad";
        case 2:
            return "badly";
        case 1:
            return "terribly";
        default:
            return "";
    }
};

function CommentForm() {
    const [rating, setRating] = useState<number | null>(null);
    const [commentText, setCommentText] = useState<string>("");

    const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedRating = parseInt(e.target.value, 10);
        setRating(selectedRating);
    };

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newComment = e.target.value;
        setCommentText(newComment);
    };

    return (
        <form className="reviews__form form">
            <label className="reviews__label form__label" htmlFor="review">
                Your review
            </label>

            <div className="reviews__rating-form form__rating">
                {[5, 4, 3, 2, 1].map((star) => (
                    <React.Fragment key={star}>
                        <input
                            className="form__rating-input visually-hidden"
                            name="rating"
                            value={star}
                            id={`${star}-stars`}
                            type="radio"
                            onChange={handleRatingChange}
                            checked={rating === star}
                        />
                        <label
                            htmlFor={`${star}-stars`}
                            className="reviews__rating-label form__rating-label"
                            title={getStarTitle(star)}
                        >
                            <img
                                src={rating && rating >= star ? "/img/star-active.svg" : "/img/icon-star.svg"}
                                alt="Star"
                                className="form__star-image"
                                width="37"
                                height="33"
                            />
                        </label>
                    </React.Fragment>
                ))}
            </div>

            <textarea
                className="reviews__textarea form__textarea"
                id="review"
                name="review"
                placeholder="Tell how was your stay, what you like and what can be improved"
                value={commentText}
                onChange={handleCommentChange}
            ></textarea>

            <div className="reviews__button-wrapper">
                <p className="reviews__help">
                    To submit review please make sure to set{" "}
                    <span className="reviews__star">rating</span> and describe your stay with at least{" "}
                    <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button
                    className="reviews__submit form__submit button"
                    type="submit"
                    disabled={!rating || commentText.length < 50}
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default CommentForm;
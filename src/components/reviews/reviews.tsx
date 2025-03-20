import React from "react";
import ReviewItem from "../review/review";

type ReviewListProps = {
    reviews: {
        id: string;
        date: string;
        user: {
            name: string;
            avatarUrl: string;
            isPro: boolean;
        };
        comment: string;
        rating: number;
    }[];
};

const ReviewList = ({ reviews }: ReviewListProps) => {
    return (
        <ul className="reviews__list">
            {reviews.map((review) => (
                <ReviewItem
                    key={review.id}
                    id={review.id}
                    date={review.date}
                    user={review.user}
                    comment={review.comment}
                    rating={review.rating}
                />
            ))}
        </ul>
    );
};

export default ReviewList;
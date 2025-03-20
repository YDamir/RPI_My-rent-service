import React from "react";

type ReviewItemProps = {
    id: string;
    date: string;
    user: {
        name: string;
        avatarUrl: string;
        isPro: boolean;
    };
    comment: string;
    rating: number;
};

const ReviewItem = ({ id, date, user, comment, rating }: ReviewItemProps) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });

    return (
        <li className="reviews__item" key={id}>
            <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img
                        className="reviews__avatar user__avatar"
                        src={user.avatarUrl}
                        width="54"
                        height="54"
                        alt="Reviews avatar"
                    />
                </div>
                <span className="reviews__user-name">{user.name}</span>
                {user.isPro && <span className="reviews__user-status">Pro</span>}
            </div>
            <div className="reviews__info">
                <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                        <span style={{ width: `${rating * 20}%` }}></span>
                        <span className="visually-hidden">Rating</span>
                    </div>
                </div>
                <p className="reviews__text">{comment}</p>
                <time className="reviews__time" dateTime={date}>
                    {formattedDate}
                </time>
            </div>
        </li>
    );
};

export default ReviewItem;
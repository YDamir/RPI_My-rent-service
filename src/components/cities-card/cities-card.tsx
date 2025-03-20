import { JSX } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

type CitiesCardProps = {
    id: string;
    title: string;
    type: string;
    price: number;
    previewImage: string;
    isPremium: boolean;
    rating: number;
    className?: string; // Кастомный класс для карточки
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};

function CitiesCard({
    id,
    title,
    type,
    price,
    previewImage,
    isPremium,
    rating,
    className = "cities__card",
    onMouseEnter,
    onMouseLeave,
}: CitiesCardProps): JSX.Element {
    return (
        <article
            className={`${className} place-card`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {isPremium && (
                <div className="place-card__mark">
                    <span>Premium</span>
                </div>
            )}
            <Link to={`${AppRoute.Offer}/${id}`}>
                <div className="cities__image-wrapper place-card__image-wrapper">
                    <img
                        className="place-card__image"
                        src={previewImage}
                        width="260"
                        height="200"
                        alt="Place image"
                    />
                </div>
            </Link>
            <div className="place-card__info">
                <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{price}</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                </div>
                <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                        <span style={{ width: `${rating * 20}%` }}></span>
                        <span className="visually-hidden">{rating}</span>
                    </div>
                </div>
                <h2 className="place-card__name">
                    <a href="#">{title}</a>
                </h2>
                <p className="place-card__type">{type}</p>
            </div>
        </article>
    );
}

export default CitiesCard;
import { JSX, useState } from "react";
import { Logo } from "../../components/Logo/logo";
import { FullOffer } from "../../types/offer";
import { useParams } from "react-router-dom";
import NotFoundPage from "../not-found-page/not-found-page";
import CommentForm from "../../components/comment-form/comment-form";
import Map from "../../components/map/map";
import { reviews as initialReviews } from "../../mocks/reviews"; 
import { nearbyOffers } from "../../mocks/nearby-offers"; 
import { CitiesCardList } from "../../components/cities-card-list/cities-card-list";
import { offers } from "../../mocks/offers"; 


type OfferProps = {
    offers: FullOffer[];
};

function OfferPage({ offers }: OfferProps): JSX.Element {
    const params = useParams();
    const offerId = params.id || "";
    const offer = offers.find((item) => item.id === offerId);

    if (!offer) {
        return <NotFoundPage />;
    }

    

    const [reviews, setReviews] = useState(initialReviews);
    const [activeOfferId, setActiveOfferId] = useState<string | undefined>(undefined);


    const handleCommentSubmit = (comment: string, rating: number) => {
        const newReview = {
            id: String(Date.now()),
            user: {
                name: "Anonymous", 
                avatarUrl: "/img/avatar-anonymous.jpg",
                isPro: false,
            },
            rating,
            comment,
            date: new Date().toISOString(),
        };

        setReviews([newReview, ...reviews]);
    };

    return (
        <div className="page">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <Logo />
                        </div>
                    </div>
                </div>
            </header>
            <main className="page__main page__main--offer">
                <section className="offer">
                    <div className="offer__gallery-container container">
                        <div className="offer__gallery">
                            {offer.images.map((image) => (
                                <div key={image} className="offer__image-wrapper">
                                    <img className="offer__image" src={image} alt="Photo studio" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="offer__container container">
                        <div className="offer__wrapper">
                            {offer.isPremium && (
                                <div className="offer__mark">
                                    <span>Premium</span>
                                </div>
                            )}
                            <div className="offer__name-wrapper">
                                <h1 className="offer__name">{offer.title}</h1>
                            </div>
                            <div className="offer__rating rating">
                                <div className="offer__stars rating__stars">
                                    <span style={{ width: `${offer.rating * 20}%` }}></span>
                                    <span className="visually-hidden">Rating</span>
                                </div>
                                <span className="offer__rating-value rating__value">{offer.rating}</span>
                            </div>
                            <ul className="offer__features">
                                <li className="offer__feature offer__feature--entire">
                                    {offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}
                                </li>
                                <li className="offer__feature offer__feature--bedrooms">
                                    {offer.bedrooms} Bedrooms
                                </li>
                                <li className="offer__feature offer__feature--adults">
                                    Max {offer.maxAdults} adults
                                </li>
                            </ul>
                            <div className="offer__price">
                                <b className="offer__price-value">&euro;{offer.price}</b>
                                <span className="offer__price-text">&nbsp;night</span>
                            </div>
                        </div>
                        <div className="offer__inside">
                            <h2 className="offer__inside-title">What's inside</h2>
                            <ul className="offer__inside-list">
                                {offer.goods.map((item) => (
                                    <li key={item} className="offer__inside-item">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="offer__host">
                            <h2 className="offer__host-title">Meet the host</h2>
                            <div className="offer__host-user user">
                                <div
                                    className={`offer__avatar-wrapper ${
                                        offer.host.isPro ? "offer__avatar-wrapper--pro" : ""
                                    } user__avatar-wrapper`}
                                >
                                    <img
                                        className="offer__avatar user__avatar"
                                        src={`${offer.host.avatarUrl}`}
                                        width="74"
                                        height="74"
                                        alt="Host avatar"
                                    />
                                </div>
                                <span className="offer__user-name">{offer.host.name}</span>
                                {offer.host.isPro && <span className="offer__user-status">Pro</span>}
                            </div>
                            <div className="offer__description">
                                <p className="offer__text">{offer.description}</p>
                            </div>
                        </div>
                        <section className="offer__reviews reviews">
                            <h2 className="reviews__title">
                                Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
                            </h2>
                            <ul className="reviews__list">
                                {reviews.map((review) => (
                                    <li key={review.id} className="reviews__item">
                                        <div className="reviews__user user">
                                            <div className="reviews__avatar-wrapper user__avatar-wrapper">
                                                <img
                                                    className="reviews__avatar user__avatar"
                                                    src={review.user.avatarUrl}
                                                    width="54"
                                                    height="54"
                                                    alt="Reviews avatar"
                                                />
                                            </div>
                                            <span className="reviews__user-name">{review.user.name}</span>
                                        </div>
                                        <div className="reviews__info">
                                            <div className="reviews__rating rating">
                                                <div className="reviews__stars rating__stars">
                                                    <span style={{ width: `${review.rating * 20}%` }}></span>
                                                    <span className="visually-hidden">Rating</span>
                                                </div>
                                            </div>
                                            <p className="reviews__text">{review.comment}</p>
                                            <time className="reviews__time" dateTime={review.date}>
                                                {new Date(review.date).toLocaleDateString("en-US", {
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </time>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <CommentForm onCommentSubmit={handleCommentSubmit} />
                        </section>
                        <section className="offer__map map">
                            <Map
                                offers={nearbyOffers.map(({ id, title, location }) => ({
                                    id,
                                    title,
                                    location,
                                }))}
                                activeOfferId={activeOfferId}
                            />
                        </section>
                        <section className="offer__nearby nearby">
                            <h2 className="nearby__title">Other places in the neighbourhood</h2>
                            <CitiesCardList
                                offersList={nearbyOffers}
                                className="near-places__list"
                                cardClassName="near-places__card" 
                                activeOfferId={activeOfferId}
                                setActiveOfferId={setActiveOfferId}
                            />
                        </section>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default OfferPage;
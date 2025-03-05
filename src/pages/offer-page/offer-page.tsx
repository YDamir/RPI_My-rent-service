import { JSX } from "react";
import { Logo } from "../../components/Logo/logo";
import { FullOffer } from "../../types/offer";
import { useParams } from "react-router-dom";
import NotFoundPage from "../not-found-page/not-found-page";

type OfferProps = {
    offers: FullOffer[];
};

function OfferPage({ offers }: OfferProps): JSX.Element {
    const params = useParams();
    const offer = offers.find((item) => item.id === params.id);

    if (!offer) {
        return <NotFoundPage />;
    }

    return (
        <div className="page">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <a className="header__logo-link" href="/">
                                <Logo />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <main className="page__main page__main--offer">
                <section className="offer">
                    <div className="offer__gallery-container container">
                        <div className="offer__gallery">
                            {offer.images.map((item) => (
                                <div key={item} className="offer__image-wrapper">
                                    <img className="offer__image" src={item} alt="Photo studio" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="offer__container container">
                        <div className="offer__wrapper">
                            {offer.isPremium ? (
                                <div className="offer__mark">
                                    <span>Premium</span>
                                </div>
                            ) : null}
                            <div className="offer__name-wrapper">
                                <h1 className="offer__name">{offer.title}</h1>
                                <div className="offer__rating rating">
                                    <div className="offer__stars rating__stars">
                                        <span style={{ width: `${offer.rating * 20}%` }}></span>
                                        <span className="visually-hidden">Rating</span>
                                    </div>
                                </div>
                                <b className="offer__price-value">&euro;{offer.price}</b>
                                <span className="offer__price-text">/ night</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default OfferPage;

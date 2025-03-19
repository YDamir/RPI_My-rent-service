import React from "react";
import { OffersList } from "../../types/offer";
import FavoriteCard from "../favorite-card/favorite-card";

type FavoriteCardListProps = {
    offers: OffersList[];
};

function FavoriteCardList({ offers }: FavoriteCardListProps) {
    return (
        <ul className="favorites__list">
            {offers.map((offer) => (
                <li key={offer.id} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                            <a className="locations__item-link" href="#">
                                <span>{offer.city.name}</span>
                            </a>
                        </div>
                    </div>
                    <div className="favorites__places">
                        <FavoriteCard offer={offer} />
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default FavoriteCardList;
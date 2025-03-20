import { JSX } from "react";
import CitiesCard from "../cities-card/cities-card";

type CitiesCardListProps = {
    offersList: {
        id: string;
        title: string;
        type: string;
        price: number;
        previewImage: string;
        isPremium: boolean;
        rating: number;
        location: { latitude: number; longitude: number };
    }[];
    className?: string;
    cardClassName?: string;
    activeOfferId?: string;
    setActiveOfferId: (id: string | undefined) => void; 
};

function CitiesCardList({
    offersList,
    className = "cities__places-list places__list tabs__content",
    cardClassName,
    activeOfferId,
    setActiveOfferId,
}: CitiesCardListProps): JSX.Element {
    return (
        <div className={className}>
            {offersList.map((item) => (
                <CitiesCard
                    key={item.id}
                    {...item}
                    className={cardClassName}
                    onMouseEnter={() => setActiveOfferId(item.id)}
                    onMouseLeave={() => setActiveOfferId(undefined)}
                />
            ))}
        </div>
    );
}

export { CitiesCardList };
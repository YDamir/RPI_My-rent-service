import { JSX, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Logo } from "../../components/Logo/logo";
import { OffersList } from "../../types/offer";
import { CitiesCardList } from "../../components/cities-card-list/cities-card-list";
import Map from "../../components/map/map";
import { CitiesList } from "../../components/cities-list/cities-list";
import { changeCity } from "../../store/action";
import { CITIES_LOCATION } from "../../const";
import { getOffersByCity, sortOffersByType } from "../../utils";
import { SortOffer } from "../../types/sort";
import { SortOptions } from "../../components/sort-options/sort-options.tsx";


type MainPageProps = {
    rentalOffersCount: number;
    offersList: OffersList[];
};

function MainPage({ rentalOffersCount, offersList }: MainPageProps): JSX.Element {
    const [activeOfferId, setActiveOfferId] = useState<string | undefined>(undefined);
    const selectedCity = useAppSelector((state) => state.city);
    const cityName = selectedCity?.name ?? "Paris";

    const filteredOffers = getOffersByCity(cityName, offersList);
    const [activeSort, setActiveSort] = useState<SortOffer>('Popular');
    const sortedOffers = sortOffersByType(filteredOffers, activeSort);

    const getCityLocation = (cityName: string) => {
        const city = CITIES_LOCATION.find((city) => city.name === cityName);
        return city ? city.location : CITIES_LOCATION.find((city) => city.name === "Amsterdam")?.location;
    };

    return (
        <div className="page page--gray page--main">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <Logo />
                        </div>
                        <nav className="header__nav">
                            <ul className="header__nav-list">
                                <li className="header__nav-item user">
                                    <a className="header__nav-link header__nav-link--profile" href="#">
                                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                                        <span className="header__user-name user__name">Myemail@gmail.com</span>
                                        <span className="header__favorite-count">3</span>
                                    </a>
                                </li>
                                <li className="header__nav-item">
                                    <a className="header__nav-link" href="#">
                                        <span className="header__signout">Sign out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="page__main page__main--index">
                <h1 className="visually-hidden">Cities</h1>
                <div className="tabs">
                    <section className="locations container">
                        <CitiesList selectedCity={ selectedCity }/>
                    </section>
                </div>
                <div className="cities">
                    <div className="cities__places-container container">
                        <section className="cities__places places">
                            <h2 className="visually-hidden">{rentalOffersCount} places to stay in {selectedCity?.name}</h2>
                            <b className="places__found">{rentalOffersCount} places to stay in Amsterdam</b>
                            <SortOptions activeSorting={activeSort} onChange={ (newSorting) => setActiveSort(newSorting)}/>
                            <CitiesCardList
                                    offersList={sortedOffers}
                                    activeOfferId={activeOfferId}
                                    setActiveOfferId={setActiveOfferId}
                                />
                        </section>
                        <div className="cities__right-section">
                            <section className="cities__map map">
                                <Map
                                    offers={sortedOffers}
                                    activeOfferId={activeOfferId}
                                />
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MainPage;
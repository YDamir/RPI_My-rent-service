import { JSX } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Setting, AppRoute, AuthorizationStatus } from "../../const";
import MainPage from "../../pages/main-page/main-page";
import FavoritesPage from "../../pages/favorites-page/favorites-page";
import LoginPage from "../../pages/login-page/login-page";
import OfferPage from "../../pages/offer-page/offer-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import { PrivateRoute } from "../private-route/private-route";
import { FullOffer, OffersList } from "../../types/offer";
import { offersList } from "../../mocks/offers-list";

type AppMainPageProps = {
    rentalOffersCount: number;
    offersList: OffersList[];
    offers: FullOffer[];
};

function App({ rentalOffersCount, offers, offersList }: AppMainPageProps): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Main} 
                    element={<MainPage rentalOffersCount={rentalOffersCount} offersList={offersList} />} 
                />
                <Route path={AppRoute.Favorites} 
                    element={
                        <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}> 
                            <FavoritesPage /> 
                        </PrivateRoute>
                    } 
                />
                <Route path={AppRoute.Login} element={<LoginPage />} />
                <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage offers={offers} />} />
                <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

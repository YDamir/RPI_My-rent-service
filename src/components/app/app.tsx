import {JSX} from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {Setting, AppRoute, AuthorizationStatus} from "../../const";
import { PrivateRoute } from "../private-route/private-route";
import MainPage from "../../pages/main-page/main-page";
import FavoritesPage from "../../pages/favorites-page/favorites-page";
import LoginPage from "../../pages/login-page/login-page";
import OfferPage from "../../pages/offer-page/offer-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";

type AppMainPageProps = {
    rentalOffersCount: number;
}

function App({rentalOffersCount, offers} : AppMainPageProps): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Main} 
                    element={<MainPage rentalOffersCount={rentalOffersCount} />} 
                />
                <Route path={ AppRoute.Favorites } 
                    element={
                        <PrivateRoute 
                            authorizationStatus={ AuthorizationStatus.NoAuth }> 
                            <FavoritesPage/> 
                        </PrivateRoute>
                    } 
                />
                <Route path={AppRoute.Login} element={<LoginPage />} />
                <Route path={AppRoute.Offer} element={<OfferPage />} />
                <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
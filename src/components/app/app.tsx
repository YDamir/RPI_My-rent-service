import MainPage from "../../pages/main-page/main-page";
import {JSX} from "react";

type AppMainPageProps = {
    rentalOffersCount: number;
}

function App({rentalOffersCount} : AppMainPageProps): JSX.Element {
    return (
        <MainPage rentalOffersCount={rentalOffersCount} />
    );
}

export default App;
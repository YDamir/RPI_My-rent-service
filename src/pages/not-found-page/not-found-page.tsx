import {JSX} from "react";

function NotFound(): JSX.Element {
    return(
        <div className="page page--gray page--404">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <a className="header__logo-link" href="index.html">
                                <img className="header__logo" src="img/logo.svg" alt="Rent service logo" width="81" height="41"/>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <main className="page__main page__main--404">
                <div className="container">
                    <section className="error-page">
                        <h1 className="error-page__title">404</h1>
                        <p className="error-page__message">Oops! The page you are looking for does not exist.</p>
                        <a className="error-page__link" href="index.html">Return to Homepage</a>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default NotFound;
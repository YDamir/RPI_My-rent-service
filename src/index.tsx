import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { Setting } from './const';
import { offers } from './mocks/offers';
import { offersList } from './mocks/offers-list';
import { store } from './store';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App 
        rentalOffersCount={Setting.rentalOffersCount}
        offersList={ offersList }
        offers = {offers}
        reviews={ reviews }
      />
    </Provider>
  </React.StrictMode>
);
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { MutatingDots } from 'react-loader-spinner';
import './app.scss';

const MainPage = lazy(() => import('./modules/mainPage/MainPage'));
const CountryPage = lazy(() => import('./modules/countryPage/CountryPage'));

function App() {

    return (
        <Provider store={store}>
            <Suspense fallback={<MutatingDots wrapperClass='loader' color="red" secondaryColor="black" radius='15'/>}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path=":countryId" element={<CountryPage />} />
                    </Routes>
            </Suspense>
        </Provider>
    );
}

export default App;

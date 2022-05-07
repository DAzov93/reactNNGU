import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import ItemsList from '../ItemsList';
import style from './MainPage.module.scss';

const MainPage = () => {
    //пример использования JSX
    // const isTrue = false;
    // const textVar = 'text1';
    // const text2Var = 'text2';
    // return <div className={style.main_page}>{isTrue ? textVar : text2Var}</div>;

    //   <> <Header /> <ItemsList /> </>   -  фрагмент  для того чтобы возвращать 2 элемента
    return (
        <div className={style.page_wrapper}>
            <Header />
            <ItemsList />
            <Footer />
        </div>
    );
};

export default MainPage;

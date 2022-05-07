import React from 'react';
import style from './Item.module.scss';

const Item = (props: any) => {
    const { name, description } = props;
    return (
        <div className={style.item_container}>
            <p>Ботинки</p>
            <p>Описание:</p>
            <p>{description}</p>
        </div>
    );
};

export default Item;

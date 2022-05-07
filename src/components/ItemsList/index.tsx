import React from 'react';
import Item from '../Item';

import style from './ItemsList.module.scss';

const ItemsMock = {
    itemName: 'Ботинки',
    itemDescription: 'Смотрите, какие потрясающие ботинки',
};

const ItemsList = () => {
    return (
        <div className={style.items_list}>
            <p>Список товаров</p>
            <div>
                <Item
                    name={ItemsMock.itemName}
                    description={ItemsMock.itemDescription}
                />
            </div>
        </div>
    );
};

export default ItemsList;

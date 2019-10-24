import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import { List } from './List.module.scss';

const ListContainer = ({ items = [] }) => {
  return (
    <ul className={List}>
      {items.length > 0 ? (
        items.map(house => <ListItem key={house.id} house={house} />)
      ) : (
        <div>Нет объектов недвижимости</div>
      )}
    </ul>
  );
};

ListContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListContainer;

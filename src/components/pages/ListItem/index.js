import React from 'react';
import PropTypes from 'prop-types';
import { getImgUrl } from 'lib/helpers';
import { AreaIcon, HouseIcon } from 'components/UI/Icons';
import { ListItem } from './ListItem.module.scss';

const ListItemContainer = ({ house }) => {
  const {
    images,
    location: { localityName, mkadDistance },
    id,
    landDetails,
    specification,
    saleOffer,
  } = house;
  const price = saleOffer
    ? `$${saleOffer.multiCurrencyPrice.usd.toLocaleString('ru')}`
    : null;
  return (
    <figure className={ListItem}>
      <a href="/" className={ListItem.link}>
        <div className={ListItem.image}>
          <img
            src={getImgUrl(images)}
            alt={`Фото дома в посёлке «${localityName}»`}
            className="img-fluid"
          />
        </div>
        <figcaption className={ListItem.caption}>
          <h4 className={ListItem.title}>
            Дом в посёлке «{localityName}», {mkadDistance} км, ID {id}
          </h4>
          <span className={ListItem.price}>{price}</span>
          <ul className={ListItem['additional-info']}>
            <li>
              <AreaIcon />
              {landDetails.area} сот
            </li>
            <li>
              <HouseIcon />
              {specification.area} м<sup>2</sup>
            </li>
          </ul>
        </figcaption>
      </a>
    </figure>
  );
};

ListItemContainer.propTypes = {
  house: PropTypes.object.isRequired,
};

export default ListItemContainer;

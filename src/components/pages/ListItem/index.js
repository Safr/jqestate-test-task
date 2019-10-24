import React from 'react';
import PropTypes from 'prop-types';
import { getImgUrl } from 'lib/helpers';
import { AreaIcon, HouseIcon } from 'components/UI/Icons';
import styles from './ListItem.module.scss';

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
    <li className={styles.ListItem}>
      <a href="/" className={styles.ListItem__link}>
        {getImgUrl(images) && (
          <div className={styles.ListItem__image}>
            <img
              src={getImgUrl(images)}
              alt={`Изображение дома «${localityName}»`}
            />
          </div>
        )}
        <figcaption className={styles.ListItem__caption}>
          <h4 className={styles.ListItem__title}>
            Дом в посёлке «{localityName}», {mkadDistance} км, ID {id}
          </h4>
          <span className={styles.ListItem__price}>{price}</span>
          <ul className={styles.ListItem__addInfo}>
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
    </li>
  );
};

ListItemContainer.propTypes = {
  house: PropTypes.object.isRequired,
};

export default ListItemContainer;

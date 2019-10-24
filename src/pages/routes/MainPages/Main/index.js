import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
// HOCS
import { withAjaxLoadMore } from 'components/HOC';
// DUCKS
import {
  effects as estatesEffects,
  selectors as estatesSelectors,
} from 'redux/ducks/estates.duck';

// COMPONENTS
import List from 'components/pages/List';
import Spinner from 'components/UI/Spinner';
import { PageWrapper, Loading } from './Main.module.scss';

const MainPage = ({ estates, fetchEstates, isLoading, page }) => {
  React.useEffect(() => {
    fetchEstates(page);
  }, [fetchEstates, page]);
  return (
    <div className={PageWrapper}>
      {estates && <List items={estates.items || []} />}
      {isLoading && (
        <div className={Loading}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default compose(
  connect(
    state => ({
      estates: estatesSelectors.getEstates(state),
      isLoading: estatesSelectors.getLoading(state),
    }),
    { ...estatesEffects },
  ),
  withAjaxLoadMore,
  React.memo,
)(MainPage);

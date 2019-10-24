/* eslint-disable react/state-in-constructor */
import React from 'react';
import { debounce } from 'lib/helpers';

function withAjaxLoadMore(WrappedComponent) {
  class WithAjaxLoadMore extends React.Component {
    state = {
      currentPage: 0,
    };

    handleScroll = debounce(() => {
      const { isLoading } = this.props;
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      const scrollHeight =
        (document.documentElement && document.documentElement.scrollHeight) ||
        document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      const scrolledToBottom =
        Math.ceil(scrollTop + clientHeight + 100) >= scrollHeight;
      if (scrolledToBottom && !isLoading) {
        this.setPage();
      }
    }, 300);

    componentDidMount() {
      document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      document.removeEventListener('scroll', this.handleScroll);
    }

    setPage = () => {
      const { currentPage } = this.state;
      this.setState({ currentPage: currentPage + 1 });
    };

    render() {
      const { currentPage } = this.state;
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <WrappedComponent {...this.props} page={currentPage} />;
    }
  }

  withAjaxLoadMore.displayName = `WithAjaxLoadMore(${WrappedComponent.displayName})`;
  return WithAjaxLoadMore;
}

export default withAjaxLoadMore;

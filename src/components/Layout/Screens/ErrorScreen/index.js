import * as React from 'react';
import { Link } from 'react-router-dom';
import { Content } from './ErrorScreen.module.scss';

class ErrorScreen extends React.Component {
  state = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { errorInfo } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      return (
        <div className={Content}>
          <div>
            <h1>Упс!</h1>
            <p>Запрашиваемая страница не существует</p>
            <Link to="/">Вернуться на главную</Link>
          </div>
        </div>
      );
    }
    return children;
  }
}

export default ErrorScreen;

import React from 'react';
import City from './City';
import ProgressBar from './ProgressBar';
import ErrorMessage from './ErrorMessage';
import Forecast from './Forecast';

const Content = (props) => {
  const { status, error, forecast, period, celsius, onChangeFavorite } = props;

  let content;

  switch (status) {
    case 'loading':
      content = <ProgressBar />;
      break;

    case 'error':
      content = <ErrorMessage error={error} />;
      break;

    case 'done':
      content = (
        <React.Fragment>
          <City city={forecast.city_name} onChangeFavorite={onChangeFavorite} />
          <Forecast forecast={forecast} period={period} celsius={celsius} />
        </React.Fragment>
      );
      break;

    default:
      content = null;
      break;
  }

  return <main className='main'>{content}</main>;
};

export default Content;

import React from 'react';
import City from './City';
import ProgressBar from './ProgressBar';
import ErrorMessage from './ErrorMessage';
import Forecast from './Forecast';

const Content = (props) => {
  const { status, error, forecast, period, isCelsius, onChangeFavorite } = props;

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
          <Forecast forecast={forecast} period={period} isCelsius={isCelsius} />
        </React.Fragment>
      );
      break;

    default:
      content = null;
      break;
  }

  return (
    <main>
      <div id='main-inner'>{content}</div>
    </main>
  );
};

export default Content;

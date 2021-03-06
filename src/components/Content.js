import React from 'react';
import City from './City';
import ProgressBar from './ProgressBar';
import ErrorMessage from './ErrorMessage';
import Forecast from './Forecast';

const Content = (props) => {
  let content;

  switch (props.status) {
    case 'loading':
      content = <ProgressBar />;
      break;

    case 'error':
      content = <ErrorMessage error={props.error} />;
      break;

    case 'done':
      const favoriteCity = props.favoriteCity.toLowerCase();
      const currentCity = props.forecast.city_name.toLowerCase();

      content = (
        <React.Fragment>
          <City
            city={props.forecast.city_name}
            onChangeFavorite={props.onChangeFavorite}
            isFavorite={favoriteCity === currentCity}
          />
          <Forecast
            forecast={props.forecast}
            period={props.period}
            celsius={props.celsius}
          />
        </React.Fragment>
      );
      break;

    default:
      content = null;
      break;
  }

  return <main className={props.visible ? 'main' : 'main--hide'}>{content}</main>;
};

export default Content;

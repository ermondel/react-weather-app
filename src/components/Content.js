import React from 'react';
import City from './City';
import ProgressBar from './ProgressBar';
import ErrorMessage from './ErrorMessage';
import Forecast from './Forecast';

const Content = (props) => {
  let content;
  let className = 'main';

  if (!props.visible) className += '--hide';

  switch (props.status) {
    case 'loading':
      content = <ProgressBar />;
      break;

    case 'error':
      content = <ErrorMessage error={props.error} />;
      break;

    case 'done':
      content = (
        <React.Fragment>
          <City
            city={props.forecast.city_name}
            onChangeFavorite={props.onChangeFavorite}
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

  return <main className={className}>{content}</main>;
};

export default Content;

import moment from 'moment';

const currentDate = () =>
  `<div class='current-date'>TIME NOW: <span class='current-date-value'>${moment(
    Date.now()
  ).format('YYYY-MM-DD ')}</span></div>`;

export { currentDate };

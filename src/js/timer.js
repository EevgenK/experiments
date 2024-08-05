import { Timer } from './classes/Timer';
import { currentDate } from './helpers/currentDate';

document.querySelector('body').insertAdjacentHTML('afterbegin', currentDate());

const timer1 = new Timer({ selector: '#timer-1', value: 10 });
const timer2 = new Timer({ selector: '#timer-2', value: 20 });
const timer3 = new Timer({ selector: '#timer-3' });

const timerMarkup = () => `
<div class='timer'>
<span class='timer-value'>yyyy-mm-dd hh:mm:ss</span>
<button data-action="timer-start">start</button>
<button data-action="timer-stop" disabled>stop</button>
</div>`;

export class Timer {
  constructor({ selector, value = 1 }) {
    this.timerStartValue = value;
    this.parent = document.querySelector(selector);
    this.parent.insertAdjacentHTML('beforeend', timerMarkup());
    this.value = this.parent.querySelector('.timer-value');
    this.startBtn = this.parent.querySelector('[data-action="timer-start"]');
    this.stopBtn = this.parent.querySelector('[data-action="timer-stop"]');

    this.render();

    this.startBtn.addEventListener('click', this.start.bind(this));
    this.stopBtn.addEventListener('click', this.stop.bind(this));
  }
  render() {
    this.value.textContent = this.timerStartValue;
    this.timerStartValue += 1;
  }
  start() {
    this.timerId = setInterval(this.render.bind(this), 1000);
    this.startBtn.setAttribute('disabled', true);
    this.stopBtn.removeAttribute('disabled');
  }
  stop() {
    clearInterval(this.timerId);
    this.startBtn.removeAttribute('disabled');
    this.stopBtn.setAttribute('disabled', true);
  }
}

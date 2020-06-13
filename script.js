const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor(data) {
    this.data = data.targetDate;
  }
  metod() {
    const time = this.data.getTime() - new Date(Date.now()).getTime();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }
  metodCount() {
    setInterval(() => this.metod(), 1000);
  }
}

const nData = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 24, 2020"),
});

nData.metod();
nData.metodCount();

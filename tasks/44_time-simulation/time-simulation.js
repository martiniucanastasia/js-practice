export class TimeSimulation {
  constructor() {
    this.simulationTime = 0;
    this.realTime = 0;
    this.speed = 1;
  }
  get() {
    return this.simulationTime;
  }
  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }
  update(currentRealtime) {
    const difference = currentRealtime - this.realTime;
    this.simulationTime = this.simulationTime + this.speed * difference;
    this.realTime = currentRealtime;
  }
}
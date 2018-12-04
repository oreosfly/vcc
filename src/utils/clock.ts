interface ICountDown {
    initTime: number,
    interval: number,
    tickTask: (ff:CountDown) => void
}

export class CountDown {
    public restTime: number = this.initTime;
    private handler: number;
    private lastTimestamp: number = 0;
    constructor(data: ICountDown,
        public readonly initTime: number = data.initTime,
        public readonly interval: number = data.interval,
        public readonly tickTask: (ff:CountDown) => void = data.tickTask,

    ) {
        this.start();
    }
    
    /**
     * start
     */
    public start() {
        this.tick()
    }
    public stop() {
        cancelAnimationFrame(this.handler)
    }
    public get showTime() {
        console.log(this.restTime)
        const s = Number((this.restTime / this.interval).toFixed(0)) * this.interval;
        return s <= 0 ? 0 : s;
    }
    public tick(timestamp: number = 0) {
        const delt = this.lastTimestamp === 0 ? 0 : timestamp - this.lastTimestamp;
        this.lastTimestamp = timestamp;
        this.restTime -= delt;
        this.tickTask(this);
        if (this.showTime === 0) {
            this.stop();
        };
        this.handler = requestAnimationFrame(this.tick.bind(this))
    }

}
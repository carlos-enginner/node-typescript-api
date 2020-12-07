import { BeachPosition, Beach } from "@src/models/beach";

const waveHeights = {
    ankleToKnee: {
        min: 0.3,
        max: 1.0,
    },
    waistHigh: {
        min: 1.0,
        max: 2.0
    },
    headHigh: {
        min: 2.0,
        max: 2.5
    }
};

export class Rating {

    constructor(private beach:Beach) {}
    
    public getRatingBasedOnWindAndWavePositions(wavePosition: BeachPosition,windPosition: BeachPosition): number{
        if (wavePosition === windPosition) return 1;
        if (this.isWindOffShore(wavePosition,windPosition)) return 5;

        return 3;
    }

    private isWindOffShore(wavePosition: BeachPosition,windPosition: BeachPosition): boolean {

        const p1 = wavePosition === BeachPosition.N && windPosition == BeachPosition.S && this.beach.position === BeachPosition.N;

        const p2 = wavePosition === BeachPosition.S && windPosition == BeachPosition.N && this.beach.position === BeachPosition.S;
        
        const p3 = wavePosition === BeachPosition.E && windPosition == BeachPosition.W && this.beach.position === BeachPosition.E;
        
        const p4 = wavePosition === BeachPosition.W && windPosition == BeachPosition.E && this.beach.position === BeachPosition.W;

        return p1 || p2 || p3 || p4;
    }

    public getRatingForSwellPeriod(period: number): number {
        if (period >7 && period < 10) return 2;
        if (period >=10 && period < 14) return 4;
        if (period >=14) return 5;
        return 1;
    }

    public getRatingForSwellSize(heigth: number): number {
        if (heigth >= waveHeights.ankleToKnee.min && heigth < waveHeights.ankleToKnee.max) return 2;
        if (heigth >= waveHeights.waistHigh.min && heigth < waveHeights.waistHigh.max) return 3;
        if (heigth >= waveHeights.headHigh.min) return 5;
        return 1;
    }
}
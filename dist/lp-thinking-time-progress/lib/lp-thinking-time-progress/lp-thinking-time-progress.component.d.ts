import { OnInit, EventEmitter, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class LpThinkingTimeProgressComponent implements OnInit {
    progress: number;
    show: boolean;
    velocity: number;
    diameter: number;
    end: EventEmitter<boolean>;
    timeSubscription: Subscription;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    stopProgress(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LpThinkingTimeProgressComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LpThinkingTimeProgressComponent, "lp-thinking-time-progress", never, { "progress": "progress"; "show": "show"; "velocity": "velocity"; "diameter": "diameter"; }, { "end": "end"; }, never, never>;
}

//# sourceMappingURL=lp-thinking-time-progress.component.d.ts.map
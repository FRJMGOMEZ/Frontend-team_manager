import { ComponentType } from '@angular/cdk/portal';
import { OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import * as ɵngcc0 from '@angular/core';
export declare class LpBottomSheetInfoComponent implements OnInit {
    private _bottomSheet;
    componentToShow: ComponentType<any>;
    constructor(_bottomSheet: MatBottomSheet);
    ngOnInit(): void;
    openInfo(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LpBottomSheetInfoComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LpBottomSheetInfoComponent, "lp-bottom-sheet-info", never, { "componentToShow": "componentToShow"; }, {}, never, never>;
}

//# sourceMappingURL=lp-bottom-sheet-info.component.d.ts.map
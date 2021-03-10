import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as ɵngcc0 from '@angular/core';
export declare class LpInfoDialogComponent implements OnInit {
    private dialogRef;
    private data;
    message: string;
    item: string;
    title: string;
    constructor(dialogRef: MatDialogRef<LpInfoDialogComponent>, data: any);
    ngOnInit(): void;
    hideModal(): void;
    reportError(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LpInfoDialogComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LpInfoDialogComponent, "app-lp-info-dialog", never, {}, {}, never, never>;
}

//# sourceMappingURL=lp-info-dialog.component.d.ts.map
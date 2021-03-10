import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as ɵngcc0 from '@angular/core';
export declare class LpConfirmDialogComponent implements OnInit {
    private dialogRef;
    private data;
    message: string;
    title: string;
    constructor(dialogRef: MatDialogRef<LpConfirmDialogComponent>, data: any);
    ngOnInit(): void;
    hideModal(accepted: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LpConfirmDialogComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LpConfirmDialogComponent, "app-lp-confirm-dialog", never, {}, {}, never, never>;
}

//# sourceMappingURL=lp-confirm-dialog.component.d.ts.map
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class LpDialogsService {
    private dialog;
    constructor(dialog: MatDialog);
    openConfirmDialog(title?: string, message?: string): Observable<any>;
    openInfoDialog(message: string, title: string, item?: string): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LpDialogsService, never>;
}

//# sourceMappingURL=lp-dialogs.service.d.ts.map
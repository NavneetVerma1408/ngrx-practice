import { Observable, Subject } from "rxjs";

let disableBackground = new Subject<boolean>()

export function getdisableBackground(): Observable<boolean> {
    return disableBackground as Observable<boolean>;
}

export function setDisableBackground(isDisable: boolean) {
    disableBackground.next(isDisable)
}
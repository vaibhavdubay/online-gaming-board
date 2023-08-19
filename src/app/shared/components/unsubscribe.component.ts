import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
    template: ''
})

export class UnSubscribeComponent implements OnDestroy {

    private _subscription: Subscription = new Subscription();
    protected set anotherSubscription(val: Subscription){
        this._subscription.add(val)
    }
    protected resetSubscription(): void{
        this._subscription.unsubscribe();
    }
    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
}
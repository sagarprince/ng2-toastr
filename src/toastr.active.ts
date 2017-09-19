// Core Modules
import { ComponentRef } from "@angular/core";

// Component
import { ToastrComponent } from './toastr.component';

// Services
import { ComponentFactoryService } from './component.factory.service';

// Config Model
import { ConfigModel } from './models';

export class ToastrActive {

    public get component():ToastrComponent {
        return this._componentRef.instance;
    }

    constructor(public _componentFactory: ComponentFactoryService, public _componentRef: ComponentRef<ToastrComponent>) {
        this.component.hideEvent.subscribe((result: any) => {
            this.destroy();
        });
    }

    public destroy(): void {
        this._componentFactory.detachFromApplication(this._componentRef);
        this._componentRef.destroy();
    }

}

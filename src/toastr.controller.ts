// Core Modules
import { Injectable } from '@angular/core';

// Services
import { ComponentFactoryService } from './component.factory.service';

// Component
import { ToastrComponent } from './toastr.component';

// Config Model
import { ConfigModel } from './models';

// Active Sweet Alert Class
import { ToastrActive } from './toastr.active';

@Injectable()
export class ToastrController {

  _componentRef: any = void 0;

  _instance: any = void 0;

  constructor(private _componentFactory: ComponentFactoryService) { 
    
  }

  /**
   * Show Toastr
   * 
   * @param config
   * @method Show
   */
  public show(config: ConfigModel) {

    // Generate Component
    const id = 'toastr-wrap-' + Math.floor(Math.random() * 200);
    this._componentRef = this._componentFactory.createComponent<ToastrComponent>(ToastrComponent, id);

    // Instance    
    this._instance = this._componentRef.instance;

    // Append to body
    this._componentFactory.attachToApplication(this._componentRef);

    // Using instance call component methods    
    this._instance.setConfig(config);

    // For Current Active Toastr
    new ToastrActive(this._componentFactory, this._componentRef);
    
    // Auto Hide
    if (this._instance.autoHide === true) {
      setTimeout(() => {        
        this.hide();
      }, this._instance.hideDelay);
    }
  }

  /**
   * Hide Toastr
   * 
   * @method Hide
   */
  public hide() {
    this._instance.hide();
  }

}

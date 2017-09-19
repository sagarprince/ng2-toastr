// Core
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, Renderer } from '@angular/core';

// Config Model
import { ConfigModel } from './models';

@Component({
  selector: 'toastr-component',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent {
  @ViewChild('toastr') _toastrEl: ElementRef; 

  @Input() type: string = 'info'; // success, info, error, warning, loading

  @Input() title: string = '';

  @Input() message: string = '';

  @Input() position: string = 'bottom-right'; // bottom-left, bottom-right, top-left, top-right

  @Input() autoHide: boolean = true;

  @Output() hideEvent = new EventEmitter<any>();

  showAnimationClass = 'slideInRight';

  hideDelay = 2500;

  constructor(private renderer: Renderer) { }

  setConfig(config: ConfigModel) {
    this.type = config.type;    
    this.title = config.title;
    this.message = (typeof config.message !== 'undefined') ? config.message : this.message;
    this.position = (typeof config.position !== 'undefined') ? config.position : this.position;
    this.autoHide = (typeof config.autoHide !== 'undefined') ? config.autoHide : this.autoHide;    

    if (this.position === 'top-left' || this.position === 'bottom-left') {
      this.showAnimationClass = 'slideInLeft';
    }
  }

  hide(callback:() => void) {
    let hideAnimationClass = 'slideOutDown';
    if (this.position === 'top-left' || this.position === 'top-right') {
      hideAnimationClass = 'slideOutUp';
    }
    this._toastrEl.nativeElement.classList = 'toast-'+ this.position + ' animated ' + hideAnimationClass;
    this.renderer.listen(this._toastrEl.nativeElement, 'animationend', (event) => {     
      this.hideEvent.emit(true);
    });
  }

}

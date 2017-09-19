/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ToastrModule, ToastrController }  from 'ng2-toastr';

@Component({
  selector: 'app',
  templateUrl: './index.component.html'
})
class AppComponent {
  constructor(public toastCtrl: ToastrController) {
    console.log(this.toastCtrl);
  }

  showToast() {
    this.toastCtrl.show({ type: 'success', title: 'Success', message: 'Added Successfully !!!' });
  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, ToastrModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

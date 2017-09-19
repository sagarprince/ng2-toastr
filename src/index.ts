import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrComponent } from './toastr.component';
import { ToastrDirective } from './toastr.directive';
import { ToastrPipe } from './toastr.pipe';
import { ToastrService } from './toastr.service';

export * from './toastr.component';
export * from './toastr.directive';
export * from './toastr.pipe';
export * from './toastr.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToastrComponent,
    ToastrDirective,
    ToastrPipe
  ],
  exports: [
    ToastrComponent,
    ToastrDirective,
    ToastrPipe
  ]
})
export class ToastrModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ToastrModule,
      providers: [ToastrService]
    };
  }
}

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrComponent } from './toastr.component';
import { ToastrDirective } from './toastr.directive';
import { ToastrPipe } from './toastr.pipe';
import { ToastrController } from './toastr.controller';
import { ComponentFactoryService } from './component.factory.service';

export * from './toastr.component';
export * from './toastr.directive';
export * from './toastr.pipe';
export * from './toastr.controller';

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
  ],
  providers: [
    ComponentFactoryService
  ]
})
export class ToastrModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ToastrModule,
      providers: [ToastrController]
    };
  }
}

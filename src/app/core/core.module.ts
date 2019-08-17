import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@app/material/material.module';

import { Logger } from './logger.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ToastService } from './toast.service';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    MainLayoutComponent, 
    NavbarComponent, 
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    MainLayoutComponent
  ],
  providers: [
    Logger,
    ToastService
  ]
})
export class CoreModule { 
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

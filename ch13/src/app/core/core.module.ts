import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppMaterialModule } from '../app-material.module';
import { DataService } from './data.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    AppMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService)
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class CoreModule { }

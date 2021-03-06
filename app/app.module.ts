import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { PackageService } from './services/package.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    InputComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PackageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

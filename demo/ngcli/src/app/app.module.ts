import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ToastModule, ToastOptions } from 'ng2-toastr';
import { CustomOption } from './custom-option';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { APageComponent } from './a-page/a-page.component';
import { AnotherPageComponent } from './another-page/another-page.component';

const appRoutes: Routes = [
  { path: 'a-page', component: APageComponent },
  { path: 'another-page', component: AnotherPageComponent },
  { path: '**', component: APageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    APageComponent,
    AnotherPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {
        useHash: true,
        preloadingStrategy: PreloadAllModules,
        enableTracing: true
      }
    ),
    ToastModule.forRoot()
  ],
  providers: [{provide: ToastOptions, useClass: CustomOption}],
  bootstrap: [AppComponent]
})
export class AppModule { }

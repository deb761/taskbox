import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
       TaskModule,
        NgxsModule.forRoot([], {
         developmentMode: !environment.production,
       }),
       NgxsReduxDevtoolsPluginModule.forRoot(),
       NgxsLoggerPluginModule.forRoot({
         disabled: environment.production,
       }),
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

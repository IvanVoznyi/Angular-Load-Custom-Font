import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadFontService } from './services/loadfont.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (loadFontService: LoadFontService) => () =>loadFontService.loadFont(),
      deps: [LoadFontService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

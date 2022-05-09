import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FontStatus, LoadFontService } from './services/loadfont.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fontStatus$: Observable<FontStatus>

  constructor(loadFontService: LoadFontService){
    loadFontService.fontStatus$.subscribe(console.log)
    this.fontStatus$ = loadFontService.fontStatus$.asObservable()
  }
}

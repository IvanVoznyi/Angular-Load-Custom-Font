import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, finalize, from, Subject, Subscription, tap } from 'rxjs';

interface IFontFaceSet  extends FontFaceSet {
  add: (arg: FontFace) => void
}

export enum FontStatus {
  load = 'Load',
  loading = 'Loading',
  loaded = 'Loaded'
}

@Injectable({
  providedIn: 'root'
})
export class LoadFontService {

  fontStatus$ = new BehaviorSubject<FontStatus>(FontStatus.load);
 
  loadFont() {
    const font = new FontFace(
      'Fontdiner Swanky',
      'url(https://fonts.gstatic.com/s/fontdinerswanky/v19/ijwOs4XgRNsiaI5-hcVb4hQgMvCD0uYVKw.woff2',
      {
        display: 'swap',
        style: 'normal',
        unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, 
                       U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, 
                       U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
        weight: '400',
      }
    );
    
    const sub: Subscription = from(font.load()).pipe(
      tap(() => this.fontStatus$.next(FontStatus.loading)),
      delay(5000),
      finalize(() => {
        sub.unsubscribe()
      })
    ).subscribe(() => {
      (document.fonts as IFontFaceSet).add(font);
      this.fontStatus$.next(FontStatus.loaded)
    })
  }
}

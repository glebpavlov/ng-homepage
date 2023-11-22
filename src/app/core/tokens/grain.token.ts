import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, InjectionToken, NgZone, PLATFORM_ID } from '@angular/core';
import { Grain } from '../effects';
import { WINDOW } from './window.token';

export const GRAIN_EFFECT_TOKEN = new InjectionToken<Grain | undefined>(
  'An abstraction over Grain Class',
  {
    providedIn: 'root',
    factory: () => {
      const platformId = inject(PLATFORM_ID);
      if (isPlatformBrowser(platformId)) {
        return new Grain(inject(NgZone), inject(DOCUMENT), inject(WINDOW));
      }
      return;
    },
  }
);

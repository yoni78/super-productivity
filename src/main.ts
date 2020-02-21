import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {IS_ELECTRON} from './app/app.constants';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  // TODO make asset caching work for electron
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('ngsw-worker.js');
    // navigator.serviceWorker.register('issue.worker.js');
  }
}).catch(err => console.log(err));

declare global {
  interface Window {
    ipcRenderer: any;
  }
}
// fix mobile scrolling while dragging
window.addEventListener('touchmove', () => {
});

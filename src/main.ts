import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './application/app.component';
import { appConfig } from './application/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

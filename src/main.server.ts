import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './application/app.component';
import { config } from './application/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;

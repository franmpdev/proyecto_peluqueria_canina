import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PeluqueriaComponent } from './app/components/peluqueria/peluqueria.component';

bootstrapApplication(PeluqueriaComponent, appConfig)
  .catch((err) => console.error(err));

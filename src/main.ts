import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment.development';

// Initialize Firebase before Angular app starts
firebase.initializeApp(environment.firebase);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

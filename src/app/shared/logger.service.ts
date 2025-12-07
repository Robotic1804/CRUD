import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  log(message: string, ...optionalParams: any[]) {
    if (!environment.production) {
      console.log(message, ...optionalParams);
    }
  }

  error(message: string, error?: any) {
    if (!environment.production) {
      console.error(message, error);
    } else {
      // En producción, enviar a servicio de logging remoto (ej: Sentry, LogRocket)
      // this.remoteLogger.logError(message, error);
    }
  }

  warn(message: string, ...optionalParams: any[]) {
    if (!environment.production) {
      console.warn(message, ...optionalParams);
    }
  }

  info(message: string, ...optionalParams: any[]) {
    if (!environment.production) {
      console.info(message, ...optionalParams);
    }
  }
}

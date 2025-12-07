import { Injectable } from '@angular/core';
import { NotificationService } from './shared/notification.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor(private notificationService: NotificationService) { }

  muestraMensaje(mensaje: string) {
    this.notificationService.info(mensaje);
  }
}

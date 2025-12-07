import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
    selector: 'app-caracteristica-emp',
    templateUrl: './caracteristica-emp.component.html',
    styleUrls: ['./caracteristica-emp.component.css'],
    standalone: false
})
export class CaracteristicaEmpComponent {
  @Output() caracteristicasEmpleado = new EventEmitter<string>();
  //constructor(private miServicio: ServicioEmpleadosService) {}

  agregarCaracteristicas(value: string) {
  // this.miServicio.muestraMensaje(value)
    this.caracteristicasEmpleado.emit(value);
  }
  
}

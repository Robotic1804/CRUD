import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  title = 'Empleado de Lista';

  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) {
  //this.empleados = this.empleadosService.empleados;

}

  ngOnInit():void {
    //this.empleados = this.empleadosService.empleados;

    this.empleadosService.obtenerEmpleados().subscribe((misEmpleados: any) => {
      console.log(misEmpleados);
      this.empleados = Object.values(misEmpleados)
      this.empleadosService.setEmpleados(this.empleados)

    });

  }

  empleados: Empleado[] = [];

  agregarEmpleado() {

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)
    this.empleadosService.agregarEmpleadoServicio(miEmpleado)


  }

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = " ";
  cuadroSalario: number = 0;

  
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
    selector: 'app-actualiza-componente',
    templateUrl: './actualiza-componente.component.html',
    styleUrls: ['./actualiza-componente.component.css'],
    standalone: false
})
export class ActualizaComponenteComponent {

  title = 'Lista de empleados'
  constructor(private router: Router, private route:ActivatedRoute, private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) { }


  empleados: Empleado[];
  accion: number;

  ngOnInit(): void {

    this.accion= parseInt(this.route.snapshot.queryParams['accion'])

    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;

  }
  volverHome() {

    this.router.navigate(['']);


  }


 /* actualizaEmpleado() {

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)
    this.empleadosService.actualizaEmpleado(this.indice, miEmpleado)
    this.router.navigate(['']);


  }

  eliminarEmpleado() {
    
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate(['']);


  } */

  actualizaEmpleado() {

    if(this.accion== 1) {
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)
      this.empleadosService.actualizaEmpleado(this.indice, miEmpleado)
      this.router.navigate(['']);
    }
    else {
      this.empleadosService.eliminarEmpleado(this.indice);
      this.router.navigate(['']);
    }

  }


  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = " ";
  cuadroSalario: number = 0;

  indice: number;


}

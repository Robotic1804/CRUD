import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-comp',
  templateUrl: './proyectos-comp.component.html',
  styleUrls: ['./proyectos-comp.component.css']
})
export class ProyectosCompComponent {

  title = 'Lista de empleados'
  constructor(private router: Router, private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) { }


  empleados: Empleado[];

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }
  volverHome() {
    
    this.router.navigate(['']);


  }
  

  




  agregarEmpleado() {

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)
    this.empleadosService.agregarEmpleadoServicio(miEmpleado)
    this.router.navigate(['']);


  }

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = " ";
  cuadroSalario: number = 0;



}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { LoggerService } from '../shared/logger.service';
import { FirebaseEmpleadosResponse } from '../shared/firebase-response.interface';

@Component({
    selector: 'app-home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.css'],
    standalone: false
})
export class HomeComponentComponent implements OnInit, OnDestroy {
  title = 'Empleado de Lista';
  private destroy$ = new Subject<void>();

  constructor(
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService,
    private logger: LoggerService
  ) {}

  ngOnInit():void {
    this.empleadosService.obtenerEmpleados()
      .pipe(takeUntil(this.destroy$))
      .subscribe((misEmpleados: FirebaseEmpleadosResponse) => {
        this.logger.log('Empleados cargados:', misEmpleados);
        this.empleados = Object.values(misEmpleados);
        this.empleadosService.setEmpleados(this.empleados);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  empleados: Empleado[] = [];

  agregarEmpleado() {
    // Validación de campos vacíos
    if (!this.cuadroNombre?.trim()) {
      this.logger.error('El nombre es requerido');
      return;
    }
    if (!this.cuadroApellido?.trim()) {
      this.logger.error('El apellido es requerido');
      return;
    }
    if (!this.cuadroCargo?.trim()) {
      this.logger.error('El cargo es requerido');
      return;
    }
    // Validación de salario
    if (this.cuadroSalario === null || this.cuadroSalario === undefined || this.cuadroSalario < 0) {
      this.logger.error('El salario debe ser un número positivo');
      return;
    }

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = " ";
  cuadroSalario: number = 0;

  
}

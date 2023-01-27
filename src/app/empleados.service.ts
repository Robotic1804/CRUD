import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
 


@Injectable()
    export class EmpleadosService {

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService: DataServices) {
        
        

    }

    setEmpleados(misEmpleados: Empleado[]) {
        this.empleados = misEmpleados;

    }
    
    obtenerEmpleados() {

        return this.dataService.cargarEmpleado();

    }
    empleados: Empleado[] = [];

        /*new Empleado("Juan", "Perez", "Presidente", 8000),
        new Empleado("Berman", "Navarro", "Seguridad", 7000),
        new Empleado("Pedro", "castro", "coordinador", 4000),
        new Empleado("Betty", "Navarro", "vice presidente", 7000),
        new Empleado("Massiel", "Perez", "Jefa Dpto", 8000), */

    

    agregarEmpleadoServicio(empleado: Empleado) {
    
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar:" + "\n" + empleado.nombre + "\n" + empleado.salario);
        this.empleados.push(empleado)

        this.dataService.guardarEmpleados(this.empleados)

    }
    encontrarEmpleado(indice:number) {
        
        let empleado: Empleado = this.empleados[indice];
        return empleado;
    }

    actualizaEmpleado(indice: number, empleado: Empleado) {
        
        let empleadoModificado = this.empleados[indice];
        empleadoModificado.nombre = empleado.nombre;
        empleadoModificado.apellido = empleado.apellido;
        empleadoModificado.cargo = empleado.cargo;
        empleadoModificado.salario = empleado.salario;
        
        this.dataService.actualizarEmpleados(indice, empleado)

    }

    eliminarEmpleado(indice: number) {
        
        this.empleados.splice(indice, 1);

        this.dataService.eliminarEmpleados(indice);

        this.dataService.guardarEmpleados(this.empleados);

    }

}

function obtenerEmpleados() {
    throw new Error("Function not implemented.");
}

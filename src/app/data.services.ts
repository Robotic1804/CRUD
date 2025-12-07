import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";
import { environment } from "../environments/environment.development";
import { LoggerService } from "./shared/logger.service";
import { FirebaseEmpleadosResponse } from "./shared/firebase-response.interface";

@Injectable()
export class DataServices {

    constructor(
        private httpClient: HttpClient,
        private loginService: LoginService,
        private logger: LoggerService
    ) {}


    cargarEmpleado(): Observable<FirebaseEmpleadosResponse> {
        const token = this.loginService.getIdToken();
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        return this.httpClient.get<FirebaseEmpleadosResponse>(`${environment.firebase.databaseURL}/datos.json`, { headers });
    }

    guardarEmpleados(empleados: Empleado[]) {
        const token = this.loginService.getIdToken();
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        this.httpClient.put(`${environment.firebase.databaseURL}/datos.json`, empleados, { headers }).subscribe(
            response => this.logger.log("Se han guardado los empleados:", response),
            error => this.logger.error("Error al guardar empleados:", error)
        );
    }
    
    actualizarEmpleados(indice:number, empleado: Empleado) {
        const token = this.loginService.getIdToken();
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        const url = `${environment.firebase.databaseURL}/datos/${indice}.json`;
        this.httpClient.put(url, empleado, { headers }).subscribe(
            response => this.logger.log("Se ha modificado correctamente el empleado:", response),
            error => this.logger.error("Error al actualizar empleado:", error)
        );
    }

    eliminarEmpleados(indice: number) {
        const token = this.loginService.getIdToken();
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        const url = `${environment.firebase.databaseURL}/datos/${indice}.json`;
        this.httpClient.delete(url, { headers }).subscribe(
            response => this.logger.log("Se ha eliminado correctamente el empleado:", response),
            error => this.logger.error("Error al eliminar empleado:", error)
        );
    }


}
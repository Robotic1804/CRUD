import { Empleado } from '../empleado.model';

export interface FirebaseEmpleadosResponse {
  [key: string]: Empleado;
}

export interface FirebaseResponse<T> {
  [key: string]: T;
}

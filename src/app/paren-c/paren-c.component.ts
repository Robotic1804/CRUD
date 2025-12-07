import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
    selector: 'app-paren-c',
    templateUrl: './paren-c.component.html',
    styleUrls: ['./paren-c.component.css'],
    standalone: false
})
export class ParenCComponent {

  @Input() empleadoDelista: Empleado;

  @Input() index: number;

  arrayCaracteristica = [''];

  agregarCaracterisca(nuevaCaracterisca: string) {
    this.arrayCaracteristica.push(nuevaCaracterisca);
  }




}

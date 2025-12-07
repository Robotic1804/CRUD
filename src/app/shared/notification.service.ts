import { Injectable } from '@angular/core';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  showMessage(message: string, type: NotificationType = 'info') {
    // Por ahora usamos alert mejorado, pero esto puede reemplazarse con un toast/snackbar library
    const icons = {
      success: '✓',
      error: '✗',
      info: 'ℹ',
      warning: '⚠'
    };

    alert(`${icons[type]} ${message}`);

    // TODO: En el futuro, reemplazar con ngx-toastr o Angular Material Snackbar
    // this.toastr.show(message, '', { timeOut: 3000, positionClass: 'toast-top-right' });
  }

  success(message: string) {
    this.showMessage(message, 'success');
  }

  error(message: string) {
    this.showMessage(message, 'error');
  }

  info(message: string) {
    this.showMessage(message, 'info');
  }

  warning(message: string) {
    this.showMessage(message, 'warning');
  }
}

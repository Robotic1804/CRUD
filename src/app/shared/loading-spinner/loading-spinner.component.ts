import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css'],
  standalone: false
})
export class LoadingSpinnerComponent {
  @Input() message: string = 'Loading...';
  @Input() showCancel: boolean = false;
  @Output() cancel = new EventEmitter<void>();

  onCancel(): void {
    this.cancel.emit();
  }
}

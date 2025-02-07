import { Component } from '@angular/core';
import { NgbActiveModal, NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-address-select',
  standalone: true,
  imports: [],
  templateUrl: './address-select.component.html',
  styleUrl: './address-select.component.css',
})
export class AddressSelectComponent {
  constructor(private readonly ngbActiveModal: NgbActiveModal) { }

  close() {
    this.ngbActiveModal.close()
  }
}

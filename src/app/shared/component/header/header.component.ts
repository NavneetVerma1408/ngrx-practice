import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { cartQuantity } from '../../../state/cart/cart.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { wishlistQuantity } from '../../../state/wishlist/wishlist.selector';
import { getdisableBackground, setDisableBackground } from '../../../state/common.state';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { AddressSelectComponent } from '../../../modal/address-select/address-select.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() adddress: string = ''
  cartQuantity!: Observable<number>
  wishlistQuantity$!: Observable<number>
  isDisabled: boolean = false;
  constructor(private readonly store: Store<any>, private readonly ngbModal: NgbModal, private readonly ngbOffcanvas: NgbOffcanvas) {
    this.cartQuantity = this.store.select(cartQuantity)
    this.wishlistQuantity$ = this.store.select(wishlistQuantity)
  }

  ngOnInit() {
    getdisableBackground().subscribe((res: boolean) => {
      this.isDisabled = res
    })
  }
  selectAddress(isDisabled: boolean) {
    const modRef = this.ngbModal.open(AddressSelectComponent, { backdrop: true, animation: true,modalDialogClass: 'address-dialog-class' })
  }
}

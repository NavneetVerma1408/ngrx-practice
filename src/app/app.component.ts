import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount } from './state/counter/counder.selecter';
import { AsyncPipe } from '@angular/common';
import { decrement, increment, reset } from './state/counter/counter.action';
import { HeaderComponent } from './shared/component/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx'
  count$: Observable<number>

  constructor(private readonly store: Store<any>) {
    this.count$ = this.store.select(selectCount)
  }
  increment() { this.store.dispatch(increment()) }
  decrement() { this.store.dispatch(decrement()) }
  reset() { this.store.dispatch(reset()) }
}

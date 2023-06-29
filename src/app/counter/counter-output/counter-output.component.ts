import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Subscription, Observable } from 'rxjs';
import { getCounter } from '../state/counter.selectors';
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit{
  //@Input() counter: any;
  counter: number | undefined;

  //counter$: Observable<{ counter: Number; }> | undefined;

  constructor(private store: Store<{counter: CounterState }>){
   
  }

  ngOnInit(): void {
    // this.counter$ = this.store.select('counter');
    this.store.select(getCounter).subscribe((data) => {
      this.counter = data;
    })
  }

}

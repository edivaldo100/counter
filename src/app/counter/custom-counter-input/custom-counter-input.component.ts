import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeTexto, customIncrement } from '../state/counter.actions';
import { getTexto } from '../state/counter.selectors';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit{
  value:number = 0;
  texto: string = 'Texto Inicio';

  constructor(private store: Store<{ counter: CounterState }>){

  }
  ngOnInit(): void {
    this.store.select(getTexto).subscribe((textoRes) => {
      this.texto = textoRes;
    })

  }
  onAdd(){
    this.store.dispatch(customIncrement({ count: +this.value }));//o + é para somar e não concatenar pois o campo e txt
  }
  onChangeTexto(){
    this.store.dispatch(changeTexto());
  }
}

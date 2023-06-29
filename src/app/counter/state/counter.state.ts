export interface CounterState{
    counter: number;
    texto: string;
}

export const initialState: CounterState = {
    counter: 5,
    texto: ' Texto estado inicial! ',
}
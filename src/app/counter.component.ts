import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
     <h2>{{ counter}}</h2>
      <button (click)="increseBy()" >+1</button>
      <button (click)="reset()" >reset</button>
      <button (click)="decreseBy()">-1</button>
    `
})
export class CounterComponent{
    counter = 12;

    increseBy():void{
      this.counter++;
    }
    decreseBy():void{
      this.counter--;
    }
    reset():void{
        this.counter=10;
      }
}
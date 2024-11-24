import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
    public name: string = 'Iroman';
    public age: number = 24;


    changeName():void{
      this.name = "Spiderman";
    }

    changeAge():void{
      this.age = 42;
    }

}

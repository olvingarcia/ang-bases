import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListHeroComponent {

  public deletedHero?:string;
  public heroesNames: string[] = ['Superman','Iroman','Hulk'];

  removeLastHero():void{
    this.deletedHero = this.heroesNames.pop();

  }
}

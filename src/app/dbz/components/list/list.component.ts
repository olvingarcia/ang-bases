import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListDbzComponent {

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  @Input()
public characterList: Character[] = [
  {
    name: 'Trunk',
    power:10
  }
];

onDeteleCharacter(id:string):void {
  this.onDelete.emit(id);
}

 }

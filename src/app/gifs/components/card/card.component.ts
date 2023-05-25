import { Component, Input } from '@angular/core';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input()
  public imgSrc: string = '';
  public title: string = 'Gift Title';
}
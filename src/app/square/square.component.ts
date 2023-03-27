import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button *ngIf="!value">{{ value }}</button>
    <button class="x" *ngIf="value == 'X'">{{ value }}</button>
    <button class="o" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [
    `
      button {
        width: 100%;
        height: 100%;
        font-size: 5em !important;
        background-color: #eee;
      }

      button:hover {
        background-color: #ddd;
      }

      button.x {
        color: black;
      }

      button.o {
        color: blue;
      }
    `,
  ],
})
export class SquareComponent {
  @Input() value: 'X' | 'O' = 'X';
}

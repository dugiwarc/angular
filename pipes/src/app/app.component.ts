import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;

  onNameChange = (evt: any) => {
    this.name = evt.target.value;
  };

  onDateChange = (evt: any) => {
    this.date = evt.target.value;
  };

  onAmountChange = (evt: any) => {
    this.amount = parseFloat(evt.target.value);
  };

  onHeightChange = (evt: any) => {
    this.height = parseFloat(evt.target.value);
  };

  onMilesChange = (evt: any) => {
    this.miles = parseFloat(evt.target.value);
  };
}

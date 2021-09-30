import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();

  term = '';

  constructor() {}

  ngOnInit(): void {}

  // onInput(value: string): void {
  //   this.term = value;
  // }

  onFormSubmit(evt: any) {
    evt.preventDefault();
    this.submitted.emit(this.term);
  }
}

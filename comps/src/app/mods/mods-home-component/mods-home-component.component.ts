import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home-component',
  templateUrl: './mods-home-component.component.html',
  styleUrls: ['./mods-home-component.component.css'],
})
export class ModsHomeComponentComponent implements OnInit {
  modalOpen = false;

  items = [
    { title: 'Why', content: 'This is why we do this' },
    { title: 'How', content: 'This is how we do it' },
    { title: 'Who', content: 'This is who we are' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick = () => {
    this.modalOpen = !this.modalOpen;
  };
}

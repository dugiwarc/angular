import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 34, label: '# Revenu' },
    { value: 98, label: '# Reviews' },
  ];

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couchsurf',
      description: 'Tihs is',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dress',
      description: 'Tihs is',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

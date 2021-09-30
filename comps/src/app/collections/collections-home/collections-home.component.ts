import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {
      name: 'james',
      age: 23,
      job: 'Designer',
      employed: true,
    },
    {
      name: 'rames',
      age: 23,
      job: 'Plumber',
      employed: true,
    },
    {
      name: 'tames',
      age: 23,
      job: 'Boxer',
      employed: false,
    },
  ];

  headers = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'age',
      label: 'Age',
    },
    {
      key: 'job',
      label: 'Job',
    },
    {
      key: 'employed',
      label: 'Employed',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

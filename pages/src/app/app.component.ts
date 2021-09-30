import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the beach',
      url: `https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: 'At the forest',
      url: `https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
      // url: `https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: 'At the city',
      url: `https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: 'At the marketplace',
      url: `https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: 'At the beach',
      url: `https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: 'At the forest',
      url: `https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
      // url: `https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: 'At the city',
      url: `https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: 'At the marketplace',
      url: `https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: 'At the beach',
      url: `https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: 'At the forest',
      url: `https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
      // url: `https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: 'At the city',
      url: `https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: 'At the marketplace',
      url: `https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: 'At the beach',
      url: `https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: 'At the forest',
      url: `https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
      // url: `https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: 'At the city',
      url: `https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    },
    {
      title: 'At the marketplace',
      url: `https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
    },
  ];

  checkWindowIndex(idx: number) {
    return Math.abs(this.currentPage - idx) < 2;
  }
}

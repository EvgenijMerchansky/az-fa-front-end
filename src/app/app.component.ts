import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  description = "private description";
  names = [];

  ngOnInit() {
    (async () => {
      const request = await fetch('https://azurefa.azurewebsites.net/api/users');
      const result = await request.json();
    
      this.names = [...result];
    })();
  }
}

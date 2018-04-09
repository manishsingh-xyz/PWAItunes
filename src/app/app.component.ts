import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iTunes Search ';
  searchedItem = '';
  selectedItem = 'music';
  
  items = [
    { value: 'music', viewValue: 'Music & Movies' },
    { value: 'app', viewValue: 'Apps' }
  ];
}

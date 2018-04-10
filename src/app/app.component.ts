import { Component } from '@angular/core';
import { ItunesdataService } from './itunesdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private itunesdataservice: ItunesdataService) { }

  title:string = 'iTunes Search ';
  searchedItem:string = '';
  selectedItem:string = 'movie';
  iData =[];

  items = [
    { value: 'movie', viewValue: 'Music & Movies' },
    { value: 'software', viewValue: 'Apps' }
  ];

  SearchItunes(item, type): void {
      this.itunesdataservice.getData(item,type)
            .subscribe((res) => {
                console.log(res);              
                this.iData = res.results;
              }
            );
  } 

  getFullDetails(id): void {
    this.itunesdataservice.getFullData(id)
      .subscribe((res) => {
            console.log(res);
          }
      );
  }
}

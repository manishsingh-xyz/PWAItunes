import { Component, OnInit } from '@angular/core';
import { ItunesdataService } from '../itunesdata.service';


interface APIresponse {
    results: any;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

 

  ngOnInit() {
  }

  constructor(private itunesdataservice: ItunesdataService) { }

  title = 'Movies Search ';
  searchedItem:string = '';
  selectedItem:string = 'movie';
  iData =[];
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  loader: boolean = false;

  items = [
    { value: 'movie', viewValue: 'Music & Movies' },
    { value: 'software', viewValue: 'Apps' }
  ];

//   this.sidebarService.getSidebar().subscribe((sidebar: Sidebar) => {
//     this.sidebar = sidebar.content;
// });


  SearchItunes(): void {
      this.loader = true;  
      this.itunesdataservice.getData(this.searchedItem,this.selectedItem)
              .subscribe((res: APIresponse) => {
                // this.sidebar = sidebar.content;
                this.loader = false;
                 this.iData = res.results;
                 
                 console.log("movie",this.iData);
             });
            
            
            // .subscribe((res) => {
            //     console.log(res);              
            //     this.iData = res.results;
            //   }
            // );
  } 

  

}

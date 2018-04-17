import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItunesdataService } from '../itunesdata.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
  data;
  constructor(private itunesdataservice: ItunesdataService,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getFullDetails();
  }

  getFullDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itunesdataservice.getFullData(id)
      .subscribe((res) => {
            console.log(res);
            this.data = res; 
          }
      );
  }

}

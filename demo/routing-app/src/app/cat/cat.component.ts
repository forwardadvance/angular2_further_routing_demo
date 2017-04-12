import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  
  catName:any
  ngOnInit() {
    this.route.params
      .subscribe((params:Params) => {
        this.catName = params['cat_name']
        console.log(this.catName)
      });
  }

}

import {Component,OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  templateUrl:'./product-detail.component.html'
})

export class ProductDetailsComponent implements OnInit{

  id:number;

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(){
    /*
    this is param passing data from html to the logical prgming
    */
    this.id=this.route.snapshot.params['id'];

  }

}

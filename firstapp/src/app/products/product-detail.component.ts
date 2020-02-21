import {Component,OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  templateUrl:'./product-detail.component.html'
})

export class ProductDetailsComponent implements OnInit{

  id:number;
  name:string;
  image:string;
  description:string;
  constructor(private route:ActivatedRoute){

  }

  ngOnInit(){
    /*
    this is param passing data from html to the logical prgming
    */
    this.id=this.route.snapshot.params['id'];
    this.route.queryParams
    .subscribe((data)=>{
      this.name=data['name'];
      this.image=data['img'];
      this.description=data['desc'];
    })

  }

}

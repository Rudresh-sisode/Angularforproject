import {Component, OnInit} from '@angular/core';
import {IProduct} from './product.model';
import {ProductServicev} from './product.service';

@Component({
    selector:'app-prod',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css'],
    styles:[
        `.online{
            background-color:gray
        }`
    ]
})
export class ProductComponent implements OnInit{
    title:string='Products List 1';

    showTable : boolean = true;
    showImage: boolean=false;
    userText:string;
    imageWidth: number=100;
    serverStatus:string='Offline';

    constructor(private productservice:ProductServicev){
        this.serverStatus=Math.random() > 0.5 ? 'Online' : 'Offline'

    }

    //one way data binding
    products:IProduct[] ;

    ngOnInit():void{
      this.productservice.getProduct()
      .subscribe((data)=> this.products=data)
    }

    getcolor(){
        return this.serverStatus==='Online' ? 'green':'red'
    }

    toggleImage():void{
        this.showImage=!this.showImage;
    }
    dataRecive(message:string):void{
        this.title="Product List"+message;
    }
}
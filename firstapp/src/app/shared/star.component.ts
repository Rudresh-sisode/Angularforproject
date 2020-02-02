import {Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
 

@Component({
    selector: 'app-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StartComponent implements OnChanges, OnInit,OnDestroy{
    @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();
    @Input() rating:number;
    starWidth:number;

    constructor(){
        console.log("this is contructor")
    }
    //lifecycle hook
    ngOnInit(){
        console.log("this is on Init")
    }

    ngOnChanges(){
        this.starWidth=this.rating*86/6;
        console.log("this is Onchange");

    }

    onStar():void{

        this.ratingClicked.emit(`the rating clicked is ${this.rating}`)
    }

    ngOnDestroy(){

    }
    
}
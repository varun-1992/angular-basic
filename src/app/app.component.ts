import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){}

  heroes:any = []

  ngOnInit(){
    console.log('inside oninit');
    for(let i=0;i<100;i++){
      this.heroes.push({name : 'abc'+Math.random()*2.5,id:Math.random()})
    }
  }
}

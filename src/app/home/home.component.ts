import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  details;
  userID;
  showTable:boolean = true;
  // showTable1:boolean = false;


  constructor(private service:HomeService) { }
getData(){
  this.service.getAll().subscribe(res => {
    console.log(res);
    this.details = res
  })
}
getById(userId){
  this.service.getDataByID(userId).subscribe(res => {
    console.log(res);
    this.userID = res;
    this.showTable = false
    //this.showTable1 = true;


  })
}
  ngOnInit() {
    this.getData();
    
  }

}

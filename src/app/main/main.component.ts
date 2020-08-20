import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  showTable :boolean= false;
  userID;
  userID1;
  constructor(private service:HomeService) { }

  getById(){
    this.userID1 =  this.userID1
    this.service.getDataByID(this.userID1).subscribe(res => {
      console.log(res);
      this.userID = res;
      this.showTable = true
      //this.showTable1 = true;
  
  
    })
  }

  ngOnInit() {
  }

}

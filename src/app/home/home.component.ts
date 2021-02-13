import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Users } from '../model';
import { Projects } from '../model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  project;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.project = data;
              console.log(this.project[0].financials);
              console.log(this.project);


      },
      err => {
        this.project = JSON.parse(err.error).message;
      }
    );
  }

}

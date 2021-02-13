import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Users } from '../model';


@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  content: Users[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
      console.log(data);
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import {User} from "../../../../services/models/user";
import {UserControllerService} from "../../../../services/services/user-controller.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserControllerService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error fetching users', err);
        console.log('Full error response:', err.error);
      }
    });

  }
}

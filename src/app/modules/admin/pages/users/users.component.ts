import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserControllerService } from '../../../../services/services/user-controller.service';
import { User } from '../../../../services/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserControllerService, private router: Router) { }

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
      }
    });
  }

  deleteUser(userId: number | undefined): void {
    if (userId === undefined) {
      console.error('User ID is undefined');
      return;
    }

    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser({ id: userId }).subscribe({
        next: () => {
          console.log('User deleted successfully');
          this.loadUsers(); // Reload users after deletion
        },
        error: (err) => {
          console.error('Error deleting user', err);
        }
      });
    }
  }

}

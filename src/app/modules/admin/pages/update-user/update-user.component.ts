import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserControllerService } from '../../../../services/services/user-controller.service';
import { User } from '../../../../services/models/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  user: User = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    roles: []
  };

  constructor(
    private userService: UserControllerService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById({ id: userId }).subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (err) => {
        console.error('Error fetching user:', err);
        this.snackBar.open('Error fetching user details', 'Close', {
          duration: 3000,
        });
      }
    });
  }

  onSubmit(): void {
    this.userService.updateUser({ id: this.user.id!, body: this.user }).subscribe({
      next: (updatedUser) => {
        console.log('User updated successfully:', updatedUser);
        this.snackBar.open('User updated successfully', 'Close', {
          duration: 3000,
        });
        this.router.navigate(['/users']);
      },
      error: (err) => {
        console.error('Error updating user:', err);
        this.snackBar.open('Error updating user', 'Close', {
          duration: 3000,
        });
      }
    });
  }
}

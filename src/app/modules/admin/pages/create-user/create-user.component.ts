import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { UserControllerService } from '../../../../services/services/user-controller.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  role: string = '';
 // roles: string[] = ['USER', 'Developer', 'Security Consultant']; // Example roles

  constructor(private userService: UserControllerService, private router:Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // You can load additional data or perform other initialization here if needed
  }

  onSubmit() {
    this.userService.createUser({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      role: this.role
    }).subscribe({
      next: (data) => {
        console.log('User created successfully:', data);
        this.snackBar.open('User created successfully', 'Close', {
          duration: 3000, // Duration in milliseconds
        });
        // Redirect to the user list or show a success message here
        this.router.navigate(['/admin/users']);
      },
      error: (err) => {
        console.error('Error creating user:', err);
        // Handle the error (e.g., display an error message)
      }
    });
  }
}

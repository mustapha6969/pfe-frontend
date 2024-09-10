import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { ProjectControllerService } from '../../../../services/services/project-controller.service'; // Adjust the path as necessary

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  name: string = '';
  description: string = '';
  // Add more project-related fields if necessary

  constructor(
    private projectService: ProjectControllerService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // Additional initialization logic if needed
  }

  onSubmit() {
    this.projectService.createProject({
      name: this.name,
      description: this.description,
      // Include additional fields here
    }).subscribe({
      next: (data) => {
        console.log('Project created successfully:', data);
        this.snackBar.open('Project created successfully', 'Close', {
          duration: 3000, // Duration in milliseconds
        });
        this.router.navigate(['/admin/projects']); // Adjust the navigation path as necessary
      },
      error: (err) => {
        console.error('Error creating project:', err);
        // Handle the error (e.g., display an error message)
      }
    });
  }

}

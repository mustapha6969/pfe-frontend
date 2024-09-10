import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectControllerService } from '../../../../services/services/project-controller.service';
import { Project } from '../../../../services/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectControllerService, private router: Router) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getAllProjects().subscribe({
      next: (data: Project[]) => {
        this.projects = data;
      },
      error: (err) => {
        console.error('Error fetching projects', err);
      }
    });
  }

  deleteProject(projectId: number | undefined): void {
    if (projectId === undefined) {
      console.error('Project ID is undefined');
      return;
    }

    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject({ id: projectId }).subscribe({
        next: () => {
          console.log('Project deleted successfully');
          this.loadProjects(); // Reload projects after deletion
        },
        error: (err) => {
          console.error('Error deleting project', err);
        }
      });
    }
  }
}

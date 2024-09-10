import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cons-project-detail',
  templateUrl: './cons-project-detail.component.html',
  styleUrls: ['./cons-project-detail.component.scss']
})
export class ConsProjectDetailComponent implements OnInit {
  reports = [

    { id: 3, title: 'Report 3', description: 'Description of Report 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  viewPdf(report: { description: string; id: number; title: string } | {
    description: string;
    id: number;
    title: string
  } | { description: string; id: number; title: string }) {

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cons-reports',
  templateUrl: './cons-reports.component.html',
  styleUrls: ['./cons-reports.component.scss']
})
export class ConsReportsComponent implements OnInit {

  reports = [
    { id: 1, title: 'Report 1', description: 'Description of Report 1' },
    { id: 2, title: 'Report 2', description: 'Description of Report 2' },
    { id: 3, title: 'Report 3', description: 'Description of Report 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  viewPdf(report: any) {

  }
}

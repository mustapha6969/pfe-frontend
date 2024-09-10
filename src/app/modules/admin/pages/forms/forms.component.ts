import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  forms = [
    { id: 1, title: 'Form 1', description: 'Description of Form 1' },
    { id: 2, title: 'Form 2', description: 'Description of Form 2' },
    { id: 3, title: 'Form 3', description: 'Description of Form 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

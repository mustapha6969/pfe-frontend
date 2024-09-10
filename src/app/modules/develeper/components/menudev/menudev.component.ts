import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menudev',
  templateUrl: './menudev.component.html',
  styleUrls: ['./menudev.component.scss']
})
export class MenudevComponent implements OnInit {
  ngOnInit(): void {
    const linkColor = document.querySelectorAll('.nav-link');
    linkColor.forEach(link => {
      if (window.location.href.endsWith(link.getAttribute('href') || '')) {
        link.classList.add('active');
      }
      link.addEventListener('click', () => {
        linkColor.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
  }

  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

}

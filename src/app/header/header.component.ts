import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router) { }

  logout(){
    this.authService.logout().subscribe(
      data => {
        localStorage.clear()
        this.router.navigate(['/auth/login'])
      }
    )
  }
  
  ngOnInit() {
  }

}

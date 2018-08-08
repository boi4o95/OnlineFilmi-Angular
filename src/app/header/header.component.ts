import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router, private toastr : ToastrService) { }

  logout(){
    this.authService.logout().subscribe(
      data => {
        localStorage.clear()
        this.toastr.success("Logout successful.", "Success!")
        this.router.navigate(['/auth/login'])
      }
    )
  }
  
  ngOnInit() {
  }

}

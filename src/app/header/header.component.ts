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
  checkStatus: boolean
  checkIfAdmin: boolean

  public authtoken(): boolean {
    if (localStorage.getItem('authtoken') !== null) {
      return true
    } else {
      return false;
    }
  }

  public ifIsAdmin(): boolean {
    if (localStorage.getItem('roles') !== null) {
      return true
    } else {
      return false;
    }
  }
  logout(){
    this.authService.logout().subscribe(
      data => {
        localStorage.clear()
        this.toastr.success("Logout successful.", "Success!")
       
        this.router.navigate(['/auth/login'])
        window.location.reload()
      }
    )
  }
  
  ngOnInit() {
    this.checkStatus = this.authtoken()
    this.checkIfAdmin = this.ifIsAdmin()
  }

}

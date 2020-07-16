import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};

  constructor(
    private ngZone: NgZone,
    private router: Router,
    private fb: FormBuilder
  ) 
  { 
  }

  ngOnInit(): void {
  }


  onSubmit() {
    //debugger;

    this.router.navigateByUrl('/employees-list')
    
  }
  

}

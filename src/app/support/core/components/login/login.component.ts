/**
 * Created by: Ravikanth Mamillapalli
 * Date: 26/12/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './../../models/login.model';

@Component(
{
	selector: 'login',
	templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
	login: Login;
	
	constructor( private router: Router) {
		this.login = new Login();
	}
	ngOnInit() {
	}
	
}


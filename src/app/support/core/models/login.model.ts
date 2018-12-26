/**
 * Created by: Ravikanth Mamillapalli
 * Date: 26/12/2018
 * Organization: Individual	
 */
export class Login
{
	
	email: string;
	password: string;
	
	constructor() { 
	}
	
	set setEmail(value: string) {
		this.email = value;
	}
	get getEmail() : string {
		return this.email;
	}
	set setPassword(value: string) {
		this.password = value;
	}
	get getPassword() : string {
		return this.password;
	}
	
}

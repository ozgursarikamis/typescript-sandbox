import fs from 'fs';

export class Main {
	firstName: string;
	lastName: string;
	id: number;
	age: number;
	isActive: boolean;

	constructor(
		firstName: string, 
		lastName: string,
		id: number,
		age: number,
		isActive: boolean
		) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.id = id;
		this.age = age;
		this.isActive = isActive;

		const nameTuple: [string, string, number, number, boolean] = [firstName, lastName, id, age, isActive];
		
		console.log(nameTuple);
	}
}
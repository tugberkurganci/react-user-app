export interface Hair {
	color: string;
	type: string;
}

export interface Coordinate {
	lat: number;
	lng: number;
}

export interface Addres {
	address: string;
	city: string;
	coordinates: Coordinate;
	postalCode: string;
	state: string;
}

export interface Bank {
	cardExpire: string;
	cardNumber: string;
	cardType: string;
	currency: string;
	iban: string;
}

export interface Coordinate {
	lat: number;
	lng: number;
}

export interface Addres {
	address: string;
	city: string;
	coordinates: Coordinate;
	postalCode: string;
	state: string;
}

export interface Company {
	address: Addres;
	department: string;
	name: string;
	title: string;
}

export interface UserModel {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string;
	image: string;
	bloodGroup: string;
	height: number;
	weight: number;
	eyeColor: string;
	hair: Hair;
	domain: string;
	ip: string;
	address: Addres;
	macAddress: string;
	university: string;
	bank: Bank;
	company: Company;
	ein: string;
	ssn: string;
	userAgent: string;
	friendList:UserModel[];
}
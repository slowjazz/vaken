import { Resolver, Query, Arg, FieldResolver, ResolverInterface } from 'type-graphql';
import { plainToClass } from 'class-transformer';

import { User } from '../data/User';

/*
 * TODO - consider implementing ResolverInterface
 * TODO - implement mutations
 */
@Resolver(of => User)
export class UserResolver {
	private readonly users: User[] = createUserSamples();

	/**
	 * Returns a User corresponding a an email address (unique)
	 */
	@Query(returns => User, { nullable: true })
	async getUserByEmail(@Arg('email') email: string): Promise<User | undefined> {
		return await this.users.find(user => user.email === email);
	}

	/**
	 * Get all Users
	 */
	@Query(returns => [User], { description: 'Get all the Users in the database' })
	async getAllUsers(): Promise<User[]> {
		return await this.users;
	}
}

/**
 * Function to create dummy data
 */
let createUserSamples = () => {
	return plainToClass(User, [
		{
			nfcCodes: [],
			firstName: 'Matthew',
			lastName: 'Leon',
			email: 'ml@mattleon.com',
			phoneNumber: '+19876543210',
			gender: 'male',
			shirtSize: 'M',
		},
		{
			nfcCodes: [],
			firstName: 'Irfaan',
			lastName: 'Khalid',
			email: 'irfaan.khalid@vanderbilt.edu',
			phoneNumber: '+18152809862',
			gender: 'male',
			shirtSize: 'M',
		},
		{
			nfcCodes: [],
			firstName: 'Alan',
			lastName: 'Wilms',
			email: 'alan.wilms@vanderbilt.edu',
			phoneNumber: '+19283403498',
			gender: 'male',
			shirtSize: 'M',
		},
		{
			nfcCodes: [],
			firstName: 'Felix',
			lastName: 'Tiet',
			email: 'felix.tiet@vanderbilt.edu',
			phoneNumber: '+18888888888',
			gender: 'male',
			shirtSize: 'S',
		},
	]);
};
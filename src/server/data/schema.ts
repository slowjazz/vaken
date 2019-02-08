import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const typeDefs = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    """
    the list of Posts by this author
    """
    posts: [Post]
  }

  type Post {
    id: Int!
    title: String
    author: Author
    votes: Int
  }

  # the schema allows the following query:
  type Query {
    posts: [Post]
    author(id: Int!): Author
  }
`;

// example data
const authors = [
	{ id: 1, firstName: 'Tom', lastName: 'Coleman' },
	{ id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
	{ id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
];

const posts = [
	{ id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
	{ id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
	{ id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
	{ id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
];

const resolvers = {
	Query: {
		posts: () => posts,
	},
};

export const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});
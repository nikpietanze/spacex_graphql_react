import { GraphQLObjectType, GraphQLString } from 'graphql';

const RocketType = new GraphQLObjectType({
	name: 'Rocket',
	fields: () => ({
		rocket_id: {
			type: GraphQLString,
		},
		rocket_name: {
			type: GraphQLString,
		},
		rocket_type: {
			type: GraphQLString,
		},
	}),
});

export default RocketType;

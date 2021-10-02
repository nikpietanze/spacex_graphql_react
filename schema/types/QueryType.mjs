import { GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLInt } from 'graphql';
import LaunchType from './LaunchType.mjs';
import fetch from 'node-fetch';
import RocketType from './rocketType.mjs';

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		launches: {
			type: GraphQLList(LaunchType),
			async resolve(_parent, _args) {
				const response = await fetch('https://api.spacexdata.com/v3/launches');
				const data = await response.json();

				let prevFlightNumber;
				data.forEach((launch, index) => {
					if (prevFlightNumber && launch.flight_number === prevFlightNumber) {
						data.splice(index, 1);
					} else {
						prevFlightNumber = launch.flight_number;
					}
				});

				return data;
			},
		},
		launch: {
			type: LaunchType,
			args: {
				flight_number: { type: GraphQLInt },
			},
			async resolve(_parent, args) {
				try {
					console.log(args.flight_number);
					const response = await fetch(
						`https://api.spacexdata.com/v3/launches/${args.flight_number}`,
					);
					return response.json();
				} catch (error) {
					console.log(error);
				}
			},
		},
		rockets: {
			type: GraphQLList(RocketType),
			async resolve(_parent, _args) {
				try {
					const response = await fetch('https://api.spacexdata.com/v3/rockets');
					return response.json();
				} catch (error) {
					console.log(error);
				}
			},
		},
		rocket: {
			type: RocketType,
			args: {
				id: { type: GraphQLInt },
			},
			async resolve(_parent, args) {
				try {
					const response = await fetch(`https://api.spacexdata.com/v3/rockets/${args.id}`);
					return response.json();
				} catch (error) {
					console.log(error);
				}
			},
		},
	},
});

export default new GraphQLSchema({
	query: RootQuery,
});

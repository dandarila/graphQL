export const resolvers = {
	Query: {
		jobs: () => [
			{
				id: "id1",
				title: "Title1",
				description: "Some desc 11",
			},
			{
				id: "id2",
				title: "Title2",
				description: "Some desc 22",
			},
		],
	},
};

const resolvers = {
    Query: {
        // returns an array of tracks that will be use to populate
        // the homepage grid of our web client
        tracksForHome: (parents, args, context, info) => {}
    }
};

module.exports = resolvers;
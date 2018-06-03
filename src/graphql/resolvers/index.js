import GraphQLDate from 'graphql-date';

import TweetResolver from './tweet-resolvers';
import UserResolver from './user-resolvers';

export default {
  Date: GraphQLDate,
  Query: {
    getTweet: TweetResolver.getTweet,
    getTweets: TweetResolver.getTweets
  },
  Mutation: {
    createTweet: TweetResolver.createTweet,
    updateTweet: TweetResolver.updateTweet,
    deleteTweet: TweetResolver.deleteTweet,
    signup: UserResolver.signup,
    login: UserResolver.login
  }
}
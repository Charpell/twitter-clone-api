# twitter-clone-api
Build a twitter api with node, graphql, mongodb and express.


### Signup
```
mutation {
  signup(email: "test@gmail.com", password: "passw123") {
		token
  }
}
```

### Create Tweet
```
mutation {
  createTweet(text: "Hello !") {
    _id
    text
  }
}
```

### Get tweet
```
{
  getTweets {
    _id
    text
    favoriteCount
    user {
      username
      email
      avatar
    }
  }
}
```

### Update tweet
```
mutation {
  updateTweet(_id: "5b13d396e037e08b2d1f4203" text: "Updated!!!") {
    _id
    text
  }
}
```

### Delete tweet
```
mutation {
  deleteTweet(_id: "5b13d66b66f0258be70ad6b8") {
		message
  }
}
```

### Get users's tweet
```
{
	getUserTweets {
    _id
    text
  }	
}
```

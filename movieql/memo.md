```js
query {
  feed {
    comments
    likeNumbers
  }
  notification {
    isRead
  }
  user {
    username
    profilePic
  }
}
```

```js
{
  feed: [
    {
      comments: 5,
      likeNumbers: 10
    }
  ],
  notification: [
    {
      isRead: true
    },
    {
      isRead: false
    },
    {
      isRead: true
    }
  ]
}
```

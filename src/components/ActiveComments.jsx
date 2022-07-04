import React from 'react'
import { useQuery } from 'react-query'
import Posts from './Posts'

const ActiveComments = () => {
  const { isLoading, data: comments, refetch } = useQuery('comments', () =>
    fetch('https://jsonplaceholder.typicode.com/comments').then(res =>
      res.json()
    )
  )

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  let arr = []
  const length = comments.length
  for (let i = 0; i < length; i++) {
    arr.push(comments[i].postId)
  }

  var uniqueArr = [...new Set(arr)]

  return (
    <div>
      {uniqueArr.map((post, index) => (
        <Posts key={index} post={post} comments={comments}></Posts>
      ))}
    </div>
  )
}

export default ActiveComments

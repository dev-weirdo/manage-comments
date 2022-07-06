import React, { createContext } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import Posts from './Posts'

export const commentsContext = createContext(null)

const ActiveComments = () => {
  const { isLoading, data: comments, refetch } = useQuery('comments', () =>
    fetch('https://jsonplaceholder.typicode.com/comments').then(res =>
      res.json()
    )
  )

  if (isLoading) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <h1 className='text-3xl font-extralight'>Loading...</h1>
      </div>
    )
  }

  let arr = []
  const length = comments.length
  for (let i = 0; i < length; i++) {
    arr.push(comments[i].postId)
  }

  var uniqueArr = [...new Set(arr)]

  return (
    <commentsContext.Provider value={comments}>
      <div className='py-5'>
        {uniqueArr.map((post, index) => (
          <Posts key={index} post={post}></Posts>
        ))}
      </div>
    </commentsContext.Provider>
  )
}

export default ActiveComments

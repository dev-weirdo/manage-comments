import React from 'react'

const Posts = ({ post, comments }) => {
  console.log(comments)
  return (
    <div
      tabindex='0'
      className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box'
    >
      <div className='collapse-title text-xl font-medium'>
        Post {post}
      </div>
      <div className='collapse-content'>
        
      </div>
    </div>
  )
}

export default Posts

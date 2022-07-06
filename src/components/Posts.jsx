import React, { useState } from 'react'
import Comments from './Comments'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

const Posts = ({ post }) => {
  const [arrow, setArrow] = useState(false)
  return (
    // <div
    //   tabIndex='0'
    //   className='collapse collapse-arrow my-3 border border-base-300 bg-base-100 rounded-box'
    // >
    //   <div className='collapse-title text-xl font-medium'>Post {post}</div>
    //   <div className='collapse-content'>
    //     <Comments post={post}></Comments>
    //   </div>
    // </div>

    <div class='collapse'>
      <input onClick={() => setArrow(!arrow)} type='checkbox' class='peer' />
      <div class='collapse-title text-primary-content peer-checked:text-secondary-content'>
        <h1 className='flex items-center gap-2 text-xl md:text-2xl'>
          Post {post}{' '}
          {arrow ? (
            <RiArrowUpSLine></RiArrowUpSLine>
          ) : (
            <RiArrowDownSLine></RiArrowDownSLine>
          )}
        </h1>
      </div>
      <div class='collapse-content text-primary-content peer-checked:text-secondary-content'>
        <Comments post={post}></Comments>
      </div>
    </div>
  )
}

export default Posts

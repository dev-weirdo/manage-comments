import React, { useContext } from 'react'
import { commentsContext } from './ActiveComments'

const Comments = ({ post }) => {
  const comments = useContext(commentsContext)

  const filteredComments = comments.filter(comment => comment.postId === post)

  console.log(filteredComments)

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 '>
      <div>
        <div>
          <h1>Comments</h1>
          <input type='search border border-2 rounded border-accent' />
        </div>
        <div class='overflow-x-auto'>
          <table class='table w-full'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {filteredComments.map(comment => (
                <tr>
                  <td>Name {comment.id}</td>
                  <td className='flex items-center gap-2'>
                    {comment.body.substring(1, 13) + '...'} <input type="checkbox" class="checkbox" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Comments

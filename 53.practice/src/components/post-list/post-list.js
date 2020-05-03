import React from 'react';

import PostListItem from '../post-list-item';

const PostList = ({posts}) => {

   const elements = posts.map(item => {
      // Простой способ проверки на объект + содержится ли в нем информация
      if ( typeof item === 'object' && isEmpty(item) ){ 
      const {id, ...itemProps} = item;
         return (
            <li key={id} className='list-group-item'>
               <PostListItem {...itemProps}
               // label={item.label} 
               // important={item.important}
               />
            </li>
         )
      }
   })

   function isEmpty(obj) {
      for(let key in obj)
      {
         return true;
      }
      return false;
   }

   return (
      <ul className='app-list list-group'>

         {elements}

         {/* <PostListItem label={posts[0].label} important={posts[0].important}/>
         <PostListItem label='That is so good'/>
         <PostListItem label='I need a break...'/> */}
      </ul>
   )
}

export default PostList;
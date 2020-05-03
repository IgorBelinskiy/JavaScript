import React from 'react';

const PostAddForm = () => {
   return (
      <form className='button-panel d-flex'>
         <input 
            type='text' 
            placeholder='О чем Вы думаете?' 
            className='form-control new-post-label'>
         </input>
         <button 
         type='submit' 
         className='btn btn-outline-secondary'>
            Добавить
         </button>
      </form>
   )
}

export default PostAddForm;
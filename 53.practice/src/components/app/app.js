import React from 'react';

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list/'
import PostAddForm from '../post-add-form'

import './app.css'
import '../app-header/app-header.css'
import '../post-add-form/post-add-form.css'
import '../post-list/post-list.css'
// import '../post-list-item/post-list-item.css'
import '../post-status-filter/post-status-filter.css'
import '../search-panel/search-panel.css'

import styled from 'styled-components'

const AppBlock = styled.div`
   margin: 0 auto;
   max-width: 800px;
`

const StyledAppBlock = styled(AppBlock)`
   background: grey;
`



const data = [
   {label: 'Going to learn React', important: true, id: 'qwe'},
   {label: 'That is so good', important: false, id: 'wer'},
   {label: 'I need a break...', important: false, id: 'ert'}
]

const App = () => {
   return (
      <StyledAppBlock>
         <AppHeader></AppHeader>
         <div className="search-panel d-flex">
            <SearchPanel></SearchPanel>
            <PostStatusFilter></PostStatusFilter>
         </div>
         <PostList posts={data}></PostList>
         <PostAddForm></PostAddForm>
      </StyledAppBlock>
      
   )
}

export default App;
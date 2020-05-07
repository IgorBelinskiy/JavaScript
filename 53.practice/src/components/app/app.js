import React, {Component} from 'react';

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
   background: #eaf5fc;
`





export default class App extends Component {
   constructor (props) {
      super (props)
      this.state = {
         data : [
            {label: 'Going to learn React', important: true, id: '1'},
            {label: 'That is so good', important: false, id: '2'},
            {label: 'I need a break...', important: false, id: '3'}
         ]
      }
      this.deleteItem = this.deleteItem.bind(this)
      this.addItem = this.addItem.bind(this)

      this.maxId = 4
   }

   deleteItem(id) {
      this.setState(({data}) => {
         const index = data.findIndex(elem => elem.id === id)

         const before = data.slice(0, index)
         const after = data.slice(index + 1)

         const newArr = [...before, ...after]

         return {
            data: newArr
         }
      })
   }

   addItem(body) {
      const newItem = {
         label: body,
         important: false,
         id: this.maxId++
      }
      this.setState(({data}) => {
         const newArr = [...data, newItem]
         return {
            data: newArr
         }
      })
   }

   render() {
      return (
         <StyledAppBlock>
            <AppHeader></AppHeader>
            <div className="search-panel d-flex">
               <SearchPanel></SearchPanel>
               <PostStatusFilter></PostStatusFilter>
            </div>
            <PostList 
            posts={this.state.data}
            onDelete={this.deleteItem}></PostList>
            <PostAddForm
            onAdd={this.addItem}></PostAddForm>
         </StyledAppBlock>
         
      )
   }
}



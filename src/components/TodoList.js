import React, { Component } from 'react';
import Item from './TotoItem';

class TodoList extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2>
                Hello from Todo list
                </h2>
                <Item/>
            </div>
         );
    }
}
 
export default TodoList;
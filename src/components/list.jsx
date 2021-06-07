import React from 'react';
import '../styles/list.css';

// component to add items on webpage

function List(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key} >
            <p>
                {/* the item.text is placed within an input element so that it can be edited even after its added to the list */}
                <input type="text"
                    id={item.key}
                    value={item.text}
                    onChange={
                        (e) => {
                            props.setUpdate(e.target.value, item.key)
                        }
                    } />
                <span> <button id="delete" onClick={() => props.deleteItem(item.key)}>-</button>
                </span></p>
        </div>
    })
    return (
        <div>{listItems}</div>
    )
}

export default List;
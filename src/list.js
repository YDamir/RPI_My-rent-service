import React from 'react';

function List({points, onListItemHover}) {
    const handleListItemHover = (evt) => {
      onListItemHover(evt.target.innerText);
    };
  
    return (
      <ul className="list">
        {
          points.map((point, index) => {
            const keyValue = `${index}-${point.title}`;
    
            return (
              <li
                className="list__item"
                key={keyValue}
                onMouseEnter={handleListItemHover}
              >
                {point.title}
              </li>
            );
          })
        }
      </ul>
    );
  }
  
  export default List;
import React from 'react';
import ColorContext from '../contexts/Color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const SelectColors = () => {
//   return (
//     <div>
//       <h2>색상을 선택하세요.</h2>
//       <ColorConsumer>
//         {({actions}) => (
//           <div style={{display:'flex'}}>
//             {colors.map(color => (
//               <div
//                 key={color}
//                 style={{
//                   background: color,
//                   width: '24px',
//                   height : '24px',
//                   cursor: 'pointer'
//                 }}
//                 onClick={() => actions.setColor(color)}
//                 onContextMenu={e => {
//                   e.preventDefault();
//                   actions.setSubcolor(color);
//                 }}
//               ></div>
//             ))}
//           </div>
//         )}
//       </ColorConsumer>
//       <hr/>
//     </div>
//   );
// };

class SelectColors extends Comment {
  static contextType = ColorContext;

  handleSetColor = color => {
    this.context.actions.setColor(color);
  };

  handleSetSubcolor = subcolor => {
    this.context.actions.setSubcolor(subcolor);
  };

  render () {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{display:'flex'}}>
          {colors.map(color => (
            <div
              key={color}
              style={{
                background: color,
                width: '24px',
                height : '24px',
                cursor: 'pointer'
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={e => {
                e.preventDefault();
                this.handleSetSubcolor(color);
              }}
            ></div>
          ))}
        </div>
        <hr/>
      </div>
    );
  }
}

export default SelectColors;
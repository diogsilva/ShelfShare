import React,{ useState }from 'react';
import "./Collapsible.css";
const Collapsible = (props) => {
    
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
      };
      
      return (
        <div>
        <button className='button' onClick={toggle}>{props.label}</button>
            {open &&
                
            <div className="conrent">{props.children}</div>
            //<div className="toggle">{Geners}</div>
            }
          
        </div>

      );
    
}
export default Collapsible;
import React,{ useState }from 'react';
import "./Collapsible.css";
import { Button } from '@mui/material';
const Collapsible = (props) => {
    
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
      };
      
      return (
        <div>
        <Button className='button' onClick={toggle}>{props.label}</Button>
            {open &&
                
            <div className="conrent">{props.children}</div>
            //<div className="toggle">{Geners}</div>
            }
          
        </div>

      );
    
}
export default Collapsible;
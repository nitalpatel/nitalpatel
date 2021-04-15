import react, {useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true); //creating "state"


    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);

//below the code is toggling and resizing the button !
    const showButton = () => {
        if(window.innerWidth <= 960) { // have to put less then or equal to because if not then it will get set AT 960!
     setButton(false);
   } else {
       setButton(true);
   }   
};

useEffect( () => {
   showButton()
}, []);

window.addEventListener('resize', showButton); //we have to invoke the code above with this line !

    return (
        <>
         <nav className="navbar">
             <div clssName="navbar-container">
               <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                 NP  <i className="fab fa-typo3" />
                
                 </Link> 
                 <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                       <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                          Home 
                       </Link>
                    </li> 
                    <li className='nav-item'>
                       <Link to='/education' className='nav-links' onClick={closeMobileMenu}>
                          Education 
                       </Link>
                    </li>
                    <li className='nav-item'>
                       <Link to='/bio' className='nav-links' onClick={closeMobileMenu}>
                          Bio
                       </Link>
                    </li>
                    <li className='nav-item'>
                       <Link to='/contact-information' className='nav-links-mobile' onClick={closeMobileMenu}>
                          Contact information
                       </Link>
                    </li>

                </ul>
                {button && <Button buttonStyle='btn--outline'>CONTACT INFORMATION</Button>}  
             </div>
         </nav>
        
        </>
    )
}


export default Navbar


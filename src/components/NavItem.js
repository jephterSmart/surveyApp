
import classes from './navItem.module.css';

const NavItem = (prop) => {
    const className = [classes.List]
    if(prop.active)  className.push(classes.active);
    
    return(
    <li className={className.join(' ')}
    onClick={prop.clickHandler}><a href={prop.link}>{prop.text}</a></li>
)} 
export default NavItem;
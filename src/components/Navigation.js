import {  useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import NavItem from "./NavItem";

import classes from './navigation.module.css';
import Hidden from "./UI/Hidden";
import Modal from "./UI/Modal";

const navList = [
    {id: 'home', text:'Home' , link:'#home',active:true},
    {id: 'survey', text:'Survey' , link:'#survey'},
    {id: 'response', text:'Response' , link:'#response'},
]

const Navigation = ({active}) => {
    const [list, setList] = useState(navList);
    const [popUp,setPopup] = useState(false);
    const clickHandler = (id) => () => {
        const newList = JSON.parse(JSON.stringify(list))
        newList.forEach(el => el.active = false);
        newList[list.findIndex(nav => nav.id === id)].active = true;
        setList(newList);
      
    }
    const status = useSelector(state => state.status);

    useEffect(() => {
        

        const newList = JSON.parse(JSON.stringify(list))
        newList.forEach(el => el.active = false);
        newList[list.findIndex(nav => nav.id === active)].active = true;
        setList(newList);
        if(status.done){
            newList[1].active = true;
            setList(newList);
        }
    },[active])
    return(
    <nav className={classes.Navigation}>
        <ul>
            {list.map(nav => {
            if(status.done && nav.text === "Survey") return <div style={{display:'hidden'}}></div>
            if(!status.done && nav.text === "Response") return <div style={{display:'hidden'}}></div>
            else return(
                <NavItem text={nav.text} clickHandler={clickHandler(nav.id)}
                link={nav.link} key={nav.id} active={nav.active} />)})} 
            
             
        </ul>
        <Hidden smUp>
            <div onClick ={() => setPopup(prev => !prev)}>
                {popUp ? (<>
                    <div className={classes.Cross}>
                    <span></span>
                    <span></span>
                </div>
                <Modal onClose={() => setPopup(prev => !prev)}>
                    <ul className={classes.Mobile}>
                        {list.map(nav => <NavItem text={nav.text} clickHandler={clickHandler(nav.id)}
                        link={nav.link} key={nav.id} active={nav.active} />)} 
                    </ul> 
                </Modal>
                </>) : (
                    <div className={classes.Hamburger} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                ) }
                

            </div>    
        </Hidden>       
    </nav>
)};

export default Navigation;
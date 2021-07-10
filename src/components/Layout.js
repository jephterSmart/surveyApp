import Navigation from "./Navigation";

import SinglePage from "./SinglePage/index";

import classes from './layout.module.css';
import { useCallback, useState } from "react";


const Layout = () => {
    
    const [currentSection,setCurrentSection] = useState('home');
    
    const callback = useCallback((entries, observer) => {
        entries.forEach(entry => {
           
            if(!entry.isIntersecting) return;
            if(entry.isIntersecting){
               
                setCurrentSection(entry.target.id);
                
            }
        })
      },[])
    return(
        <>
        <header className={classes.Header} >
            <div className={classes.Logo}><a href='#home' >Assessment</a></div>
            
                <Navigation active={currentSection} />

        </header>
        <main>
            <SinglePage callback={callback}/>
            
        </main>
        </>
    )
}

export default Layout;
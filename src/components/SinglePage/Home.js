

import classes from './home.module.css';



const HomeSection = ({rectRef,...rest}) => {
    const moveDown = () => {
       window.scrollTo(0,760);
    }
    return(
      
        <section id='home' className={classes.Section}  
        ref={rectRef} {...rest}>
        
        <h2>Vehicle Assessment</h2>
        <p> This is an assessment to check your technicallity about vehicle.
            You will be given questions and at the end of the survey, your result 
            will be shown to you. I wish you good luck!
        </p>
        <div className={classes.Scroll} onClick={moveDown}>Scroll Down</div>
    </section>
   
    
    )
}
export default HomeSection;
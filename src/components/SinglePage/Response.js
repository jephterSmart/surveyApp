
import { useSelector } from 'react-redux';
import classes from './survey.module.css';
import SimpleCard from '../UI/ResponseCard';

const ResponeSection = ({rectRef,...rest})  => {
    const status = useSelector(state => state.status);
    const response = useSelector(state => state.responseStore);
    const questions = Object.keys(response);
    

    // window.scrollTo(0,760);

    return(
        <section id='response' className={classes.Section}  
        ref={rectRef} {...rest}>
        {!status.done? null : (<>
            <h2>Survey Results</h2>
        <p>Thank you for filling in this survey or test, your result is:</p>
        <p className={classes.Score}><strong>{status.passed } / {status.total}</strong> which is 
         : <strong>{status.passed/status.total * 100 }%</strong></p>
         <h3>These are your results:</h3>
         <div>
            {
                questions.map(question => {
                    const selected = {...response[question]};
                    const correct_answer = selected.correct_answer;
                    delete selected.correct_answer ;
                    return(
                        <SimpleCard question={question} key={question}
                        selected={selected} correct={correct_answer}/>
                    ) 
                })
            }
         </div>
        </>)}
        
    </section>
    )
}
export default ResponeSection;
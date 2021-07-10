import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';

import classes from './survey.module.css';
import Card from '../UI/Card';

import { getQuestions,finishSurvey } from '../../store/reducers';

const Survey = ({rectRef,...rest}) => {

    const state = useSelector(state => state.initStore);
    const response = useSelector(state => state.responseStore);
    const status = useSelector(state => state.status)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getQuestions());
    },[])
    const formHandler = e => {
        e.preventDefault();
        let questions = Object.keys(response);
        
       let allQuestionsAnswered = questions.map( question=> {
            let answers = Object.keys(response[question]);
            //if number of answers got is 2, i.e the correct_answer key and any other
            //of our selected value.
            if(answers.length === 2){
                //check if it is equal to our correct_answer value
                if(response[question].correct_answer === answers[0] ||
                     response[question].correct_answer=== answers[1]){
                      
                        return {
                            question:"true"
                        }
                     }
                     else return{
                         question: "false"
                     }
                
            }
            else{
                //This is done in case the user, selected wrongly and reselected the right one
                let answerValues = Object.values(response[question]);
                //The finalRes will store only the arr in which all the key are true
             
                let finalRes = answerValues.filter(ans => ans === true);
                //since all our correct_answer is one value, if there are more than 1, then 
                // we've already reached a failed state.
               
                if(finalRes.length > 1){
                    return{
                        question:"false"
                    }
                }
                else{
                    return {question: "true"}
                }
            } 
           
           
        })
        console.log(allQuestionsAnswered)
        let gotRight = questions.filter((_,ind) => {
           
            if(allQuestionsAnswered[ind].question === "true")
            return true;

        })
        dispatch(finishSurvey({
            type:"PASSES",
            passed:gotRight.length,
            total: state.data.length,
            done: true
        }));
      
        
    }   
     return(
      
        <section id='survey' className={classes.Section}  
        ref={rectRef} {...rest}>
        {status.done? null : (<>
            <h2>Survey Questions</h2>
        <form onSubmit={formHandler}>
        {
            state.data?(
                state.data.map(mul => {
                   return <Card data={mul} key={mul.question}/>
                })
            ): 'Loading...'
        }
        <button type='submit' 
        className={classes.Submit}>Submit</button>
        </form>
        </>)}
        
    </section>
   
    
    )
}
export default Survey;
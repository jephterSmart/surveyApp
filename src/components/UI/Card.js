import Check from "./Check";
import { setAnswer} from '../../store/reducers'

import classes from './card.module.css';
import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import {shuffle} from '../../utils/shuffle';
import {decodeHtmlCharCodes} from '../../utils/decodeHtml';


const Card = ({data}) => {
    const dispatch = useDispatch();
    const answers = [data.correct_answer].concat(data.incorrect_answers);
   useEffect(()=> {
    
    shuffle(answers);
   },[])

   const checkHandler = useCallback( target => {
       
       dispatch(setAnswer({
        type: "ANSWER",
        group: target.name,
        answer:target.value,
        checked: target.checked,
        correct_answer: data.correct_answer
    }))
   },[data.correct_answer]);
   const question = decodeHtmlCharCodes(data.question);
    return(
        <div className={classes.Card}>
            
                
                <h3>{question}</h3>
                  <>
                      {answers.map(answer =><Check  question={question}
                      Label={answer} key={answer} callback={checkHandler} /> )}
                         
                 </>  
                   
             
        </div>
    )
}

export default Card;
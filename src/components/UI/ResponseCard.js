
import Check from './Check';
import classes from './response.module.css';

const simpleCard = ({question,selected,correct}) => {
    let answerSelected = {...selected};
    let answerArr = Object.keys(answerSelected);

    return(
        <div className={classes.Card}>
            <p>{question}</p>
            <div className={classes.Grid}>
                <div className={classes.Selected}>
                   <p>These are the one you selected: </p>
                   <ul>
                    {answerArr.map(select => {
                        if(answerSelected[select]) return(
                            <li key={select}>
                                <Check  Label={select} checked danger={correct !== select}/>
                            </li>
                            
                        )
                        else return(<li key={select} className={classes.margin}>{select}</li>)
                    })}
                    </ul> 
                </div>
                <div>
                    <p>This is the correct answer:</p>
                    <p className={classes.Result}><strong>{correct}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default simpleCard;
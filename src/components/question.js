import React, {Fragment, useState } from 'react';
import Error from './error';
import PropTypes from 'prop-types';

const Question = ({setBudget, setRemaining, setAskBudget}) => {

    //useState
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false); // No error at start

    //Read budget and set it
    const defineBudget = e => {           
        setAmount(parseInt(e.target.value))
    }

    // Function submit budget
    const addBudget = e => {
        e.preventDefault();

    //Validate
        if (amount < 1 || isNaN(amount)) { //Bigger than 1 or shouldn't be NaN
            setError(true);
            return;
        }


    //Afert validate
        setError(false);
        setBudget(amount);
        setRemaining(amount);
        setAskBudget(false); //seria que cuando se valide un presupuesto, setAskBudget pasa a false
    }


    return (  
        <Fragment>
            <h2>Add your budget</h2>

            { error ? <Error message="Budget requiered" /> : null}

            <form
                onSubmit={addBudget}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Type your budget"
                    onChange={defineBudget}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Set Budget"
                />
            </form>
        </Fragment>

    );
}
 
Question.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRemaining: PropTypes.func.isRequired,
    setAskBudget: PropTypes.func.isRequired
}

export default Question;
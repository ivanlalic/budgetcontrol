import React, {useState} from 'react'
import Error from './error';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const Form = ({setExpense, setCreateexpense}) => {

    //useState
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false);




    // When user add an expense
    const addExpense = e => {
        e.preventDefault();

        //Validate
        if (amount < 1 || isNaN(amount) || name.trim() === '') {
            setError(true)
            return;
        }
        setError(false);


        //Build expense
        const expense = {
            name,
            amount,
            id: shortid.generate()
        }
        
        //Pass expense to app.js
        setExpense(expense);
        setCreateexpense(true); //After expense created, set it to true
        
        //form reset
        setName('');
        setAmount(0);

    }



    return ( 
        <form
            onSubmit={addExpense}
        >
            <h2>Add your expenses</h2>

            {error ? <Error message="Add an expense and a value" /> : null}

            <div className="campo">
                <label>Expense</label>
                <input
                    type="text" 
                    className="u-full-width" 
                    placeholder="Commute"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Amount</label>
                <input
                    type="number" 
                    className="u-full-width" 
                    placeholder="$300"
                    value={amount}
                    onChange={e => setAmount(parseInt(e.target.value))}
                />
            </div>

            <input 
            type="submit"
            className="button-primary u-full-width"
            value="Add Expense"
            />
            
        </form>
     );
}
 
Form.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setCreateexpense: PropTypes.func.isRequired
}

export default Form;
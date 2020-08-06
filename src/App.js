import React, {useState, useEffect} from 'react';
import Question from './components/question';
import Form from './components/form';
import List from './components/list';
import BudgetControl from './components/BudgetControl';


function App() {

  //Define useState
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [askbudget, setAskBudget] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createexpense, setCreateexpense] =useState(false);

  //UseEffect updates remaining
  useEffect(()=> {
    
    if (createexpense) {
      setExpenses([
        ...expenses,
        expense
      ]);

      //Get remaining budget
      const remainingBudget = remaining - expense.amount;
      setRemaining(remainingBudget);
 
      //After it was executed , make it false again
      setCreateexpense(false); 
    }
  }, [createexpense, expense, expenses, remaining]);



  return (
    <div className="container">
      <header>
        <h1>Budget Control</h1>

        <div className="contenido-principal contenido">
          {askbudget ? 
          (              //Ternario para que se muestre la pregunta del budget si o no
            <Question                 // Pongo () para que sea un return;
              setBudget={setBudget}
              setRemaining={setRemaining}
              setAskBudget={setAskBudget}
            />
          ) : 
          (
            <div className="row">
            <div className="one-half column">
              <Form 
                setExpense={setExpense}
                setCreateexpense={setCreateexpense}
              />
            </div>

            <div className="one-half column">
              <List 
                expenses={expenses}
              />

              <BudgetControl 
                 budget={budget}
                 remaining={remaining}
              />
            
            </div>
          </div>
          )
          }

        </div>
      </header>
    </div>
  );
};

export default App;

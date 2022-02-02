import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props){
    

    const[filteredYear,setFilteredYear] = useState('2020');

        const filterChangeHandler = (selectedYear)=>{
            setFilteredYear(selectedYear);
            console.log(filteredYear)
        }
    return(

        <div>
           
            <Card className='expenses'>
            <ExpenseFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler}
            />

            {props.item.map((expense)=>(

                <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
                
            ))}
               
            </Card>
        </div>
    )
}
export default Expenses;
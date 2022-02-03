import React from 'react';
import moment from 'moment';
import './ExpenseDate.css';

function ExpenseDate(props) {

    const month = moment(props.date).format('MMMM');
    const year = moment(props.date).format('YYYY');
    const day = moment(props.date).format('Do');

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>

        </div>
    );
}

export default ExpenseDate;
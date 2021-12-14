import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');
  const selectedDateChangeHandler = (selectedDate) => {
    setFilteredYear(selectedDate);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onSelectedDateChange={selectedDateChangeHandler}
        />
        {props.items
          .filter((item) => item.date.getFullYear() === parseInt(filteredYear))
          .map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;

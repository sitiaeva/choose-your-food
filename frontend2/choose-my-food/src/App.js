import Dish from './components/Dish';
import GridSystem from './components/GridSystem';
import { useEffect, useState } from 'react';
import './App.css';
import axios  from 'axios';

function App() {
  const [dishes, setDishes] = useState([]);
  const fetchDishes = async () => {
    const { data } = await axios.get(
      "http://localhost:8000/food/?format=json"
    );
    const dishes = data;
    setDishes(dishes);
    console.log(dishes);
  };
  useEffect(() => {
    fetchDishes();
  }, []);

  // return (
  //   <div className="App">
      
  //     {dishes.map((dish) => (
  //       <Dish dish = {dish}></Dish>
  //       // <p >{dish.title}</p>        
  //     ))}
  //   </div>
  // );

  return (
    <div className='App'>
      {/* colCount is the number of columns for our grid system.
          md is a bootstrap breakpoint (will discuss breakpoints in the article)
      */}
      <GridSystem colCount={2} md={6}>
        {/* Here we are mapping every element to an <Item /> and pass props.
            map returns an array of JSX that the grid system will take as children.
        */}
        {dishes.map((dish) => (<Dish dish = {dish}></Dish>))}
      </GridSystem>
    </div>
  );
}

export default App;

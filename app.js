
// var Matcha = () => (
//   <ul>
//     <li>matcha</li>
//   </ul>
// );

// var Pizza = () => (
//   <ul>
//     <li>pizza</li>
//   </ul>
// );


var GroceryListItem = (props) => (
  <ul>
    <li>{props.groceryItems[0]}</li>
    <li>{props.groceryItems[1]}</li>
  </ul>
);

var GroceryList = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryListItem groceryItems={['matcha', 'pizza']}/>
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'))

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


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovers: false
    }
  }
  onListItemHover() {
    this.setState({
      hovers: !this.state.hovers
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hovers ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
}


var GroceryList = (props) => (
  <div>
    <h2>My Grocery List</h2>
    <ul>
      {props.groceryItem.map(groceryItem =>
        <GroceryListItem item={groceryItem}/>
        )}
    </ul>
  </div>
);

ReactDOM.render(<GroceryList groceryItem={['matcha', 'pizza']}/>, document.getElementById('app'))
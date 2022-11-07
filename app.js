
const { useState } = React;

const GroceryListItem = (props) => {

  const [isDone, setIsDone] = useState(false);

  const style = {
    fontWeight: isDone ? 'bold' : 'normal'
  };
  return (
    <li style={style}
      onMouseEnter={() => setIsDone(true)}
      onMouseLeave={() => setIsDone(false)}>
      {props.groceries}
    </li>
  );
};

const GroceryList = (props) => {

  const onListItemClick = (event) => {
    console.log('clicked bruh');
  };

  return (
    <ul>
      {props.groceries.map((grocery) => (
        <GroceryListItem groceries={grocery} />
      ))}
    </ul>
  );
}


const App = () => (
  <div>
    <h1>Grocery List</h1>
    <GroceryList groceries={['avocado', 'banana', 'protein powder']}/>
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"));
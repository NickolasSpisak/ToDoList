import { Component } from "react";
import { Button } from "reactstrap";
import TodoItems from "./todoItemsComponant";

class Quick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="todoListMain">
          <div className="header">
            <div className="row">
              <div className="col">
                <h1>Quick To Do List</h1>
                <form onSubmit={this.addItem}>
                  <input
                    ref={(a) => (this._inputElement = a)}
                    placeholder="enter quick task"
                  ></input>
                  <Button className="secondary" type="submit">
                    add
                  </Button>
                </form>
                <TodoItems
                  entries={this.state.items}
                  delete={this.deleteItem}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Quick;

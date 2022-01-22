import { Component } from "react";
import Quick from "./quickComponant";
import Detailed from "./detailedTaskComponant";
class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="todoListMain">
          <div className="header">
            <div className="row">
              <div className="col-7">
                <Quick />
              </div>
              <div className="col">
                <Detailed />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;

import { Component } from "react";
import {
  Button,
  ButtonGroup,
  Input,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

class Detailed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    this.setState({
      showModal: true,
    });
  }
  handleCloseModal() {
    this.setState({
      showModal: false,
    });
  }
  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  render() {
    return (
      <div className="container">
        <div className="todoListMain">
          <div className="header">
            <h1>Detailed To Do List</h1>

            <Button onClick={() => this.handleOpenModal()}>Create Item</Button>
          </div>
        </div>

        <Modal isOpen={this.state.showModal}>
          <ModalHeader toggle={this.handleCloseModal}>Create Item</ModalHeader>

          <ModalBody>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h3>Write Item Here</h3>
                  <Input
                    placeholder="Write something"
                    rows={5}
                    type="textarea"
                  />
                  <ButtonGroup>
                    <Card>
                      <Button
                        color="primary"
                        onClick={() => this.onRadioBtnClick(1)}
                        active={this.state.rSelected === 1}
                        value="Important"
                      >
                        Important
                      </Button>
                    </Card>
                    <Button
                      color="primary"
                      onClick={() => this.onRadioBtnClick(2)}
                      active={this.state.rSelected === 2}
                      value="Relaxed"
                    >
                      Relaxed
                    </Button>
                  </ButtonGroup>
                </div>
                <div className="col-6">
                  <h2>Due By</h2>
                  <Calendar />
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="align-self-left">
              <Button type="submit" className="secondary">
                Submit
              </Button>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default Detailed;

import React, { useState } from "react";
import FileBase from "react-file-base64";
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
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  TextField,
  Classes,
  Clear,
} from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

const Detailed = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  // const clear = () => {},
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
                <form
                  autoComplete="off"
                  noValidate
                  onClick={handleSubmit()}
                  // classname={`${classes.root} ${classes.form}`}
                >
                  <Typography variant="h6">Detailed To Do List</Typography>
                  <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    value={postData.creator}
                    onChange={(e) =>
                      setPostData({ ...postData, creator: e.target.value })
                    }
                  />
                  <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    value={postData.title}
                    onChange={(e) =>
                      setPostData({ ...postData, title: e.target.value })
                    }
                  />
                  <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    value={postData.message}
                    onChange={(e) =>
                      setPostData({ ...postData, message: e.target.value })
                    }
                  />
                  <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    value={postData.tags}
                    onChange={(e) =>
                      setPostData({ ...postData, tags: e.target.value })
                    }
                  />
                  <div>
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setPostData({ ...setPostData, selectedFile: base64 })
                      }
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="align-self-left">
            <Button
              // className={classes.buttonSubmit}
              varient="container"
              color="secondary"
              size="large"
              type="submit"
            >
              Submit
            </Button>
            <Button
              // className={classes.buttonSubmit}
              varient="contained"
              color="secondary"
              size="small"
              // onClick={clear}
            >
              Clear
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default Detailed;

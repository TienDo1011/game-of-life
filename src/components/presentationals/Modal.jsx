import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class ModalComponent extends Component {
  constructor() {
    super();
    this.addRecipe = this.addRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
  }
  
  addRecipe() {
    const recipeName = this.textInput.value;
    const ingredients = this.textAreaInput.value;
    this.props.addRecipe(recipeName, ingredients);
  }

  editRecipe() {
    const recipeName = this.textInput.value;
    const ingredients = this.textAreaInput.value;
    const id = this.props.id;
    this.props.editRecipe(id, recipeName, ingredients);
  }
  
  render() {
    const p = this.props;
    return (
      <div>
        <Modal show={p.showModal} onHide={p.close}>
          <Modal.Header closeButton>
            <Modal.Title>{p.header}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup>
              <ControlLabel>Recipe</ControlLabel>
              <FormControl
                type="text"
                ref={(input) => { this.textInput = input; }}
              >
                {this.props.title}
              </FormControl>
              <ControlLabel>Ingredients</ControlLabel>
              <FormControl
                type="textarea"
                ref={(input) => { this.textAreaInput = input; }}
              >
                {this.props.ingredients}
              </FormControl>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button
              bsStyle="primary"
              onClick={this.props.editRecipe ? this.editRecipe : this.addRecipe}
            >
              {this.props.editRecipe ? 'Edit' : 'Add'} recipe
            </Button>
            <Button bsStyle="dander" onClick={p.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.addRecipe = this.addRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      recipeTitle: this.props.title || '',
      recipeIngredients: this.props.ingredients || '',
    };
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

  handleChange(e) {
    this.setState({
      [e.target.type === 'text' ? 'recipeTitle' : 'recipeIngredients']: e.target.value,
    });
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
            <form>
              <FormGroup>
                <ControlLabel>Recipe</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.recipeTitle}
                  placeholder="Enter recipe name"
                  onChange={this.handleChange}
                  ref={(input) => { this.textInput = input; }}
                />
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl
                  type="textarea"
                  value={this.state.recipeIngredients}
                  placeholder="Enter recipe"
                  onChange={this.handleChange}
                  ref={(input) => { this.textAreaInput = input; }}
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              bsStyle="primary"
              onClick={this.props.editRecipe ? this.editRecipe : this.addRecipe}
            >
              {this.props.editRecipe ? 'Edit' : 'Add'} recipe
            </Button>
            <Button bsStyle="danger" onClick={p.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
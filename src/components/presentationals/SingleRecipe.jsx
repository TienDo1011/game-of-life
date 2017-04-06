import React, { Component } from 'react';
import { Button, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import ModalComponent from './Modal.jsx';

class SingleRecipe extends Component {
  constructor() {
    super();
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      showEditModel: false,
    };
  }

  deleteRecipe() {
    this.props.deleteRecipe(this.props.id);
  }

  editRecipe() {
    this.setState({
      showEditModel: true,
    });
  }

  closeModal() {
    this.setState({
      showEditModel: false,
    });
  }

  render() {
    const p = this.props;
    return (
      <div>
        <Panel collapsible header={p.title}>
          Ingredients
          <ListGroup fill>
            {p.ingredients.map((ingredient) => {
              return (
                <ListGroupItem>{ingredient}</ListGroupItem>
              );
            })}
          </ListGroup>
          <Button bsStyle="danger" onClick={this.deleteRecipe}>Delete</Button>
          <Button onClick={this.editRecipe}>Edit</Button>
        </Panel>
        <ModalComponent
          showModel={this.state.showEditModel}
          header="Edit Recipe"
          title={p.title}
          ingredients={p.ingredients}
          editRecipe={p.editRecipe}
          id={p.id}
          close={this.closeModal}
        />
      </div>
    );
  }
}

export default SingleRecipe;

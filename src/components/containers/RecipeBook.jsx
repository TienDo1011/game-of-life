import React, { Component } from "react";
import { Grid, Row, Col, PanelGroup, Button } from "react-bootstrap";
import ModalComponent from "../presentationals/Modal.jsx";
import SingleRecipe from "../presentationals/SingleRecipe.jsx";
import { connect } from "react-redux";
import {
  addRecipe,
  editRecipe,
  deleteRecipe
} from "../../actions/actionCreators";

class RecipeBook extends Component {
  constructor() {
    super();
    this.closeAddModal = this.closeAddModal.bind(this);
    this.showAddModal = this.showAddModal.bind(this);
    this.state = {
      showAddModal: false
    };
  }

  closeAddModal() {
    this.setState({
      showAddModal: false
    });
  }

  showAddModal() {
    this.setState({
      showAddModal: true
    });
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <PanelGroup accordion>
                {this.props.recipeBook.map((recipe, index) => {
                  return (
                    <SingleRecipe
                      key={index}
                      id={index}
                      title={recipe.title}
                      ingredients={recipe.ingredients}
                      editRecipe={this.props.editRecipe}
                      deleteRecipe={this.props.deleteRecipe}
                    />
                  );
                })}
              </PanelGroup>
              <Button bsStyle="success" onClick={this.showAddModal}>
                Add recipe
              </Button>
              <ModalComponent
                showModal={this.state.showAddModal}
                header="Add recipe"
                addRecipe={this.props.addRecipe}
                close={this.closeAddModal}
              />
              ;

            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipeBook: state
});

const mapDispatchToProps = dispatch => ({
  addRecipe: (title, ingredients) => dispatch(addRecipe(title, ingredients)),
  editRecipe: (id, title, ingredients) =>
    dispatch(editRecipe(id, title, ingredients)),
  deleteRecipe: id => dispatch(deleteRecipe(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBook);

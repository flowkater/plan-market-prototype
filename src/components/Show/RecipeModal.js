import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";
import { convertNewLineToBr } from 'helpers/stringConverter'

class RecipeModal extends Component {
    componentWillMount() {
        const { onGetRecipe, match } = this.props;
        onGetRecipe({recipeId: match.params.recipe_id})
    }

    render() {
        const { status, recipe } = this.props
        console.log(recipe);
        console.log(status);

        const modal = (
            status === "SUCCESS" ? (
                <Modal isOpen={recipe !== null}>
                    <ModalHeader>{recipe.name}</ModalHeader>
                    <ModalBody>
                        {convertNewLineToBr(recipe.description)}
                    </ModalBody>
                    <ModalFooter>
                        <Link to='/recipes'>
                            <Button color="secondary">닫기</Button>
                        </Link>
                    </ModalFooter>
                </Modal>
            ) : (<div></div>)
        )

        return (
            <div className="Recipe">
                {modal}
            </div>
        )
    }
}

export default RecipeModal;

import React, {Component} from "react";
import Card from "../Card/Card";

class CardList extends Component {
    render() {
        const cardComponent = this.props.data.map((user, i) => {
            return (
                //Unique key
                <Card key={i} id={this.props.data[i].id} email={this.props.data[i].email} name={this.props.data[i].name}/>
            )
        })
        return (
            <div>{cardComponent}</div>

        )
    }
}

export default CardList
import React, { Component } from 'react';

class Rating extends React.Component {
    state = {
        isHovered : false
    }
    handleHover =()=>{
        this.setState({ isHovered: true});
    }
    handleHoverOut =()=>{
        this.setState({ isHovered: false});
    }

    getClassName = () =>{
        const { isRated } = this.props;
        const { isHovered } = this.state;
        let className = isRated ? "bi bi-star-fill" : "bi bi-star";
        className += isHovered ? " text-primary" : "";
        return className; 

    }
    render() { 
        return( 
            <i 
                onMouseOver={this.handleHover}
                className={this.getClassName()}
                onMouseOut={this.handleHoverOut}
                onClick={()=> this.props.handleToggleRating(this.props.rank)}
                >
            </i>
        );
    }
}
 
export default Rating;



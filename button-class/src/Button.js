import React,{Component} from "react";

class Button extends React.Component{
render(){
    return(
        <div
            onClick = {this.props.onClick}
            className = "Button"
        >
            {this.props.value}
        </div>
        )
    }

}

export default Button
import React, { Component } from 'react'
import { TextArea, Button } from 'semantic-ui-react'

export default class ChatInput extends Component {

    state = { message: "", length: this.props.length }

    createMessage = () => {
        const { addMessage, username, length } = this.props;
        const message = {
            username, message: this.state.message, timestamp: Date.now()
        }
        console.log(message)
        addMessage(message)
        this.setState({message: "", length:length})
    }


    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }

    handleChange = event => {
        const message = event.target.value;
        this.setState({ message: message, length: this.props.length - message.length })
    }
    handleKeyUp = event => {
        if(event.key === "Enter") {
            this.createMessage()
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <TextArea 
                    onChange={this.handleChange}
                    value={this.state.message}
                    required 
                    maxLength={this.props.length} 
                    onKeyUp={this.handleKeyUp}/>
                <div className="info">
                {this.state.length}
                </div>
                <Button color="blue">
                    Send
                </Button>
            </form>
        )
    }
}

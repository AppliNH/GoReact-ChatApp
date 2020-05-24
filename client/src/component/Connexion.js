import React, { Component } from 'react';
import { Card, FormField, Input, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

export default class Connexion extends Component {

    constructor(props) {
        super(props);
        this.state = { username: "", goToChat: false, room: "" }
    }


    handleChange = event => {
        const username = event.target.value;
        this.setState({ username })
    }
    handleChange2 = event => {
        const room = event.target.value;
        this.setState({ room })
    }



    render() {
        if (this.state.goToChat) {
            return <Redirect push to={"/room/" + this.state.room + "/username/" + this.state.username}></Redirect>
        }
        return (
            <div className="connexionBox">
                <Card style={{ padding: 15 }}>
                    <form onSubmit={() => this.setState({ goToChat: true })} className="connexion">
                        <Input
                            onChange={this.handleChange} placeholder="Username" required type="text" />
                        <Input
                            onChange={this.handleChange2} placeholder="RoomID" required type="text" />
                        <Button style={{ marginTop: 10 }} color="blue">Go</Button>
                    </form>
                </Card>

            </div>
        )
    }
}

import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            who: 'World'
        }
    }

    updateToWorld = e => {
        this.setState({
            who: 'World'
        })
    }

    updateToFriend= e => {
        this.setState({
            who: 'Friend'
        })
    }

    updateToReact = e => {
        this.setState({
            who: 'React'
        })
    }

    render() {
        return(
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.updateToWorld}>World</button>
                <button onClick={this.updateToFriend}>Friend</button>
                <button onClick={this.updateToReact}>React</button>
            </div>
        )
    }
}

export default HelloWorld
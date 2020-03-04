import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            content: ''
            
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.counter()
              this.setState( {
                 content: this.alternateString()
              })
         }, 1000)
    }


    alternateString() {
        if(this.state.count >= 8) {
            clearInterval(this.interval)
            return 'Boom!!!!';
        } else if(this.state.count % 2 === 0) {
            return 'tick'
        } else  {
            return 'tock'
        }
    };

    counter(){
            this.setState({
                count: this.state.count +1,
            })
    }


    componentWillUnmount() {
        clearInterval(this.interval)
        }
    
    render() {
        return(
            <div>
                <p>{this.state.content}</p>
            </div>
        )
    }
}

export default Bomb
import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            chamber: null,
            spinningTheChamber: false
            
        }
    }
    componentDidMount() {
        this.timeout = setInterval(() => {
              this.setState( {
                 content: this.updater
              })
         }, 1000)
    }
    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (chamber === bulletInChamber) {
      return 'BANG!!!!!'
    } else {
      return 'you\'re safe!'
    }
  }
    
    updateContent = () => {
            this.setState({
                spinningTheChamber: true,
            });
            this.timeout = setTimeout(()=> {
                const randomChamber = Math.ceil(Math.random() * 8);
                this.setState({
                    chamber: randomChamber,
                    spinningTheChamber: false
                })
            }, 2000);
    }


    componentWillUnmount() {
        clearTimeout(this.timeout)
        }
    
    render() {
        return(
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.updateContent}>Pull the Trigger!</button>
            </div>
        )
    }
}

export default RouletteGun
import React from 'react';

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
    constructor(props) {
    super(props)
    this.state = {
        currentSectionIndex: null,
        
    }
}

    handleButtonClick(index) {
        console.log('handle button clicked', index)
        this.setState({ currentSectionIndex: index})

    }

    renderContent(index) {
        const currentSection = this.props.sections[this.state.currentSectionIndex]
        console.log('Rendering content here')
        return (
          <p className='content'>
            { this.state.currentSectionIndex === index && currentSection.content}
          </p>
        )
      }



    renderButtons() {
        return this.props.sections.map((section, index) => (
            <li >
                   <button key={index} onClick={()=> this.handleButtonClick(index)}>{section.title}
                        <div>
                       {this.renderContent(index)}
                       </div>
                    </button>
                   
           </li>
       ))
    }

    render() {
    
    return(
        <ul>
            {this.renderButtons()}
        </ul>
    )
}
}
export default Accordion 
import React from 'react'
import './qaDrop.css'

export default class qaDrop extends React.Component{
    constructor(props){
        super(props);
        this.state = {dropped : false};
        this.drop = this.drop.bind(this);
      }
    
      drop() {
        this.setState({ dropped: !this.state.dropped });
      }
    
      render() {
        return <div>
    
          <Dropper 
              dropped={this.state.dropped} 
              onmouseclick = {this.drop}
              
              > {this.props.children}
                  </Dropper>
    
        </div>;
      }
}


export class Question extends React.Component{
    render() {
      return <div className="question">{this.props.children}</div>;
    }
};
        
export class Answer extends React.Component{
  render() {
    return <div className="answer">{this.props.children}</div>;
  }
};

class Dropper extends React.Component{
  render() {
    return <div className="qa-container ">
      <div className={"dropper" + (this.props.dropped ? " dropped" : "")}>
        {this.props.children}
      </div>
    </div>;
  }
};


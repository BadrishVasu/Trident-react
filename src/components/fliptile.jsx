import './fliptile.css'
import React from 'react'

export class Front extends React.Component{
    render() {
      return <div className="front">{this.props.children}</div>;
    }
};
        
export class Back extends React.Component{
  render() {
    return <div className="back">{this.props.children}</div>;
  }
};

class Flipper extends React.Component{
  render() {
    return <div className={"flipper-container " + this.props.orientation}>
      <div className={"flipper" + (this.props.flipped ? " flipped" : "")}>
        {this.props.children}
      </div>
    </div>;
  }
};

class FlipTile extends React.Component{
  
  constructor(){
    state = {flipped : false}
  }

  flip() {
    this.setState({ flipped: !this.state.flipped });
  }

  render() {
    return <div>

      <Flipper 
          flipped={this.state.flipped} 
          orientation="horizontal" 
          onmouseenter = {this.flip()}
          onmouseleave = {this.flip()}
          
          > {this.props.children}
              </Flipper>

    </div>;
  }
}

export default FlipTile;

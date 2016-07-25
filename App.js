import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      X: 0,
      O: 1
     };
    this.update = this.update.bind(this)
    }
  update(){
    this.setState({val: this.state.val + 1 })
  }
  componentMarkX(){
    console.log('X')
  }
  render(){
    console.log('rendering!')
    return <button onClick={this.update}>{this.state.val}</button>
  }
  componentMarkO(){
    console.log('O')
  }
  componentWon(){
    console.log('You Won!')
  }
  componentLost(){
    console.log('You Lost!')
  }
}

class Wrapper extends React.Component {
  constructor(){
    super();
  }
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return (
      <div>
      <button onClick={this.mount.bind(this)}>x</button>
      <button onClick={this.unmount.bind(this)}>Unmount</button>
      <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper

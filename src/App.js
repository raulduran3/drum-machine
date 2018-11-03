import React, { Component } from 'react';
import './App.css';

const soundBank = [
  {
    keyCode: 81,
    key: 'Q',
    audioID: 'WorkIt',
    src: 'https://res.cloudinary.com/dmn2tgekp/video/upload/v1531042992/WorkIT.wav'
  },
  {
    keyCode: 87,
    key: 'W',
    audioID: 'Harder',
    src: 'https://res.cloudinary.com/dmn2tgekp/video/upload/v1531043397/Harder.wav'
  },
  {
    keyCode: 69,
    key: 'E',
    audioID: 'MakeIt',
    src: 'https://res.cloudinary.com/dmn2tgekp/video/upload/v1531042992/MakeIt.wav'
  },
  {
    keyCode: 65,
    key: 'A',
    audioID: 'Better',
    src: 'https://res.cloudinary.com/dmn2tgekp/video/upload/v1531043398/Better.wav'
  },
  {
    keyCode: 83,
    key: 'S',
    audioID: 'DoIt',
    src: 'https://res.cloudinary.com/dmn2tgekp/video/upload/v1531042992/DoIt.wav'
  },
  {
    keyCode: 68,
    key: 'D',
    audioID: 'Faster',
    src: 'https://res.cloudinary.com/dmn2tgekp/video/upload/v1531042991/Faster.wav'
  },
  {
    keyCode: 90,
    key: 'Z',
    audioID: 'MakesUs',
    src: 'https://res.cloudinary.com/dmn2tgekp/video/upload/v1531042991/MakesUs.wav'
  },
  {
    keyCode: 88,
    key: 'X',
    audioID: 'Stronger',
    src: 'https://res.cloudinary.com/dmn2tgekp/video/upload/v1531042993/Stronger.wav'
  },
  {
    keyCode: 67,
    key: 'C',
    audioID: 'Open-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }
]

class DrumButton extends React.Component{
  constructor(props){
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
     this.props.play(this.props.value,this.props.audioID);
     this.props.handleDisplay(this.props.audioID);
    }
  }

  handleClick = () => {
    this.props.play(this.props.value,this.props.audioID)
    this.props.handleDisplay(this.props.audioID)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  render(){
    return(
      <div className='pad' id={this.props.audioID}
      onClick={this.handleClick}>
      {this.props.value}
      <audio id={this.props.value} src={this.props.src} type="audio/mpeg" />
      </div>
    );
  }
}


class App extends React.Component{
  constructor(props){
    super(props);
    this.playSound = this.playSound.bind(this);
    this.state = {
      display: 'Click or Press a Key Bro'
    }
  }
  playSound = (val,audioID) => {
    const audio = document.getElementById(val);
    const button = document.getElementById(audioID);
    button.style.backgroundColor = '#6CD4FF';
    setTimeout(() => { button.style.backgroundColor = 'white';}, 100);
		audio.currentTime = 0;
    audio.play();
  }

  handleDisplay = display => this.setState({ display })

  render(){
    return (
      <div>
        <h1 className='title'>Drum Machine</h1>
        <div id="drum-machine">
          <p id="display">{this.state.display}</p>
          <div className='padContainer'>
          {soundBank.map((item)=>{
            return <DrumButton play={this.playSound} audioID={item.audioID}
            value={item.key} src={item.src} keyCode={item.keyCode} handleDisplay={this.handleDisplay}/>
          })}
          </div>
        </div>
				<footer>Raul Duran © 2018</footer>
      </div>
    );
  }
}

export default App;

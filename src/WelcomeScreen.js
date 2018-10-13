import React, { Component } from 'react';
import './App.css';
import img_elRapidAlertLogo7 from './images/RapidAlertBanner_elRapidAlertLogo7_961990.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class WelcomeScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButtonCopy = (ev) => {
    // Go to screen 'Create1'
    this.props.appActions.goToScreen('create1', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#f6f6f6',
        pointerEvents: 'none',
     };
    const style_rapidAlertLogo7 = {
        backgroundImage: 'url('+img_elRapidAlertLogo7+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_buttonCopy = {
        display: 'block',
        textAlign: 'center',
        textTransform: 'none',
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen WelcomeScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elRapidAlertLogo7' style={style_rapidAlertLogo7} />
            <Button className='actionFont elButtonCopy' style={style_buttonCopy}  variant="raised" color="accent" onClick={this.onClick_elButtonCopy} >
              {this.props.locStrings.welcome_button_543673}
            </Button>
          </div>
        </div>
      </div>
    )
  }
  

}

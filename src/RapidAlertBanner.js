import React, { Component } from 'react';
import './App.css';
import img_elRapidAlertLogo7 from './images/RapidAlertBanner_elRapidAlertLogo7_961990.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class RapidAlertBanner extends Component {

  // This component doesn't use any properties

  onClick_elButton = (ev) => {
    let newVal = "false";
    this.props.appActions.updateDataSlot('ds_userAcceptedContract', newVal);
  
    // Go to screen 'Welcome'
    this.props.appActions.goToScreen('welcome', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_button = {
        display: 'block',
        color: 'rgba(82, 114, 221, 0.8874)',
        textAlign: 'center',
        backgroundColor: 'transparent',
        textTransform: 'none',
        cursor: 'pointer',
     };
    const style_rapidAlertLogo7 = {
        backgroundImage: 'url('+img_elRapidAlertLogo7+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    
    return (
      <div className="RapidAlertBanner" style={baseStyle}>
        <div className="compContent">
          <Button className='actionFont elButton' style={style_button}  variant="flat" onClick={this.onClick_elButton} >
            {this.props.locStrings.fauxairbanner_button_552895}
          </Button>
          <div className='elRapidAlertLogo7' style={style_rapidAlertLogo7} />
        </div>
      </div>
    )
  }
  

}

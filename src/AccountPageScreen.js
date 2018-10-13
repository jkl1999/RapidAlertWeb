import React, { Component } from 'react';
import './App.css';
import RapidAlertBanner from './RapidAlertBanner';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class AccountPageScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton = (ev) => {
    // Go to screen 'Welcome'
    this.props.appActions.goToScreen('welcome', { transitionId: 'fadeIn' });
  
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
    const style_button = {
        display: 'block',
        textAlign: 'center',
        textTransform: 'none',
     };
    const style_button_outer = {
        cursor: 'pointer',
     };
    const style_text = {
        fontSize: 29.9,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen AccountPageScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='actionFont elButton' style={style_button_outer}>
            <Button style={style_button}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.accountpage_button_1012618}
            </Button>
          
          </div>
          
          <div className='elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.accountpage_text_393515}</div>
            </div>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='hasNestedComps elComp'>
              <RapidAlertBanner appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}

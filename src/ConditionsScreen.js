import React, { Component } from 'react';
import './App.css';
import DangerousGoodsCard from './DangerousGoodsCard';
import RapidAlertBanner from './RapidAlertBanner';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class ConditionsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, ds_userAcceptedContract

  onClick_elButtonContinue = (ev) => {
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
    const style_dangerousGoodsCard_outer = {
        boxShadow: '0.0px 2.0px 3px rgba(0, 0, 0, 0.3000)',
     };
    const style_buttonContinue = {
        display: 'block',
        textAlign: 'center',
        textTransform: 'none',
     };
    const style_buttonContinue_outer = {
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen ConditionsScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elDangerousGoodsCard' style={style_dangerousGoodsCard_outer}>
            <div>
              <DangerousGoodsCard ds_userAcceptedContract={this.props.ds_userAcceptedContract || "false"} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='actionFont elButtonContinue' style={style_buttonContinue_outer}>
            <Button style={style_buttonContinue}  disabled={this.props.ds_userAcceptedContract !== 'true'} color="accent" onClick={this.onClick_elButtonContinue} >
              {this.props.locStrings.screen3_button_585352}
            </Button>
          
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

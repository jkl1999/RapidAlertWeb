import React, { Component } from 'react';
import './App.css';
import RapidAlertBanner from './RapidAlertBanner';

// UI framework component imports
import Button from 'muicss/lib/react/button';

import { auth, storage, firestore } from './firebase';


export default class Create2Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
      fieldCopy: '',
      fieldCopy2: '',
      fieldCopy3: '',
    };
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }

  textInputChanged_fieldCopy = (event) => {
    this.setState({fieldCopy: event.target.value});
  }
  
  textInputChanged_fieldCopy2 = (event) => {
    this.setState({fieldCopy2: event.target.value});
  }
  
  textInputChanged_fieldCopy3 = (event) => {
    this.setState({fieldCopy3: event.target.value});
  }

  addSchoolInfo(){
      var db = firestore;

      var schoolName = this.state.fieldCopy3;
      var frCode = this.state.field;
      var tCode = this.state.fieldCopy;
      var studentCode = this.state.fieldCopy2;
      var userID = auth.currentUser.uid;

      var user = auth.currentUser;

  

      if(schoolName.length<3 || frCode.length<3 || tCode.length<3 || studentCode.length<3){
        alert('School Name and Codes must be a minimum of 3 characters')
        return;
      }

      db.collection("Admins").doc(userID).set({
        schoolName,
        frCode,
        tCode,
        studentCode
      })

      db.collection("schools").doc(schoolName).set({
        frCode,
        tCode,
        studentCode
      })


user.sendEmailVerification().then(function() {
  // Email sent.
  }).catch(function(error) {
  // An error happened.
  });

  alert("Email Verification Sent!")



  }
  
  onClick_elButton = (ev) => {
    // Go to screen 'Account Page'
    this.addSchoolInfo();
    this.props.appActions.goToScreen('accountpage', { ...this.props, transitionId: 'fadeIn' });
  
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
    const style_text = {
        fontSize: 21.4,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_field = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_button = {
        display: 'block',
        textAlign: 'center',
        textTransform: 'none',
     };
    const style_button_outer = {
        cursor: 'pointer',
     };
    const style_fieldCopy = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_fieldCopy2 = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_fieldCopy3 = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_textBlock = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    const style_textBlock2 = {
        fontSize: 21.4,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen Create2Screen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.create2_text_145661}</div>
            </div>
          
          </div>
          
          <div className='baseFont elField'>
            <input style={style_field} type="text" placeholder={this.props.locStrings.create2_field_929674} onChange={this.textInputChanged_field} defaultValue={this.state.field}  />
          
          </div>
          
          <div className='actionFont elButton' style={style_button_outer}>
            <Button style={style_button}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.create2_button_746337}
            </Button>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='hasNestedComps elComp'>
              <RapidAlertBanner appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <input className='baseFont elFieldCopy' style={style_fieldCopy} type="text" placeholder={this.props.locStrings.create2_field_404746} onChange={this.textInputChanged_fieldCopy} defaultValue={this.state.fieldCopy}  />
            <input className='baseFont elFieldCopy2' style={style_fieldCopy2} type="text" placeholder={this.props.locStrings.create2_field_1028162} onChange={this.textInputChanged_fieldCopy2} defaultValue={this.state.fieldCopy2}  />
            <input className='baseFont elFieldCopy3' style={style_fieldCopy3} type="text" placeholder={this.props.locStrings.create2_field_177318} onChange={this.textInputChanged_fieldCopy3} defaultValue={this.state.fieldCopy3}  />
            <div className='baseFont elTextBlock' style={style_textBlock}>
              <div>{this.props.locStrings.create2_textblock_771777}</div>
            </div>
            <div className='elTextBlock2' style={style_textBlock2}>
              <div>{this.props.locStrings.create2_textblock2_386788}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}

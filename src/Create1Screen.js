import React, { Component } from 'react';
import './App.css';
import RapidAlertBanner from './RapidAlertBanner';

// UI framework component imports
import Button from 'muicss/lib/react/button';

import { auth, storage, firestore } from './firebase';



export default class Create1Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
      field2: '',
      field3: '',
      
   
    };
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  textInputChanged_field2 = (event) => {
    this.setState({field2: event.target.value});
  }
  
  textInputChanged_field3 = (event) => {
    this.setState({field3: event.target.value});
  }

  signUp(){
         var email = this.state.field;
         var password = this.state.field2;
         var password2 = this.state.field3;
         


          if(password != password2){
          
            alert('passwords do not match, try again')
            return;
          
          }
          
         else if (email.length < 4) {
                alert('Please enter an email address.');
                return;
              }
        else if (password.length < 4) {
                alert('Please enter a password.');
                return;
              }
             
          
              // Sign in with email and pass.
              // [START createwithemail]
         else{    
          
            auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
              
              var errorCode = error.code;
              var errorMessage = error.message;
                      
            
              if (errorCode == 'auth/weak-password') {
                  alert('The password is too weak.');
                  return;
                }
              
              else {

               
                               
                                        
                }
                console.log(error);
                // [END_EXCLUDE]
              });

              }

              
              
            this.props.appActions.goToScreen('create2', { ...this.props, transitionId: 'fadeIn' });
           /**
             * Sends an email verification to the user.
             */
          }
          
         
    
            
           
         


  
  onClick_elButton = (ev) => {
    
     this.signUp();
     

  
    
  
    // Go to screen 'Create2'\


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
    const style_field = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_field2 = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_text2 = {
        fontSize: 15.0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text2_outer = {
        pointerEvents: 'none',
     };
    const style_field3 = {
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
    const style_text = {
        fontSize: 21.4,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const style_textBlock = {
        fontSize: 15.0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const style_textBlock2 = {
        fontSize: 15.0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen Create1Screen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elField'>
            <input style={style_field} type="text" placeholder={this.props.locStrings.create1_field_100566} onChange={this.textInputChanged_field} defaultValue={this.state.field}  />
          
          </div>
          
          <div className='baseFont elField2'>
            <input style={style_field2} type="password" placeholder={this.props.locStrings.create1_field2_275728} onChange={this.textInputChanged_field2} defaultValue={this.state.field2}  />
          
          </div>
          
          <div className='elText2' style={style_text2_outer}>
            <div style={style_text2}>
              <div>{this.props.locStrings.create1_text2_870847}</div>
            </div>
          
          </div>
          
          <div className='baseFont elField3'>
            <input style={style_field3} type="password" placeholder={this.props.locStrings.create1_field3_332408} onChange={this.textInputChanged_field3} defaultValue={this.state.field3}  />
          
          </div>
          
          <div className='actionFont elButton' style={style_button_outer}>
            <Button style={style_button}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.create1_button_205126}
            </Button>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='hasNestedComps elComp'>
              <RapidAlertBanner appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='elText' style={style_text}>
              <div>{this.props.locStrings.create1_text_784733}</div>
            </div>
            <div className='elTextBlock' style={style_textBlock}>
              <div>{this.props.locStrings.create1_textblock_120592}</div>
            </div>
            <div className='elTextBlock2' style={style_textBlock2}>
              <div>{this.props.locStrings.create1_textblock2_559765}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}

import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Checkbox from 'muicss/lib/react/checkbox';


export default class DangerousGoodsCard extends Component {

  // Properties used by this component:
  // ds_userAcceptedContract

  constructor(props) {
    super(props);
    
    this.state = {
      checkbox: this.props.ds_userAcceptedContract,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({checkbox: nextProps.ds_userAcceptedContract});  // cached in component state because a parent might want to read this value (e.g. to collect a form's data)
  }

  checkboxChanged_checkbox = (event) => {
    this.props.appActions.updateDataSlot("ds_userAcceptedContract", (event.target.checked ? 'true' : 'false'));
  }
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_card = {
        width: '100%',
        height: '100%',
     };
    const style_card_outer = {
        backgroundColor: 'white',
        pointerEvents: 'none',
     };
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy = {
        fontSize: 14.6,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
     };
    const style_textCopy_outer = {
        pointerEvents: 'none',
     };
    let checked_checkbox = this.state.checkbox;
    
    
    return (
      <div className="DangerousGoodsCard" style={baseStyle}>
        <div className="background">
          <div className='cardBg containerMinHeight elCard' style={style_card_outer}>
            <div style={style_card} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='baseFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.dangerousgoodscard_text_985228.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
          <div className='elTextCopy' style={style_textCopy_outer}>
            <div style={style_textCopy}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.dangerousgoodscard_textcopy_625669.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
          <div className='baseFont elCheckbox'>
            <Checkbox label={this.props.locStrings.dangerousgoodscard_checkbox_324660} onChange={this.checkboxChanged_checkbox} checked={checked_checkbox === 'true' || checked_checkbox === true || ''+checked_checkbox === '1'}  />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}

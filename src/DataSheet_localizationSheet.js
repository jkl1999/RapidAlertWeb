import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "screen2_button_394080";
    item['en'] = "Log In";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_button_585352";
    item['en'] = "Continue";
    
    item = {};
    this.items.push(item);
    item['key'] = "fauxairbanner_button_552895";
    item['en'] = "Cancel ";
    
    item = {};
    this.items.push(item);
    item['key'] = "dangerousgoodscard_text_985228";
    item['en'] = "Welcome to RapidAlert!\nBefore creating an Account for your school, please read these terms carefully and select “I accept”.";
    
    item = {};
    this.items.push(item);
    item['key'] = "dangerousgoodscard_checkbox_324660";
    item['en'] = "I accept these terms and conditions";
    
    item = {};
    this.items.push(item);
    item['key'] = "dangerousgoodscard_textcopy_625669";
    item['en'] = "Put Legal Things Here\n\n\n\n\n\n\n\n\n";
    
    item = {};
    this.items.push(item);
    item['key'] = "selectreservation_textblock_390860";
    item['en'] = "Passport";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_textblock_1001875";
    item['en'] = "Passport";
    
    item = {};
    this.items.push(item);
    item['key'] = "passport2_textblock_147922";
    item['en'] = "Reservation code";
    
    item = {};
    this.items.push(item);
    item['key'] = "passport3_textblock_147068";
    item['en'] = "QR Code";
    
    item = {};
    this.items.push(item);
    item['key'] = "selectreservation_text_309546";
    item['en'] = "Please select how you’d like to check in:";
    
    item = {};
    this.items.push(item);
    item['key'] = "selectreservation2_text_292247";
    item['en'] = "Please select how you’d like to check in:";
    
    item = {};
    this.items.push(item);
    item['key'] = "selectresdone_textblock_1022453";
    item['en'] = "This demo ends here.\n\nThanks for attempting to fly with FauxAir!";
    
    item = {};
    this.items.push(item);
    item['key'] = "selectresdone_button_765532";
    item['en'] = "Back to start";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_text_825962";
    item['en'] = "Note: this demo app is for an airport check-in console, so it’s not intended to be viewed on phones.";
    
    item = {};
    this.items.push(item);
    item['key'] = "welcome_button_543673";
    item['en'] = "Create New Account";
    
    item = {};
    this.items.push(item);
    item['key'] = "createaccount_text_510512";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "createaccount_button_268359";
    item['en'] = "Log In";
    
    item = {};
    this.items.push(item);
    item['key'] = "createaccount_textblock_447207";
    item['en'] = "Step 1: Enter Email and Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_textblock_270925";
    item['en'] = "Step 1: Enter Email and Create Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_field_524754";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_field_87372";
    item['en'] = "Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_field_353675";
    item['en'] = "Confirm Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_textblock2_292613";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_textblock3_78073";
    item['en'] = "Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_textblock4_811363";
    item['en'] = "Confirm Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_button_806653";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_field_196490";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_field_781638";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_text_145661";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_field_674300";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_fieldcopy_872816";
    item['en'] = "Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_fieldcopy2_697174";
    item['en'] = "Confirm Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_textblock2_834463";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_textblock3_129786";
    item['en'] = "Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_textblock4_457137";
    item['en'] = "Confirm Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_field_929674";
    item['en'] = "FIrst Responder Code";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_field_404746";
    item['en'] = "Teacher Code";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_field_1028162";
    item['en'] = "Student Code";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_field_177318";
    item['en'] = "School Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_text2_496522";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_textblock_771777";
    item['en'] = "The codes you create will be used by the corresponding users in your district when they create there own accounts.";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_button_746337";
    item['en'] = "Finish Set Up";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_field_841522";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_fieldcopy_780226";
    item['en'] = "Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_textblock3_553707";
    item['en'] = "Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text_1033933";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button_339679";
    item['en'] = "Sign In";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text2_988423";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text2_103761";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "password";
    item['en'] = "Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "email";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "Email";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "Password";
    item['en'] = "Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "Confirm Password";
    item['en'] = "Confirm Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_fieldcopy2_1014125";
    item['en'] = "Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_textblock4_428205";
    item['en'] = "Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_text_784733";
    item['en'] = "Step 1: Enter Email and Create Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_textblock_120592";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_field_100566";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_textblock2_715469";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_text_828843";
    item['en'] = "Step 2: Enter School Information and Create Sign Up Codes";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_field_155484";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_textblock_33049";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_textblock2_559765";
    item['en'] = "Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_field2_275728";
    item['en'] = "Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_text2_870847";
    item['en'] = "Confirm Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_field3_332408";
    item['en'] = "Confirm Password";
    
    item = {};
    this.items.push(item);
    item['key'] = "create1_button_205126";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_text2_512454";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_text2_945803";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "create2_textblock2_386788";
    item['en'] = "Step 2: Enter School Information and Create Sign Up Codes";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountpage_textblock_948786";
    item['en'] = "Account Information";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountpage_button_1012618";
    item['en'] = "Log Out";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountpage_textblock2_701140";
    item['en'] = "School Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountpage_textblock3_840870";
    item['en'] = "School name Here";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountpage_textblock2_937159";
    item['en'] = "Firs Responder Code";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountpage_textblock3_466565";
    item['en'] = "FR code here";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountpage_textblockcopy_78454";
    item['en'] = "Teacher Code";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountpage_textblockcopy2_820180";
    item['en'] = "T  code here";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountpage_textblockcopy3_352725";
    item['en'] = "Student Code";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountpage_textblockcopy4_515452";
    item['en'] = "S code here";
    
    item = {};
    this.items.push(item);
    item['key'] = "accountpage_text_393515";
    item['en'] = "Account Created!";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}

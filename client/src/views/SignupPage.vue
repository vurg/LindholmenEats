<template>
  <div>
    <LoginSignupModal id="signupModal"/>
    <div id="signupContainer">
      <LoginSignupInputForm>
        <LoginSignupFormHeader selected="signup"/>
        <div id="inputSignupEmailPassDetailsContainer" v-show="views.isInputSignupEmailPassDetails">
          <LoginSignupTextInput type="email" placeholder="Email" margin="extraExtraSmallAllAroundMargin" @validateAfterLoseFocus="validate($event, 'email')"/>
          <InvalidPrompt ref="notValidEmailFormatPrompt" invalidText="Not a Valid Email Format"/>
          <LoginSignupTextInput ref="upperPasswordInput" type="password" placeholder="Password" margin="extraExtraSmallAllAroundMargin" @validateAfterLoseFocus="validate($event, 'password')"/>
          <InvalidPrompt ref="passwordFailMeetReqPrompt" invalidText="Password Must Have: Length of 6, 1 Special Character & 1 Digit, Max Pass Length 30"/>
          <PasswordStrengthChecker ref="passwordStrengthChecker" margin="extraExtraSmallAllAroundMargin"/>
          <LoginSignupTextInput ref="lowerPasswordInput" type="password" placeholder="Confirm Password" margin="extraExtraSmallAllAroundMargin" @validateAfterLoseFocus="validate($event, 'matchingPassword')"/>
          <InvalidPrompt ref="passwordsDontMatchPrompt" invalidText="Passwords Do Not Match"/>
        </div>
        <div v-show="views.isAcceptConditions">
          <div id="conditionsHeaderBoxAndScroll">
            <div id="conditionsHeader">{{ isTermsAndConditions ? 'Terms and Conditions' : 'Privacy Policy'}}</div>
            <div id="scrollAndBox">
              <div ref="conditionsBox" id="conditionsBox" @scroll="checkScroll">
                <div v-show="isTermsAndConditions">
                  <h3>Welcome to LindholmenEat!</h3>
                  <h4>We strive to provide you with a delightful dining experience, and by visiting our establishment or ordering from us, you agree to abide by the following terms and conditions:</h4>
                  <p>Service Charges: A discretionary service charge may be added to your bill for the convenience of our patrons. This charge is not mandatory, and tipping is at your discretion.</p>
                  <p>Dress Code: Please adhere to our dress code, which is smart-casual attire. We reserve the right to refuse entry to guests not in compliance with our dress code.</p>
                  <p>Allergies and Dietary Restrictions: While we make every effort to accommodate allergies and dietary restrictions, please inform your server in advance. We cannot guarantee an allergen-free environment.</p>
                  <p>Lost or Stolen Items: LindholmenEats is not responsible for lost or stolen personal items. Please keep your belongings secure.</p>
                  <p>Behavior: We expect all guests to behave respectfully towards our staff and fellow diners. Disruptive or inappropriate behavior may result in removal from the premises.</p>
                  <p>Menu Changes: Our menu is subject to change, and availability may vary. Prices are subject to change without notice.</p>
                  <p>Liability: LindholmenEats is not liable for any accidents, injuries, or loss of personal property that may occur on our premises.</p>
                  <p>Dispute Resolution: Any disputes or concerns should be brought to our attention immediately to allow us the opportunity to address them. In the event of legal disputes, jurisdiction will be determined by local laws.</p>
                  <p>Thank you for choosing LindholmenEats. We look forward to serving you and hope you have a wonderful dining experience with us. Please feel free to reach out to our staff if you have any questions or require further clarification on these terms and conditions.</p>
                </div>
                <div v-show="inPrivacyPolicy">
                  <h3>Privacy Policy for LindholmenEats</h3>
                  <h4>At LindholmenEats, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our establishment or order from us. By engaging with our services, you agree to the terms of this policy.</h4>
                  <p>1. Information We Collect</p>
                  <p>We may collect personal information, such as your name, contact details, and reservation preferences, when you make a reservation, dine at our restaurant, or place an order. We do so to provide you with the best dining experience possible.</p>
                  <p>2. Use of Personal Information</p>
                  <p>We use the collected information for the following purposes:</p>
                  <ul>
                    <li>
                      To provide dining services and process orders.
                    </li>
                    <li>
                      To communicate with you about your reservation or order.
                    </li>
                    <li>
                      To improve our services, including menu offerings and customer experience.
                    </li>
                    <li>
                      To address any allergies, dietary restrictions, or special requests.
                    </li>
                  </ul>
                  <p>3. Data Security</p>
                  <p>We take data security seriously and employ appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</p>
                  <p>4. Cookies and Tracking</p>
                  <p>Our website may use cookies to enhance your browsing experience. You can adjust your browser settings to manage cookies or opt out of tracking.</p>
                  <p>5. Changes to Privacy Policy</p>
                  <p>We may update this Privacy Policy to reflect changes in our practices or legal requirements. Any updates will be posted on our website.</p>
                  <p>6. Contact Us</p>
                  <h5>If you have any questions or concerns regarding your privacy or this Privacy Policy, please contact us at contact@support.lindholmeneats.dne, We are here to address your inquiries promptly.</h5>
                  <h5>By engaging with LindholmenEats, you acknowledge that you have read and understood this Privacy Policy. We value your trust and are committed to safeguarding your personal information as we strive to provide you with a delightful dining experience.</h5>
                  <h5>Thank you for choosing LindholmenEats, and we look forward to serving you.</h5>
                </div>
              </div>
              <div ref="conditionsScroll" id="conditionsScroll">
              <font-awesome-icon ref="conditionsScrollUp" :class="inPrivacyPolicy ? 'inPrivacyPolicy' : 'nonNavigationalConditionsArrow'" icon="fa-solid fa-chevron-right" size="2xl" rotation=270 @click="evaluateScrollBoxArrowClick('up')"/>
                <font-awesome-icon ref="conditionsScrollDown" :class="hasReadTermsAndConditions ? 'isReadTermsAndConditions' : 'nonNavigationalConditionsArrow'" icon="fa-solid fa-chevron-right" size="2xl" rotation=90 @click="evaluateScrollBoxArrowClick('down')"/>
              </div>
            </div>
          </div>
        </div>
        <div v-show="views.isInputPersInfo">
          <div id="signupUserPersDetsInputContainer">
            <div id="firstLastNameInputContainer">
              <div>
                <LoginSignupTextInput id="firstNameSignupInput" type="text" placeholder="Firstname" @validateAfterLoseFocus="validate($event, 'letterString')"/>
                <InvalidPrompt ref="invalidFirstNamePrompt" invalidText="Unsupported Firstname" :haveInvalidPromptWrapper="true"/>
              </div>
              <div>
                <LoginSignupTextInput id="lastNameSignupInput" type="text" placeholder="Lastname" @validateAfterLoseFocus="validate($event, 'letterString')"/>
                <InvalidPrompt ref="invalidLastNamePrompt" invalidText="Unsupported Lastname" :haveInvalidPromptWrapper="true"/>
              </div>
            </div>
            <div id="dateOfBirthInputContainer">
              <div>
                <LoginSignupTextInput type="text" placeholder="DOB-YEAR: YYYY" @validateAfterLoseFocus="validate($event, 'dobYYYY')"/>
                <InvalidPrompt ref="invalidYearPrompt" invalidText="Invalid Year" :haveInvalidPromptWrapper="true"/>
              </div>
              <div>
                <LoginSignupTextInput type="text" placeholder="DOB-MONTH: MM" @validateAfterLoseFocus="validate($event, 'dobMM')"/>
                <InvalidPrompt ref="invalidMonthPrompt" invalidText="Invalid Month" :haveInvalidPromptWrapper="true"/>
              </div>
              <div>
                <LoginSignupTextInput type="text" placeholder="DOB-DAY: DD" @validateAfterLoseFocus="validate($event, 'dobDD')"/>
                <InvalidPrompt ref="invalidDayPrompt" invalidText="Invalid Day" :haveInvalidPromptWrapper="true"/>
              </div>
            </div>
            <div id="phoneNumberInputContainer">
              <div>
                <div id="countryCodeInputContainer">
                  <div ref="countryCodeFlag" v-show="hasCC" id="countryCodeflag">
                  {{ flag }}
                  </div>
                  <div id="countryCodePlus">
                  +
                  </div>
                  <LoginSignupTextInput ref="ccSignupInput" id="ccSignupInput" @inputChange="setHasCC" type="text" placeholder="CC" width="thirdOfParent"/>
                </div>
                <InvalidPrompt ref="invalidCCPrompt" invalidText="Country Code Does Not Exist" padding="smallPaddingLeft" :haveInvalidPromptWrapper="true"/>
              </div>
              <div>
                <LoginSignupTextInput id="phoneNumberSignupInput" type="text" placeholder="Phone Number" @validateAfterLoseFocus="validate($event, 'numberString')"/>
                <InvalidPrompt ref="invalidPhoneNumberPrompt" invalidText="Invalid Phone Number" :haveInvalidPromptWrapper="true"/>
              </div>
            </div>
            <div id="streetAddressInputContainer">
              <div>
                <LoginSignupTextInput id="streetAddressNameSignupInput" type="text" placeholder="Street Address Name" @validateAfterLoseFocus="validate($event, 'letterString')"/>
                <InvalidPrompt ref="invalidStreetAddressNamePrompt" invalidText="Invalid Street Name" :haveInvalidPromptWrapper="true"/>
              </div>
              <div>
                <LoginSignupTextInput id="streetAddressNumberSignupInput" type="text" placeholder="Street Address Nr" @validateAfterLoseFocus="validate($event, 'numberString')"/>
                <InvalidPrompt ref="invalidStreetAddressNumberPrompt" invalidText="Invalid Street Number" :haveInvalidPromptWrapper="true"/>
              </div>
            </div>
          </div>
        </div>
        <div v-show="views.isEnterPaymentDetails">
          <div id="signupPaymentInputContainer">
            <div v-if="!dropDownSelected">None Selected</div>
              <div id="bankCardImageContainer" v-else>
                <img v-show="dropDownSelected === 'Koala'" src="../assets/images/bankcard-koala.png" alt="Koala Bankcard Image">
                <img v-show="dropDownSelected === 'Sierra'" src="../assets/images/bankcard-sierra.png" alt="Sierra Bankcard Image">
                <img v-show="dropDownSelected === 'HueB'" src="../assets/images/bankcard-hueb.png" alt="HueB Bankcard Image">
              </div>
              <select @change ="setDropdownSelected" name="cardTypeDropdown" ref="cardTypeDropdown" id="cardTypeDropdown">
                <option value="" disabled selected >Choose Bankcard Type</option>
                <option value="Koala" >Koala</option>
                <option value="Sierra" >Sierra</option>
                <option value="HueB" >HueB</option>
              </select>
              <div id="bankCardNumberInputContainer">
                <div>
                  <LoginSignupTextInput ref="Koala" v-show="dropDownSelected === 'Koala'" type="text" placeholder="Card Number: 6 Digits" @validateAfterLoseFocus="validate($event, 'bankCardNumber')" @inputChange="formatBankCardInfo($event, 'Koala')"/>
                  <LoginSignupTextInput ref="Sierra" v-show="dropDownSelected === 'Sierra'" type="text" placeholder="Card Number: 8 Digits" @validateAfterLoseFocus="validate($event, 'bankCardNumber')" @inputChange="formatBankCardInfo($event, 'Sierra')"/>
                  <LoginSignupTextInput ref="HueB" v-show="dropDownSelected === 'HueB'" type="text" placeholder="Card Number: 10 Digits" @validateAfterLoseFocus="validate($event, 'bankCardNumber')" @inputChange="formatBankCardInfo($event, 'HueB')"/>
                  <InvalidPrompt ref="invalidBankCardLengthPrompt" invalidText="Invalid Input" :haveInvalidPromptWrapper="true"/>
                </div>
              </div>
              <div id="bankCardNumberExpiryInputContainer" v-show="dropDownSelected">
                <div>
                  <LoginSignupTextInput ref="expiryInput" type="text" placeholder="Expiry: MM/YY" @inputChange="formatBankCardInfo($event, 'expiry')" @validateAfterLoseFocus="validate($event, 'expiry')"/>
                    <InvalidPrompt ref="invalidExpiryDatePrompt" invalidText="Invalid Expiry Date" :haveInvalidPromptWrapper="true"/>
                </div>
                <div>
                  <LoginSignupTextInput type="text" placeholder="CVC" @validateAfterLoseFocus="validate($event, 'cvc')"/>
                  <InvalidPrompt ref="invalidCVCPrompt" invalidText="Invalid CVC" :haveInvalidPromptWrapper="true"/>
                </div>
              </div>
            </div>
            <div id="skipStep"><button>Skip Step</button></div>
          </div>
      <LoginSignupNextButton v-show="!(dropDownSelected === '' && currentView === 'isEnterPaymentDetails')" margin="extraExtraSmallAllAroundMargin" @dragOverEmit="evaluateValidationState" @clickEmit="changeScene"/>
      <InvalidPrompt ref="existsInvalidInput" :invalidText="inabilityToProceedReason" :haveInvalidPromptWrapper="true"/>
      </LoginSignupInputForm>
    </div>
  </div>
</template>

<script>

import LoginSignupModal from '../components/LoginSignupModal.vue'

import LoginSignupInputForm from '../components/LoginSignupInputForm.vue'

import LoginSignupFormHeader from '../components/LoginSignupFormHeader.vue'

import LoginSignupTextInput from '../components/LoginSignupTextInput.vue'

import PasswordStrengthChecker from '../components/PasswordStrengthChecker.vue'

import LoginSignupNextButton from '../components/LoginSignupNextButton.vue'

import InvalidPrompt from '../components/InvalidPrompt.vue'

export default {
  data() {
    return {
      formInputData: {
        isInputSignupEmailPassDetails: { email: '', password: '' },
        isInputPersInfo: { firstName: '', lastName: '', dobYYYY: '', dobbMM: '', dobDD: '', cc: '', phoneNumber: '', streetAddressName: '', streetAddressNumber: '' },
        isEnterPaymentDetails: { bankCardType: '', bankCardNumber: '', expiry: '', cvc: 0 }
      },
      nrOfExistingInvalidInputs: [],
      canContinue: false,
      inabilityToProceedReason: '',
      views: {
        isInputSignupEmailPassDetails: false,
        isAcceptConditions: false,
        isInputPersInfo: true,
        isEnterPaymentDetails: false
      },
      currentView: 'isInputPersInfo',
      isTermsAndConditions: true,
      hasReadTermsAndConditions: false,
      inPrivacyPolicy: false,
      hasReadPrivacyPolicy: false,
      hasCC: false,
      countryCode: '',
      flag: '',
      dropDownSelected: '',
      bankCardNumberLength: 0,
      hasMetBankCardNumberPointOfInflection: false,
      hasMetExpiryDataPointOfInflection: false
    }
  },
  methods: {

    validate(inputField, type) {
      let inputValue = inputField.currInput
      let isValidResult = true
      let flagObject = null
      const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
      const passLength6specialChar1digit1Regex = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])(?=.*\d).{6,30}$/
      const onlyLettersRegex = /^[a-zA-Z]{1,30}$/
      const onlyNumbersRegex = /^\d{1,30}$/
      const yyyyRegex = /^[0-9]{4}$/
      const mmRegex = /^(0[0-9]|1[0-2])$/
      const ddRegex = /^(0[1-9]|1[0-9]|2[0-9]|3[01])$/
      const koalaRegex = /^\d{6}$/
      const sierraRegex = /^\d{8}$/
      const huebRegex = /^\d{10}$/
      const expiryRegex = /^(0[1-9]|1[0-2])([0-9]{2})$/
      const cvcRegex = /^([0-9]{3})$/

      switch (type) {
        case 'email':
          isValidResult = emailRegex.test(inputValue)
          if (isValidResult) {
            this.$refs.notValidEmailFormatPrompt.showError = false
          } else {
            this.$refs.notValidEmailFormatPrompt.showError = true
          }
          break
        case 'password':
          isValidResult = passLength6specialChar1digit1Regex.test(inputValue)
          if (isValidResult) {
            this.$refs.passwordFailMeetReqPrompt.showError = false
            this.$refs.upperPasswordInput.isValidInputBox = true
            this.$refs.upperPasswordInput.isInvalidated = false
            this.nrOfExistingInvalidInputs.pop()
          } else {
            this.$refs.passwordFailMeetReqPrompt.showError = true
          }
          this.checkPasswordStrength(isValidResult, inputValue)
          this.checkIfTwoPasswordsMatch(isValidResult)
          break
        case 'matchingPassword':
          this.checkIfTwoPasswordsMatch(isValidResult)
          return
        case 'letterString':
          isValidResult = onlyLettersRegex.test(inputValue)
          if (isValidResult) {
            if (inputField.id === 'firstNameSignupInput') {
              this.$refs.invalidFirstNamePrompt.showError = false
            } else if (inputField.id === 'lastNameSignupInput') {
              this.$refs.invalidLastNamePrompt.showError = false
            } else {
              this.$refs.invalidStreetAddressNamePrompt.showError = false
            }
          } else {
            if (inputField.id === 'firstNameSignupInput') {
              this.$refs.invalidFirstNamePrompt.showError = true
            } else if (inputField.id === 'lastNameSignupInput') {
              this.$refs.invalidLastNamePrompt.showError = true
            } else {
              this.$refs.invalidStreetAddressNamePrompt.showError = true
            }
          }
          break
        case 'numberString':
          isValidResult = onlyNumbersRegex.test(inputValue)
          if (isValidResult) {
            if (inputField.id === 'phoneNumberSignupInput') {
              this.$refs.invalidPhoneNumberPrompt.showError = false
            } else {
              this.$refs.invalidStreetAddressNumberPrompt.showError = false
            }
          } else {
            if (inputField.id === 'phoneNumberSignupInput') {
              this.$refs.invalidPhoneNumberPrompt.showError = true
            } else {
              this.$refs.invalidStreetAddressNumberPrompt.showError = true
            }
          }
          break
        case 'dobYYYY':
          isValidResult = yyyyRegex.test(inputValue)
          if (isValidResult) {
            this.$refs.invalidYearPrompt.showError = false
          } else {
            this.$refs.invalidYearPrompt.showError = true
          }
          break
        case 'dobMM':
          isValidResult = mmRegex.test(inputValue)
          if (isValidResult) {
            this.$refs.invalidMonthPrompt.showError = false
          } else {
            this.$refs.invalidMonthPrompt.showError = true
          }
          break
        case 'dobDD':
          isValidResult = ddRegex.test(inputValue)
          if (isValidResult) {
            this.$refs.invalidDayPrompt.showError = false
          } else {
            this.$refs.invalidDayPrompt.showError = true
          }
          break
        case 'countryCode':
          flagObject = window.CountryList.findOneByDialCode(this.countryCode)
          if (!flagObject) {
            const div = this.$refs.countryCodeFlag
            div.innerHTML = '<div>NaN</div>'
            this.$refs.invalidCCPrompt.showError = true
            isValidResult = false
          } else {
            const flag = window.CountryFlagSvg[flagObject.code]
            const div = this.$refs.countryCodeFlag
            div.innerHTML = flag
            this.$refs.invalidCCPrompts.showError = false
            isValidResult = true
          }
          break
        case 'bankCardNumber':
          inputValue = this.deFormat(inputValue, 'bankCardNumber')
          if (this.dropDownSelected === 'Koala') {
            isValidResult = koalaRegex.test(inputValue)
          } else if (this.dropDownSelected === 'Sierra') {
            isValidResult = sierraRegex.test(inputValue)
          } else if (this.dropDownSelected === 'HueB') {
            isValidResult = huebRegex.test(inputValue)
          }
          if (isValidResult) {
            this.$refs.invalidBankCardLengthPrompt.showError = false
          } else {
            this.$refs.invalidBankCardLengthPrompt.showError = true
          }
          break
        case 'expiry':
          inputValue = this.deFormat(inputValue, 'expiry')
          console.log(inputValue)
          isValidResult = expiryRegex.test(inputValue)
          if (isValidResult) {
            this.$refs.invalidExpiryDatePrompt.showError = false
          } else {
            this.$refs.invalidExpiryDatePrompt.showError = true
          }
          break
        case 'cvc':
          isValidResult = cvcRegex.test(inputValue)
          if (isValidResult) {
            this.$refs.invalidCVCPrompt.showError = false
          } else {
            this.$refs.invalidCVCPrompt.showError = true
          }
          break
      }
      if (!isValidResult) {
        console.log(inputField)
        console.log(inputField.isInvalidated)
        if (!inputField.isInvalidated) {
          console.log('hhhh')
          this.nrOfExistingInvalidInputs.push(0)
          inputField.isValidInputBox = false
          inputField.isInvalidated = true
        }
      } else {
        if (inputField.isInvalidated) {
          this.nrOfExistingInvalidInputs.pop()
          inputField.isValidInputBox = true
          inputField.isInvalidated = false
        } else if (inputField.isInvalidated === null) {
          inputField.isValidInputBox = true
          inputField.isInvalidated = false
        }
      }
      console.log(this.nrOfExistingInvalidInputs.length)
    },
    checkPasswordStrength(isValidResult, inputValue) {
      if (!isValidResult) {
        this.$refs.passwordStrengthChecker.state = 'Weak'
      } else {
        const OneLowerCaseOneUpperCaseOneDigitOneSpecialCharEightLength = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{10,30}$/
        if (OneLowerCaseOneUpperCaseOneDigitOneSpecialCharEightLength.test(inputValue)) {
          this.$refs.passwordStrengthChecker.state = 'Strong'
          return
        }
        this.$refs.passwordStrengthChecker.state = 'Normal'
      }
    },
    checkIfTwoPasswordsMatch(isValidResult) {
      isValidResult = this.$refs.upperPasswordInput.currInput === this.$refs.lowerPasswordInput.currInput
      console.log(isValidResult)
      if (isValidResult) {
        if ((this.$refs.lowerPasswordInput.isInvalidated) && (!this.$refs.upperPasswordInput.isInvalidated)) {
          this.$refs.passwordsDontMatchPrompt.showError = false
          this.nrOfExistingInvalidInputs.pop()
          this.$refs.lowerPasswordInput.isInvalidated = false
          return
        }
      } else {
        if (!this.$refs.lowerPasswordInput.isInvalidated) {
          this.$refs.passwordsDontMatchPrompt.showError = true
          this.nrOfExistingInvalidInputs.push(0)
          this.$refs.lowerPasswordInput.isValidInputBox = false
          this.$refs.lowerPasswordInput.isInvalidated = true
        }
      }
      console.log(this.nrOfExistingInvalidInputs.length)
    },
    evaluateValidationState() {
      if (this.currentView === 'isInputSignupEmailPassDetails' || this.currentView === 'isInputPersInfo' || this.currentView === 'isEnterPaymentDetails') {
        if (this.nrOfExistingInvalidInputs.length > 0) {
          console.log(this.nrOfExistingInvalidInputs.length)
          this.$refs.existsInvalidInput.showError = true
          this.inabilityToProceedReason = 'Must Resolve Issues Before Continuing'
          this.setErrorDisplayTimeout()
        } else {
          const arrOfCurrentViewInputData = Object.values(this.formInputData[this.currentView])
          arrOfCurrentViewInputData.forEach((item) => {
            if (!item) {
              this.$refs.existsInvalidInput.showError = true
              this.inabilityToProceedReason = 'Please Fill in Remaining Input Fields'
              this.setErrorDisplayTimeout()
            } else {
              this.canContinue = true
            }
          })
        }
      } else if (this.currentView === 'isAcceptConditions') {
        if (!(this.hasReadTermsAndConditions && this.hasReadPrivacyPolicy)) {
          this.$refs.existsInvalidInput.showError = true
          this.inabilityToProceedReason = 'Must Read Terms and Conditions & Privacy Policy to Proceed'
          this.setErrorDisplayTimeout()
        } else {
          //  show continue prompt
        }
      }
    },
    setErrorDisplayTimeout() {
      setTimeout(() => {
        this.$refs.existsInvalidInput.showError = false
      }, 4000)
    },
    setHasCC(data) {
      this.countryCode = '+' + data
      if (data) {
        this.hasCC = true
      } else {
        this.hasCC = false
        this.$refs.ccSignupInput.isValidInputBox = false
        this.$refs.invalidCCPrompt.showError = true
      }
      if (this.countryCode.length >= 2) {
        this.validate(this.$refs.ccSignupInput, 'countryCode')
        console.log(this.nrOfExistingInvalidInputs.length)
      }
    },
    checkScroll() {
      const container = this.$refs.conditionsBox
      const scrollPositionDownFacing = container.scrollHeight - container.scrollTop - container.clientHeight
      if (scrollPositionDownFacing === 0) {
        if (!this.hasReadTermsAndConditions) {
          this.hasReadTermsAndConditions = !this.hasReadTermsAndConditions
        }
        if (this.inPrivacyPolicy) {
          this.hasReadPrivacyPolicy = !this.hasReadPrivacyPolicy
        }
      }
    },
    evaluateScrollBoxArrowClick(direction) {
      if (this.hasReadTermsAndConditions && direction === 'down' && !this.inPrivacyPolicy) {
        this.isTermsAndConditions = false
        this.inPrivacyPolicy = true
        console.log(this.$refs.conditionsScrollDown)
        this.$refs.conditionsScrollDown.classList.add('nonNavigationalConditionsArrow')
        this.$refs.conditionsScrollDown.classList.remove('isReadTermsAndConditions')
        this.$refs.conditionsBox.scrollTop = 0
      } else if (this.inPrivacyPolicy && direction === 'up') {
        this.isTermsAndConditions = true
        this.inPrivacyPolicy = false
        this.$refs.conditionsScrollDown.classList.add('isReadTermsAndConditions')
        this.$refs.conditionsScrollDown.classList.remove('nonNavigationalConditionsArrow')
        this.$refs.conditionsBox.scrollTop = 0
      }
    },
    setDropdownSelected() {
      const selectDropdown = this.$refs.cardTypeDropdown
      this.dropDownSelected = selectDropdown.value
      this.$refs.Koala.currInput = this.$refs.Sierra.currInput = this.$refs.HueB.currInput = ''
      this.hasMetBankCardNumberPointOfInflection = false
      if (this.dropDownSelected === 'Koala') {
        this.bankCardNumberLength = 6
      } else if (this.dropDownSelected === 'Sierra') {
        this.bankCardNumberLength = 8
      } else if (this.dropDownSelected === 'HueB') {
        this.bankCardNumberLength = 10
      }
      this.bankCardNumberMidPoint = (Math.floor(this.bankCardNumberLength / 2))
      this.$refs.invalidBankCardLengthPrompt.showError = false
    },
    formatBankCardInfo(inputData, type) {
      console.log(inputData)
      if (type === 'expiry') {
        if (inputData.length === 2 && !this.hasMetExpiryDataPointOfInflection) {
          inputData = inputData + '/'
          this.$refs.expiryInput.currInput = inputData
          this.hasMetExpiryDataPointOfInflection = true
        } else if (inputData.length === 2 && this.hasMetExpiryDataPointOfInflection) {
          inputData = inputData.substring(0, 1)
          this.$refs.expiryInput.currInput = inputData
          this.hasMetExpiryDataPointOfInflection = false
        }
      } else {
        console.log(this.bankCardNumberMidPoint)
        console.log(inputData.length)
        if (inputData.length === this.bankCardNumberMidPoint && !this.hasMetBankCardNumberPointOfInflection) {
          this.blankUp(inputData)
          console.log(inputData)
        } else if (inputData.length === this.bankCardNumberMidPoint && this.hasMetBankCardNumberPointOfInflection) {
          this.blankDown(inputData)
        }
      }
    },
    blankUp(inputData) {
      inputData = inputData + ' '
      console.log(this.dropDownSelected)
      this.$refs[this.dropDownSelected].currInput = inputData
      this.hasMetBankCardNumberPointOfInflection = true
    },
    blankDown(inputData) {
      inputData = inputData.substring(0, this.bankCardNumberMidPoint - 1)
      this.$refs[this.dropDownSelected].currInput = inputData
      this.hasMetBankCardNumberPointOfInflection = false
    },
    deFormat(inputValue, typeToReFormat) {
      console.log('deformat ' + inputValue)
      console.log(this.bankCardNumberMidPoint)
      console.log(this.bankCardNumberLength)
      if (typeToReFormat === 'bankCardNumber') {
        return inputValue.substring(0, this.bankCardNumberMidPoint) + inputValue.substring(this.bankCardNumberMidPoint + 1, this.bankCardNumberLength + 1)
      } else if (typeToReFormat === 'expiry') {
        return inputValue.substring(0, 2) + inputValue.substring(3, 5)
      }
    },
    changeScene() {}
  },
  components: { LoginSignupModal, LoginSignupInputForm, LoginSignupFormHeader, PasswordStrengthChecker, LoginSignupTextInput, LoginSignupNextButton, InvalidPrompt }
}

</script>

<style>

#signupModal {
  z-index: 2;
}

#signupContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

#inputSignupEmailPassDetailsContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#conditionsHeaderBoxAndScroll {
  text-align: center;
}

#conditionsHeader {
  margin-bottom: 0.5em;
  font-size: 2em;
}

#scrollAndBox {
  display: flex;
  justify-content: center;
  align-items: center;
}

#conditionsBox {
  border-style: double;
  border-color: rgb(0, 0, 0);
  padding: 3em 4em 2em 4em;
  background: rgba(245, 255, 254, 0.729);
  width: 50vw;
  height: 50vh;
  overflow: scroll;
  box-sizing: border-box;
}

#conditionsBox > div > * {
  margin-bottom: 1em;
}

#conditionsScroll {
  display: flex;
  flex-direction: column;
  padding-left: 1em;
}

.nonNavigationalConditionsArrow {
  color: rgba(140, 140, 140, 0.619);
}

.isReadTermsAndConditions, .inPrivacyPolicy {
  color: black;
}

#signupUserPersDetsInputContainer {
  padding: 2em 2em 0 2em;
  margin-top: 1em;
  background: rgba(240, 255, 225, 0.746);
  border-radius: 10%;
}

#signupUserPersDetsInputContainer > div {
  display: flex;
  justify-content: center;
  align-items: center;
}

#signupUserPersDetsInputContainer > div > * {
  margin: 0.2em;
}

#countryCodeInputContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#countryCodeInputContainer > * {
  margin: 0 0.2em 0 0.2em;
}

#countryCodeflag {
  text-align: center;
  width: 20%;
}

#countryCodePlus {
  font-size: 1.4em;
}

#signupPaymentInputContainer {
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 2em;
}

#bankCardImageContainer {
  text-align: center;
  background: rgba(237, 211, 42, 0.1);
}

#bankCardImageContainer > * {
  width: 15vw;
}

#cardTypeDropdown {
  padding: 1em 2em 1em 2em;
  background: rgba(255, 234, 193, 0.557);
  margin-top: 1em;
}

#bankCardNumberInputContainer > * > *{
  text-align: center;
}

#bankCardNumberExpiryInputContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

#bankCardNumberExpiryInputContainer > * > *{
  text-align: center;
}

#skipStep {
  display: flex;
  justify-content: flex-end;
}

.scrollAvailable {
  color: grey;
}

.scrollUnavailable {
  color: black;
}
</style>

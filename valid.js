var app = new Vue({
  el: "#valid",
  data: {
    memberid: '',
    phone_tw: '',
    phone_ch: '',
    insurance: '',
    checkid: '',
    test: '',
    maxlength: 2,
    email: ''
  },
  methods: {
    memberValidate(Id) {
      //驗證身分證格式
      let validate = /^[A-Za-z]{1}[1-2]{1}[0-9]{8}$/;
      if (validate.test(Id)) {
        return Id;
      } else {
        return false;
      }
    },
    phoneNumberTaiwanValidate(number) {
      //驗證手機號碼格式(台灣)
      let phonevalid = /^09\d{8}$/;
      if (phonevalid.test(number)) {
        return number;
      } else {
        return false;
      }
    },
    phoneNumberChinaValidate(number) {
      //驗證手機號碼格式(大陸 共11碼)
      let phonevalid = /^1[3-9](\d{9})$/;
      if (phonevalid.test(number)) {
        return number;
      } else {
        return false;
      }
    },
    insuranceValidate(Id) {
      //驗證保單序號格式
      let insurancevalid = /^[A-Za-z\d]{1}\d{9}$/;
      if (insurancevalid.test(Id)) {
        return Id;
      } else {
        return false;
      }
    },
    insuranceCheckValid(Id) {
      //驗證保單驗證碼格式
      let checkidvalid = /\d{2}/;

      if (checkidvalid.test(Id)) {
        return Id
      } else {
        return false;
      }
    },
    lengthCheck(getdata, max) {
      //檢查長度
      if (getdata.length <= max) {
        return true;
      } else {
        return false;
      }
    },
    emailValid() {
      let emailcheck = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      if (emailcheck.test(this.email)) {
        return this.email;
      } else {
        return false;
      }
    }
  },
  computed: {
    memberId() {
      return this.memberValidate(this.memberid);
    },
    phoneNumberTaiwan() {
      return this.phoneNumberTaiwanValidate(this.phone_tw);
    },
    phoneNumberChina() {
      return this.phoneNumberChinaValidate(this.phone_ch);
    },
    insuranceId() {
      return this.insuranceValidate(this.insurance);
    },
    insuranceCheckId() {
      if (this.lengthCheck(this.checkid, 2)) {
        return this.insuranceCheckValid(this.checkid);
      } else {
        this.checkid = String(this.checkid).slice(0, this.maxlength);
        return this.insuranceCheckValid(this.checkid);
      }
    },
    emailCheck(){
      return this.emailValid(this.email);
    }
  }
});
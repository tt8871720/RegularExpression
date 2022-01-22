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
		email: '',
		name: ''
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
		},
		nameValid() {
			const emoji = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
			const symbol = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
			let userName = this.name.replace(emoji, '');
			return userName
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
		emailCheck() {
			return this.emailValid(this.email);
		},
		userName() {
			return this.nameValid(this.name);
		}
	}
});
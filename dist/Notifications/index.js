"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

require("core-js/modules/es.promise.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.test.js");

var _react = _interopRequireWildcard(require("react"));

var _input = _interopRequireDefault(require("react-phone-number-input/input"));

var _reactPhoneNumberInput = require("react-phone-number-input");

var _toastifyJs = _interopRequireDefault(require("toastify-js"));

var _jquery = _interopRequireDefault(require("jquery"));

var _ClipLoader = _interopRequireDefault(require("react-spinners/ClipLoader"));

var _selfguardClient = _interopRequireDefault(require("selfguard-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Modal(_ref) {
  let {
    api_key,
    userAddress
  } = _ref;
  let sg = new _selfguardClient.default(api_key);
  /**
   * It sends a text message to the phone number that is passed in as a parameter.
   * @param key - The phone number to send the SMS to.
   */

  let sendSMS = async key => {
    await sg.sendSMS({
      address: key,
      text: "Hello, Thank you for signing up for notifications."
    });
  };
  /**
   * It sends an email to the address specified in the key parameter
   * @param key - the email address you want to send to
   */


  let sendEmail = async key => {
    await sg.sendEmail({
      address: key,
      from: "test@selfguard.xyz",
      fromName: "testFromName",
      replyTo: "test@selfguard.xyz",
      replyToName: "testReplyToName",
      subject: "testSubject",
      html: "testContent"
    });
  };

  let [loading, setLoading] = (0, _react.useState)(false);
  let [email, setEmail] = (0, _react.useState)(null);
  let [phone, setPhone] = (0, _react.useState)(null);
  const [requested, setRequested] = (0, _react.useState)(false);
  /* This is a React hook that is called when the component is mounted. It is used to fetch the user's
  profile from the SelfGuard API. */

  (0, _react.useEffect)(() => {
    async function fetchData() {
      let sg = new _selfguardClient.default(api_key); //get email

      try {
        let {
          email,
          phone
        } = await sg.get(userAddress + '-profile');
        setEmail(email);
        setPhone(phone);
      } catch (err) {
        console.log({
          err
        });
        setEmail(null);
        setPhone(null);
      }

      setRequested(true);
    }

    fetchData();
  }, [userAddress, api_key]);
  /**
   * It takes the email, phone, and userAddress from the state and dispatches an action to update the
   * profile
   */

  async function updateProfile() {
    setLoading(true);
    if (phone === undefined || phone === null) phone = '';
    if (!email) email = '';
    console.log({
      phone
    });

    if (!isValidEmail(email) && email !== "") {
      (0, _toastifyJs.default)({
        text: "Email is invalid",
        style: {
          background: "linear-gradient(to right, #dc3545, #dc3541"
        }
      }).showToast();
      setLoading(false);
      return;
    }

    if (phone !== "" && !(0, _reactPhoneNumberInput.isValidPhoneNumber)(phone)) {
      (0, _toastifyJs.default)({
        text: "Phone # is invalid",
        style: {
          background: "linear-gradient(to right, #dc3545, #dc3541"
        }
      }).showToast();
      setLoading(false);
      return;
    }

    await sg.put(userAddress + '-profile', {
      email,
      phone
    });
    sendSMS(userAddress);
    sendEmail(userAddress);
    setLoading(false);
    (0, _toastifyJs.default)({
      text: "Profile Updated",
      style: {
        background: "linear-gradient(to right, #198754, #198751"
      }
    }).showToast();
    (0, _jquery.default)('#closeModal').click();
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal fade",
    style: {
      margin: 0
    },
    tabIndex: "-1",
    id: 'notificationsModal'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-dialog modal-dialog-centered",
    style: {
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, requested && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    style: {
      width: '400px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "modal-title"
  }, "Set Up Notifications"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn-close",
    id: "closeModal",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3",
    style: {
      display: 'flex',
      textAlign: 'left',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    style: {
      fontSize: '25px',
      marginRight: '10px'
    },
    className: "bi bi-envelope"
  }), /*#__PURE__*/_react.default.createElement("input", {
    id: "email",
    onChange: e => {
      setEmail(e.target.value);
    },
    placeholder: "Email Address",
    className: "form-control",
    type: "email",
    style: {},
    value: email ? email : ''
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3",
    style: {
      display: 'flex',
      textAlign: 'left',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    style: {
      fontSize: '25px',
      marginRight: '10px'
    },
    className: "bi bi-telephone"
  }), /*#__PURE__*/_react.default.createElement(_input.default, {
    id: "phone",
    onChange: setPhone,
    className: "form-control",
    placeholder: "Phone Number",
    type: "tel",
    style: {},
    value: phone
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, !loading ? /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => updateProfile(),
    className: "btn btn-dark",
    style: {}
  }, " Submit ") : /*#__PURE__*/_react.default.createElement(_ClipLoader.default, null), /*#__PURE__*/_react.default.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://selfguard.xyz/home",
    style: {
      textDecoration: 'none',
      color: 'black',
      fontSize: '12px'
    },
    className: "mb-0 vertical"
  }, "Encrypted By", /*#__PURE__*/_react.default.createElement("img", {
    style: {
      marginLeft: '5px'
    },
    src: "/logo2.png",
    width: "15",
    height: "15",
    className: "d-inline-block",
    alt: ""
  }), "SelfGuard"))))))), /*#__PURE__*/_react.default.createElement("button", {
    onClick: showModal,
    style: {
      marginRight: '10px'
    },
    className: "btn ".concat(email || phone ? "btn-success" : "btn-dark", " vertical")
  }, /*#__PURE__*/_react.default.createElement("i", {
    style: {
      fontSize: '20px',
      marginRight: '10px'
    },
    className: "bi bi-bell"
  }), email || phone ? "Notifiations Activated" : "Enable Notifications"));
}

let showModal = () => {
  new window.bootstrap.Modal('#notificationsModal').show();
};

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
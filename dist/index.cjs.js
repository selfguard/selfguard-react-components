'use strict';

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var React = require('react');
var Input = require('react-phone-input-2');
var Toastify = require('toastify-js');
var $ = require('jquery');
var ClipLoader = require('react-spinners/ClipLoader');
var SelfGuard = require('selfguard-client');
require('react-phone-input-2/lib/style.css');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Input__default = /*#__PURE__*/_interopDefaultLegacy(Input);
var Toastify__default = /*#__PURE__*/_interopDefaultLegacy(Toastify);
var $__default = /*#__PURE__*/_interopDefaultLegacy($);
var ClipLoader__default = /*#__PURE__*/_interopDefaultLegacy(ClipLoader);
var SelfGuard__default = /*#__PURE__*/_interopDefaultLegacy(SelfGuard);

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".scrolling-words-container {\n  display: flex;\n  align-items: center;\n  font-size: 4rem;\n  font-weight: 600;\n}\n\n.scrolling-words-box {\n  height: 6rem;\n  overflow: hidden;\n}\n.scrolling-words-box ul {\n  height: 48rem;\n  padding: 0;\n  animation: scrollUp 20s infinite;\n}\n\n.scrolling-words-box ul li {\n  text-align:center;\n  list-style: none;\n}\n\n#give {\n  font-size:4rem;\n}\n\n@media only screen and (max-width: 768px) {\n  .scrolling-words-container {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n    font-weight: 600;\n  }\n\n  #give {\n    font-size:2rem;\n  }\n  \n  .scrolling-words-box {\n    height: 3rem;\n    overflow: hidden;\n  }\n  .scrolling-words-box ul {\n    height: 24rem;\n    padding: 0;\n    animation: scrollUp 20s infinite;\n  }\n}\n\n@keyframes scrollUp {\n  0%, 10% {\n    transform: translateY(0%);\n  }\n  12%, 22% {\n    transform: translateY(-12.5%);\n  }\n  24%, 34% {\n    transform: translateY(-25%);\n  }\n  36%, 46% {\n    transform: translateY(-37.5%);\n  }\n  48%, 58% {\n    transform: translateY(-50%);\n  }\n  60%, 70% {\n    transform: translateY(-62.5%);\n  }\n  72%, 82% {\n    transform: translateY(-75%);\n  }\n  84%, 94% {\n    transform: translateY(-87.5%);\n  }\n  96%, 100% {\n    transform: translateY(-0%);\n  }\n\n}\n\n.navbar-expand-lg .navbar-nav {\n    /* flex-direction: row !important; */\n}\n\n#signupdialog{\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n\n#code {\n  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important\n}\n\n.mb-2{\n  margin-bottom: 0px !important;\n}\n\n.dropdown-item:focus, .dropdown-item:hover {\n    color: blue;\n    background: none !important;\n}\n\n.section {\n  margin-top: 50px;\n  margin-bottom: 50px;\n  background: #f9f9f9;\n  border-radius: 10px;\n  padding: 50px;\n}\n\n.reverse {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.img-fluid {\n  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;\n}\n\n.dropdown:hover .dropdown-menu {\n    display: block;\n    margin-top: 0;\n }\n\n\n.vertical4 {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-content: space-around;\n    justify-content: flex-start;\n}\n\n\n .vertical3 {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-content: space-around;\n    justify-content: space-between;\n}\n\n.vertical2 {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: space-around;\n  justify-content: center;\n}\n\n.fileIcon {\n  /* float:left; */\n  margin-right:2px;\n  margin-bottom:3px;\n}\n\n#inputPassword5 {\n  background-color: white;\n  /* border:none; */\n  border-radius:0;\n  outline:none;\n}\n\n.App-payment{\n  padding: 20px;\nborder-radius: 10px;\nbackground: #e9e9e9;\n}\n\nbody {\n    margin: 0;\n    font-family: 'Roboto',monospace;\n    /* font-family: DM Serif Display Regular; */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.modal{\n  padding:0\n}\n\n\ncode {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\n\ntd {\n  text-align: center;\n}\n\n.modal-backdrop {\n  z-index: 0;\n}\n\nth {\n  text-align:center;\n}\n\n.row {\n  /* margin-right:0 !important; */\n}\n\n.card-title {\n  align-items: center;\n  display: flex;\n  text-align: left;\n}\n\n.bi {\n  font-size:30px;\n}\n\n.vertical {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: space-around;\n}\n\n.header {\n  background:#dee2e6;\n  display:flex;\n  align-items: center;\n  margin-bottom:10px;\n  justify-content: space-between;\n}\n\n#uploadFiles {\n  min-height:150px;\n  background: rgba(var(--bs-light-rgb),0.5);\n  padding-top:20px;\n  padding-bottom: 20px;\n}\n\n#listFiles {\n  border: 1px solid #dee2e6;\n  margin-bottom: 20px;\n}\n";
n(css,{});

var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
var Notifications = function Notifications(_ref) {
  var api_key = _ref.api_key,
    userAddress = _ref.userAddress;
  function usePrevious(value) {
    var ref = React.useRef();
    React.useEffect(function () {
      ref.current = value; //assign the value of ref to the argument
    }, [value]); //this code will run when the value of 'value' changes
    return ref.current; //in the end, return the current ref value.
  }

  var prevAccount = usePrevious(userAddress);
  var sg = new SelfGuard__default["default"](api_key);

  /**
   * It sends a text message to the phone number that is passed in as a parameter.
   * @param key - The phone number to send the SMS to.
   */
  var sendSMS = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(key) {
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return sg.sendSMS({
                address: key,
                text: "Hello, Thank you for signing up for notifications."
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function sendSMS(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * It sends an email to the address specified in the key parameter
   * @param key - the email address you want to send to
   */
  var sendEmail = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(key) {
      return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return sg.sendEmail({
                address: key,
                from: "test@selfguard.xyz",
                fromName: "testFromName",
                replyTo: "test@selfguard.xyz",
                replyToName: "testReplyToName",
                subject: "testSubject",
                html: "testContent"
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function sendEmail(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  /* Setting up the state of the component. */
  var _useState = React.useState(false),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = React.useState(null),
    _useState4 = _slicedToArray__default["default"](_useState3, 2),
    email = _useState4[0],
    setEmail = _useState4[1];
  var _useState5 = React.useState(null),
    _useState6 = _slicedToArray__default["default"](_useState5, 2),
    phone = _useState6[0],
    setPhone = _useState6[1];
  var _useState7 = React.useState(null),
    _useState8 = _slicedToArray__default["default"](_useState7, 2),
    country = _useState8[0],
    setCountry = _useState8[1];
  var _useState9 = React.useState(false),
    _useState10 = _slicedToArray__default["default"](_useState9, 2),
    requested = _useState10[0],
    setRequested = _useState10[1];
  var _useState11 = React.useState(false),
    _useState12 = _slicedToArray__default["default"](_useState11, 2),
    activated = _useState12[0],
    setActivated = _useState12[1];
  function fetchData() {
    return _fetchData.apply(this, arguments);
  } /* This is a React hook that is called when the component is mounted. It is used to fetch the user's
    profile from the SelfGuard API. */
  function _fetchData() {
    _fetchData = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee4() {
      var sg, profile;
      return _regeneratorRuntime__default["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              sg = new SelfGuard__default["default"](api_key); //get email
              _context4.prev = 1;
              _context4.next = 4;
              return sg.getProfile(userAddress);
            case 4:
              profile = _context4.sent;
              if (profile.email || profile.phone) setActivated(true);else setActivated(false);
              // setEmail(profile.email);
              // setPhone(profile.phone);
              _context4.next = 14;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](1);
              console.log(_context4.t0);
              setActivated(false);
              setEmail(null);
              setPhone(null);
            case 14:
              setRequested(true);
            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 8]]);
    }));
    return _fetchData.apply(this, arguments);
  }
  React.useEffect(function () {
    fetchData();
  }, []);
  React.useEffect(function () {
    if (prevAccount !== userAddress && userAddress) {
      fetchData();
    }
  }, [userAddress, prevAccount]);

  /**
   * It takes the email, phone, and userAddress from the state and dispatches an action to update the
   * profile
   */
  function updateProfile() {
    return _updateProfile.apply(this, arguments);
  }
  function _updateProfile() {
    _updateProfile = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee5() {
      var text;
      return _regeneratorRuntime__default["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setLoading(true);
              _context5.prev = 1;
              if (phone === undefined || phone === null) phone = '';
              if (!email) email = '';
              if (!(!isValidEmail(email) && email !== "")) {
                _context5.next = 8;
                break;
              }
              Toastify__default["default"]({
                text: "Email is invalid",
                style: {
                  background: "linear-gradient(to right, #dc3545, #dc3541"
                }
              }).showToast();
              setLoading(false);
              return _context5.abrupt("return");
            case 8:
              if (!(phone !== "" && !phoneUtil.isValidNumber(phoneUtil.parse(phone, country)))) {
                _context5.next = 12;
                break;
              }
              Toastify__default["default"]({
                text: "Phone # is invalid",
                style: {
                  background: "linear-gradient(to right, #dc3545, #dc3541"
                }
              }).showToast();
              setLoading(false);
              return _context5.abrupt("return");
            case 12:
              _context5.next = 14;
              return sg.updateProfile(userAddress, {
                email: email,
                phone: phone
              });
            case 14:
              text = "Notifications Enabled";
              if (email || phone) setActivated(true);
              if (!email && !phone) {
                text = "Notifications Disabled";
                setActivated(false);
              }
              if (phone) sendSMS(userAddress);
              if (email) sendEmail(userAddress);
              setLoading(false);
              Toastify__default["default"]({
                text: text,
                style: {
                  background: "linear-gradient(to right, #198754, #198751"
                }
              }).showToast();
              $__default["default"]('#closeModal').click();
              _context5.next = 27;
              break;
            case 24:
              _context5.prev = 24;
              _context5.t0 = _context5["catch"](1);
              setLoading(false);
            case 27:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 24]]);
    }));
    return _updateProfile.apply(this, arguments);
  }
  var disableNotifications = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3() {
      return _regeneratorRuntime__default["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return sg.updateProfile(userAddress, null);
            case 2:
              setActivated(false);
              Toastify__default["default"]({
                text: "Notifications Disabled",
                style: {
                  background: "linear-gradient(to right, #198754, #198751"
                }
              }).showToast();
            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return function disableNotifications() {
      return _ref4.apply(this, arguments);
    };
  }();
  var showModal = function showModal() {
    new window.bootstrap.Modal('#notificationsModal').show();
  };
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function updatePhone(v, c) {
    setPhone(v);
    setCountry(c.countryCode);
  }
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
  }), /*#__PURE__*/React__default["default"].createElement("link", {
    href: "https://api.fonts.coollabs.io/css2?family=Roboto&display=swap",
    rel: "stylesheet"
  }), /*#__PURE__*/React__default["default"].createElement("link", {
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    rel: "stylesheet",
    integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
    crossOrigin: "anonymous"
  }), /*#__PURE__*/React__default["default"].createElement("script", {
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",
    integrity: "sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa",
    crossOrigin: "anonymous"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal fade",
    style: {
      margin: 0
    },
    tabIndex: "-1",
    id: 'notificationsModal'
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-dialog modal-dialog-centered",
    style: {
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, requested && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-content",
    style: {
      width: '400px'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React__default["default"].createElement("h5", {
    className: "modal-title"
  }, "Set Up Notifications"), /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: "btn-close",
    id: "closeModal",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "mb-3",
    style: {
      display: 'flex',
      textAlign: 'left',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React__default["default"].createElement("i", {
    style: {
      fontSize: '25px',
      marginRight: '10px'
    },
    className: "bi bi-envelope"
  }), /*#__PURE__*/React__default["default"].createElement("input", {
    id: "email",
    onChange: function onChange(e) {
      setEmail(e.target.value);
    },
    placeholder: "Email Address",
    className: "form-control",
    type: "email",
    style: {},
    value: email ? email : ''
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "mb-3",
    style: {
      display: 'flex',
      textAlign: 'left',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React__default["default"].createElement("i", {
    style: {
      fontSize: '25px',
      marginRight: '10px'
    },
    className: "bi bi-telephone"
  }), /*#__PURE__*/React__default["default"].createElement(Input__default["default"], {
    specialLabel: null,
    country: 'us',
    id: "phone",
    onChange: updatePhone,
    placeholder: "Phone Number",
    type: "tel",
    value: phone
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, !loading ? /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: updateProfile,
    className: "btn btn-dark"
  }, " Submit ") : /*#__PURE__*/React__default["default"].createElement(ClipLoader__default["default"], null), /*#__PURE__*/React__default["default"].createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://selfguard.xyz/home",
    style: {
      textDecoration: 'none',
      color: 'black',
      fontSize: '12px'
    },
    className: "mb-0 vertical"
  }, "Encrypted By", /*#__PURE__*/React__default["default"].createElement("img", {
    style: {
      marginLeft: '5px'
    },
    src: "/logo2.png",
    width: "15",
    height: "15",
    className: "d-inline-block",
    alt: ""
  }), "SelfGuard"))))))), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: !activated ? showModal : disableNotifications,
    className: "btn ".concat(activated ? "btn-danger" : "btn-dark", " vertical")
  }, /*#__PURE__*/React__default["default"].createElement("i", {
    style: {
      fontSize: '20px',
      marginRight: '10px'
    },
    className: "bi bi-".concat(activated ? 'bell-slash' : 'bell')
  }), activated ? "Disable Notifications" : "Enable Notifications"));
};

var returnLibrary = function returnLibrary() {
  return {
    Notifications: Notifications
    // you can add here other components that you want to export
  };
};

var index = returnLibrary();

module.exports = index;

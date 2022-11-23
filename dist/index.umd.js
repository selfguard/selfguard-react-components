(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@babel/runtime/helpers/asyncToGenerator'), require('@babel/runtime/helpers/slicedToArray'), require('@babel/runtime/regenerator'), require('react'), require('react-phone-input-2'), require('toastify-js'), require('jquery'), require('react-spinners/ClipLoader'), require('selfguard-client'), require('react-phone-input-2/lib/style.css')) :
  typeof define === 'function' && define.amd ? define(['@babel/runtime/helpers/asyncToGenerator', '@babel/runtime/helpers/slicedToArray', '@babel/runtime/regenerator', 'react', 'react-phone-input-2', 'toastify-js', 'jquery', 'react-spinners/ClipLoader', 'selfguard-client', 'react-phone-input-2/lib/style.css'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["react-awesome-buttons"] = factory(global._asyncToGenerator, global._slicedToArray, global._regeneratorRuntime, global.React, global.Input, global.Toastify, global.$, global.ClipLoader, global.SelfGuard));
})(this, (function (_asyncToGenerator, _slicedToArray, _regeneratorRuntime, React, Input, Toastify, $, ClipLoader, SelfGuard) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
  var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
  var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var Input__default = /*#__PURE__*/_interopDefaultLegacy(Input);
  var Toastify__default = /*#__PURE__*/_interopDefaultLegacy(Toastify);
  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var ClipLoader__default = /*#__PURE__*/_interopDefaultLegacy(ClipLoader);
  var SelfGuard__default = /*#__PURE__*/_interopDefaultLegacy(SelfGuard);

  var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

  var css = ".scrolling-words-container {\n  display: flex;\n  align-items: center;\n  font-size: 4rem;\n  font-weight: 600;\n}\n\n.scrolling-words-box {\n  height: 6rem;\n  overflow: hidden;\n}\n\n#doges {\n  width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;\n}\n\n.scrolling-words-box ul {\n  height: 48rem;\n  padding: 0;\n  animation: scrollUp 20s infinite;\n}\n\n\n.react-tel-input .form-control{\n  margin: 0;\n  height:100%;\n  width:100%;\n}\n\n\n.scrolling-words-box ul li {\n  text-align:center;\n  list-style: none;\n}\n\n#give {\n  font-size:4rem;\n}\n\n@media only screen and (max-width: 768px) {\n  .scrolling-words-container {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n    font-weight: 600;\n  }\n\n  #give {\n    font-size:2rem;\n  }\n  \n  .scrolling-words-box {\n    height: 3rem;\n    overflow: hidden;\n  }\n  .scrolling-words-box ul {\n    height: 24rem;\n    padding: 0;\n    animation: scrollUp 20s infinite;\n  }\n}\n\n@keyframes scrollUp {\n  0%, 10% {\n    transform: translateY(0%);\n  }\n  12%, 22% {\n    transform: translateY(-12.5%);\n  }\n  24%, 34% {\n    transform: translateY(-25%);\n  }\n  36%, 46% {\n    transform: translateY(-37.5%);\n  }\n  48%, 58% {\n    transform: translateY(-50%);\n  }\n  60%, 70% {\n    transform: translateY(-62.5%);\n  }\n  72%, 82% {\n    transform: translateY(-75%);\n  }\n  84%, 94% {\n    transform: translateY(-87.5%);\n  }\n  96%, 100% {\n    transform: translateY(-0%);\n  }\n\n}\n\n.navbar-expand-lg .navbar-nav {\n    /* flex-direction: row !important; */\n}\n\n#signupdialog{\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n\n#code {\n  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important\n}\n\n.mb-2{\n  margin-bottom: 0px !important;\n}\n\n.dropdown-item:focus, .dropdown-item:hover {\n    color: blue;\n    background: none !important;\n}\n\n.section {\n  margin-top: 50px;\n  margin-bottom: 50px;\n  background: #f9f9f9;\n  border-radius: 10px;\n  padding: 50px;\n}\n\n.reverse {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.img-fluid {\n  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;\n}\n\n.dropdown:hover .dropdown-menu {\n    display: block;\n    margin-top: 0;\n }\n\n\n.vertical4 {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-content: space-around;\n    justify-content: flex-start;\n}\n\n\n .vertical3 {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-content: space-around;\n    justify-content: space-between;\n}\n\n.vertical2 {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: space-around;\n  justify-content: center;\n}\n\n.fileIcon {\n  /* float:left; */\n  margin-right:2px;\n  margin-bottom:3px;\n}\n\n#inputPassword5 {\n  background-color: white;\n  /* border:none; */\n  border-radius:0;\n  outline:none;\n}\n\n.App-payment{\n  padding: 20px;\nborder-radius: 10px;\nbackground: #e9e9e9;\n}\n\nbody {\n    margin: 0;\n    font-family: 'Roboto',monospace;\n    /* font-family: DM Serif Display Regular; */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.modal{\n  padding:0\n}\n\n\ncode {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\n\ntd {\n  text-align: center;\n}\n\n.modal-backdrop {\n  z-index: 0;\n}\n\nth {\n  text-align:center;\n}\n\n.row {\n  /* margin-right:0 !important; */\n}\n\n.card-title {\n  align-items: center;\n  display: flex;\n  text-align: left;\n}\n\n.bi {\n  font-size:30px;\n}\n\n.vertical {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: space-around;\n}\n\n.header {\n  background:#dee2e6;\n  display:flex;\n  align-items: center;\n  margin-bottom:10px;\n  justify-content: space-between;\n}\n\n#uploadFiles {\n  min-height:150px;\n  background: rgba(var(--bs-light-rgb),0.5);\n  padding-top:20px;\n  padding-bottom: 20px;\n}\n\n#listFiles {\n  border: 1px solid #dee2e6;\n  margin-bottom: 20px;\n}\n";
  n(css,{});

  var _this = undefined;
  var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
  var domain = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "http://localhost:8080";
  var NotificationsButton = function NotificationsButton(_ref) {
    var onDisabled = _ref.onDisabled,
      onEnabled = _ref.onEnabled,
      api_key = _ref.api_key,
      user_address = _ref.user_address,
      collection_name = _ref.collection_name,
      color = _ref.color,
      size = _ref.size;
    var sg = new SelfGuard__default["default"](api_key, null, null, null, domain);
    if (!size) size = 'small';
    if (!color) color = 'black';
    function usePrevious(value) {
      var ref = React.useRef();
      React.useEffect(function () {
        ref.current = value; //assign the value of ref to the argument
      }, [value]); //this code will run when the value of 'value' changes
      return ref.current; //in the end, return the current ref value.
    }

    var prevAccount = usePrevious(user_address);

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
    var _useState13 = React.useState(true),
      _useState14 = _slicedToArray__default["default"](_useState13, 2),
      checked = _useState14[0],
      setChecked = _useState14[1];

    /* This is a React hook that is called when the component is mounted. It is used to fetch the user's
    profile from the SelfGuard API. */
    React.useEffect(function () {
      function fetchData() {
        return _fetchData.apply(this, arguments);
      }
      function _fetchData() {
        _fetchData = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
          var profile;
          return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return sg.getProfile({
                    user_address: user_address,
                    collection_name: collection_name
                  });
                case 3:
                  profile = _context.sent;
                  if (profile.email || profile.phone) {
                    if (typeof onEnabled === 'function') onEnabled();
                    setActivated(true);
                  } else {
                    if (typeof onDisabled === 'function') onDisabled();
                    setActivated(false);
                  }
                  _context.next = 13;
                  break;
                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](0);
                  if (typeof onDisabled === 'function') onDisabled();
                  setActivated(false);
                  setEmail(null);
                  setPhone(null);
                case 13:
                  setRequested(true);
                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 7]]);
        }));
        return _fetchData.apply(this, arguments);
      }
      if (prevAccount !== user_address && user_address) {
        fetchData();
      }
    }, [user_address, prevAccount, api_key, collection_name]);

    /**
     * It takes the email, phone, and user_address from the state and dispatches an action to update the
     * profile
     */
    function updateProfile(_x) {
      return _updateProfile.apply(this, arguments);
    }
    function _updateProfile() {
      _updateProfile = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3(e) {
        return _regeneratorRuntime__default["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (e && e.preventDefault) e.preventDefault();
                if (checked) {
                  _context3.next = 3;
                  break;
                }
                return _context3.abrupt("return");
              case 3:
                setLoading(true);
                _context3.prev = 4;
                if (phone === undefined || phone === null) phone = '';
                if (!email) email = '';
                if (!(!isValidEmail(email) && email !== "")) {
                  _context3.next = 11;
                  break;
                }
                Toastify__default["default"]({
                  text: "Email is invalid",
                  style: {
                    background: "linear-gradient(to right, #dc3545, #dc3541"
                  }
                }).showToast();
                setLoading(false);
                return _context3.abrupt("return");
              case 11:
                if (!(phone !== "" && !phoneUtil.isValidNumber(phoneUtil.parse(phone, country)))) {
                  _context3.next = 15;
                  break;
                }
                Toastify__default["default"]({
                  text: "Phone # is invalid",
                  style: {
                    background: "linear-gradient(to right, #dc3545, #dc3541"
                  }
                }).showToast();
                setLoading(false);
                return _context3.abrupt("return");
              case 15:
                _context3.next = 17;
                return sg.updateProfile({
                  user_address: user_address,
                  value: {
                    email: email,
                    phone: phone
                  },
                  collection_name: collection_name
                });
              case 17:
                if (email || phone) {
                  if (typeof onEnabled === 'function') onEnabled();
                  setActivated(true);
                }
                if (!email && !phone) {
                  if (typeof onDisabled === 'function') onDisabled();
                  setActivated(false);
                }
                setLoading(false);
                // Toastify({text,style: {background: "linear-gradient(to right, #198754, #198751"}}).showToast();
                $__default["default"]('#closeModal').click();
                _context3.next = 28;
                break;
              case 24:
                _context3.prev = 24;
                _context3.t0 = _context3["catch"](4);
                console.log({
                  err: _context3.t0
                });
                // Toastify({text:err,style: {background: "linear-gradient(to right, #dc3545, #dc3541"}}).showToast();
                setLoading(false);
              case 28:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[4, 24]]);
      }));
      return _updateProfile.apply(this, arguments);
    }
    var disableNotifications = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2() {
        return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return sg.updateProfile({
                  user_address: user_address,
                  value: null,
                  collection_name: collection_name
                });
              case 2:
                if (typeof onDisabled === 'function') onDisabled();
                setActivated(false);
                // Toastify({text:"Notifications Disabled",style: {background: "linear-gradient(to right, #198754, #198751"}}).showToast();
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return function disableNotifications() {
        return _ref2.apply(this, arguments);
      };
    }();
    var showModal = function showModal() {
      new window.bootstrap.Modal('#notificationsModal').show();
      //move div with class modal-backdrop to a child of the div with id notification-component
      var modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
      var notificationComponent = document.getElementById('notification-component');
      if (modalBackdrop && notificationComponent) notificationComponent.appendChild(modalBackdrop);
    };
    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
    function updatePhone(v, c) {
      setPhone(v);
      setCountry(c.countryCode);
    }
    return /*#__PURE__*/React__default["default"].createElement("div", {
      id: "notification-component"
    }, /*#__PURE__*/React__default["default"].createElement("link", {
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
        margin: 0,
        zIndex: 100000
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
    }, /*#__PURE__*/React__default["default"].createElement("i", {
      className: "bi bi-bell",
      style: {
        fontSize: '25px',
        marginRight: '10px'
      }
    }), /*#__PURE__*/React__default["default"].createElement("h6", {
      className: "modal-title"
    }, "Subscribe to ", collection_name), /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      className: "btn-close",
      id: "closeModal",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    })), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "modal-body"
    }, /*#__PURE__*/React__default["default"].createElement("form", {
      onSubmit: updateProfile.bind(_this)
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
      className: "mb-3",
      style: {
        display: 'flex',
        textAlign: 'left',
        marginBottom: '20px'
      }
    }, /*#__PURE__*/React__default["default"].createElement("input", {
      style: {
        minWidth: '15px',
        minHeight: '15px'
      },
      className: "form-check-input",
      type: "checkbox",
      value: checked,
      checked: checked,
      onChange: function onChange() {},
      onClick: function onClick() {
        setChecked(!checked);
      },
      id: "flexCheckDefault"
    }), /*#__PURE__*/React__default["default"].createElement("label", {
      className: "form-check-label",
      htmlFor: "flexCheckDefault",
      style: {
        marginLeft: '10px',
        fontSize: '10px',
        marginTop: '3px'
      }
    }, "I consent to receiving notifications from ", collection_name, " through email and text, and I acknowledge that I have read and understood the ", ' ', /*#__PURE__*/React__default["default"].createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://app.termly.io/document/terms-of-use-for-saas/41431ed0-b5e0-40ae-86b1-7d3574dbc7a9"
    }, "Terms & Conditions"), ' ', " and ", ' ', /*#__PURE__*/React__default["default"].createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://app.termly.io/document/privacy-policy/5f00313b-9c18-49c4-84c1-13efea1cadd9"
    }, "Privacy Policy."))), /*#__PURE__*/React__default["default"].createElement("hr", null), /*#__PURE__*/React__default["default"].createElement("p", {
      className: "mb-3",
      style: {
        fontSize: '10px',
        display: 'flex',
        textAlign: 'left',
        marginBottom: '20px'
      }
    }, "Your email and phone number are encrypted such that ", collection_name, " will not be able to view them. You can always disable notifications using this widget."), /*#__PURE__*/React__default["default"].createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, !loading ? /*#__PURE__*/React__default["default"].createElement("button", {
      onClick: updateProfile.bind(_this),
      disabled: !checked,
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
    }), "SelfGuard"))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React__default["default"].createElement("p", {
      className: "",
      style: {
        fontSize: '10px',
        display: 'flex',
        textAlign: 'left',
        marginTop: '10px',
        marginBottom: 0
      }
    }, "Want to setup your own notification group? ", /*#__PURE__*/React__default["default"].createElement("a", {
      style: {
        color: 'black',
        marginLeft: '2px'
      },
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://getnotified.xyz"
    }, " Click here to get started.")))))))), size === 'large' && /*#__PURE__*/React__default["default"].createElement("button", {
      style: {
        marginTop: '0px',
        color: color
      },
      onClick: !activated ? showModal : disableNotifications,
      className: "btn btn vertical"
    }, /*#__PURE__*/React__default["default"].createElement("i", {
      style: {
        fontSize: '20px',
        marginRight: '10px',
        color: color
      },
      className: "bi bi-".concat(activated ? 'bell-slash' : 'bell')
    }), activated ? "Disable Notifications" : "Enable Notifications"), size === 'small' && /*#__PURE__*/React__default["default"].createElement("button", {
      style: {
        marginTop: '0px'
      },
      onClick: !activated ? showModal : disableNotifications,
      className: "btn btn vertical"
    }, /*#__PURE__*/React__default["default"].createElement("i", {
      style: {
        fontSize: '20px',
        color: color
      },
      className: "bi bi-".concat(activated ? 'bell-slash' : 'bell')
    })));
  };

  var returnLibrary = function returnLibrary() {
    return {
      NotificationsButton: NotificationsButton
      // you can add here other components that you want to export
    };
  };

  var index = returnLibrary();

  return index;

}));

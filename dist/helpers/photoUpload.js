"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _cloudinary = _interopRequireDefault(require("../config/cloudinary.js"));
var imageUploader = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req) {
    var tmp, Result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          tmp = req.files.image.tempFilePath;
          _context.next = 4;
          return _cloudinary["default"].upload(tmp, {
            folder: 'Heal-the-world'
          }, function (_, result) {
            return result;
          });
        case 4:
          Result = _context.sent;
          return _context.abrupt("return", Result);
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function imageUploader(_x) {
    return _ref.apply(this, arguments);
  };
}();
var _default = imageUploader;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpbWFnZVVwbG9hZGVyIiwicmVxIiwidG1wIiwiZmlsZXMiLCJpbWFnZSIsInRlbXBGaWxlUGF0aCIsInVwbG9hZGVyIiwidXBsb2FkIiwiZm9sZGVyIiwiXyIsInJlc3VsdCIsIlJlc3VsdCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9waG90b1VwbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXBsb2FkZXIgZnJvbSAnLi4vY29uZmlnL2Nsb3VkaW5hcnkuanMnXHJcblxyXG5cclxuY29uc3QgaW1hZ2VVcGxvYWRlciA9IGFzeW5jIChyZXEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdG1wID0gcmVxLmZpbGVzLmltYWdlLnRlbXBGaWxlUGF0aDtcclxuICAgICAgICBjb25zdCBSZXN1bHQgPSBhd2FpdCB1cGxvYWRlci51cGxvYWQoXHJcbiAgICAgICAgICAgIHRtcCxcclxuICAgICAgICAgICAgeyBmb2xkZXI6ICdIZWFsLXRoZS13b3JsZCcgfSxcclxuICAgICAgICAgICAgKF8sIHJlc3VsdCkgPT4gcmVzdWx0XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gUmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW1hZ2VVcGxvYWRlcjtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUdBLElBQU1BLGFBQWE7RUFBQSx5RkFBRyxpQkFBT0MsR0FBRztJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFFbEJDLEdBQUcsR0FBR0QsR0FBRyxDQUFDRSxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsWUFBWTtVQUFBO1VBQUEsT0FDbkJDLHNCQUFRLENBQUNDLE1BQU0sQ0FDaENMLEdBQUcsRUFDSDtZQUFFTSxNQUFNLEVBQUU7VUFBaUIsQ0FBQyxFQUM1QixVQUFDQyxDQUFDLEVBQUVDLE1BQU07WUFBQSxPQUFLQSxNQUFNO1VBQUEsRUFDeEI7UUFBQTtVQUpLQyxNQUFNO1VBQUEsaUNBS0xBLE1BQU07UUFBQTtVQUFBO1VBQUE7VUFFYkMsT0FBTyxDQUFDQyxHQUFHLGFBQU87UUFBQztRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUEsQ0FFMUI7RUFBQSxnQkFaS2IsYUFBYTtJQUFBO0VBQUE7QUFBQSxHQVlsQjtBQUFDLGVBR2FBLGFBQWE7QUFBQSJ9
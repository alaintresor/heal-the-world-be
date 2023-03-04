"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var connectDB = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var conn;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _mongoose["default"].set("strictQuery", true);
          _context.next = 4;
          return _mongoose["default"].connect(process.env.MONGODB_KEY, {
            useNewUrlParser: true
          });
        case 4:
          conn = _context.sent;
          console.log("db connected successfully! ");
          _context.next = 12;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error("Error: ".concat(_context.t0, " "));
          process.exit(1);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function connectDB() {
    return _ref.apply(this, arguments);
  };
}();
var _default = connectDB;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb25uZWN0REIiLCJtb25nb29zZSIsInNldCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9LRVkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjb25uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZXhpdCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvZGIuY29uZmlnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5cclxuY29uc3QgY29ubmVjdERCID0gIGFzeW5jICgpPT57XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICAgIG1vbmdvb3NlLnNldChcInN0cmljdFF1ZXJ5XCIsIHRydWUpO1xyXG4gICAgICAgIGNvbnN0IGNvbm4gPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfS0VZLHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhgZGIgY29ubmVjdGVkIHN1Y2Nlc3NmdWxseSEgYClcclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6ICR7ZXJyb3J9IGApXHJcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBR0EsSUFBTUEsU0FBUztFQUFBLHlGQUFJO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUdYQyxvQkFBUSxDQUFDQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQztVQUFDO1VBQUEsT0FDZkQsb0JBQVEsQ0FBQ0UsT0FBTyxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFDO1lBRXhEQyxlQUFlLEVBQUU7VUFDckIsQ0FBQyxDQUFDO1FBQUE7VUFISUMsSUFBSTtVQUlWQyxPQUFPLENBQUNDLEdBQUcsK0JBQStCO1VBQUE7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUUxQ0QsT0FBTyxDQUFDRSxLQUFLLG9DQUFvQjtVQUNqQ1AsT0FBTyxDQUFDUSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBLENBR3RCO0VBQUEsZ0JBZEtaLFNBQVM7SUFBQTtFQUFBO0FBQUEsR0FjZDtBQUFBLGVBRWNBLFNBQVM7QUFBQSJ9
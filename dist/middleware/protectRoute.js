"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));
var _userModel = _interopRequireDefault(require("../models/userModel.js"));
var protect = (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, decoded;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))) {
            _context.next = 14;
            break;
          }
          _context.prev = 1;
          // Get token from header
          token = req.headers.authorization.split(' ')[1];

          // Verify token
          decoded = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET); // Get user from the token
          _context.next = 6;
          return _userModel["default"].findById(decoded.id).select('-password');
        case 6:
          req.user = _context.sent;
          next();
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.status(401).json({
            message: 'Not authorized'
          });
        case 14:
          if (!token) {
            res.status(401).json({
              message: 'Not authorized, no token'
            });
          }
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 10]]);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
var _default = protect;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJwcm90ZWN0IiwiYXN5bmNIYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3RhcnRzV2l0aCIsInRva2VuIiwic3BsaXQiLCJkZWNvZGVkIiwiand0IiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJVc2VyIiwiZmluZEJ5SWQiLCJpZCIsInNlbGVjdCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZS9wcm90ZWN0Um91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCBhc3luY0hhbmRsZXIgZnJvbSAnZXhwcmVzcy1hc3luYy1oYW5kbGVyJ1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlck1vZGVsLmpzJ1xyXG5cclxuY29uc3QgcHJvdGVjdCA9IGFzeW5jSGFuZGxlcihhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIGxldCB0b2tlblxyXG5cclxuICAgIGlmIChcclxuICAgICAgICByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uICYmXHJcbiAgICAgICAgcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zdGFydHNXaXRoKCdCZWFyZXInKVxyXG4gICAgKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gR2V0IHRva2VuIGZyb20gaGVhZGVyXHJcbiAgICAgICAgICAgIHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdXHJcblxyXG4gICAgICAgICAgICAvLyBWZXJpZnkgdG9rZW5cclxuICAgICAgICAgICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpXHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgdXNlciBmcm9tIHRoZSB0b2tlblxyXG4gICAgICAgICAgICByZXEudXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQoZGVjb2RlZC5pZCkuc2VsZWN0KCctcGFzc3dvcmQnKVxyXG5cclxuICAgICAgICAgICAgbmV4dCgpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ05vdCBhdXRob3JpemVkJyB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnTm90IGF1dGhvcml6ZWQsIG5vIHRva2VuJyB9KVxyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBwcm90ZWN0XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLElBQUFDLCtCQUFZO0VBQUEseUZBQUMsaUJBQU9DLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQSxNQUkxQ0YsR0FBRyxDQUFDRyxPQUFPLENBQUNDLGFBQWEsSUFDekJKLEdBQUcsQ0FBQ0csT0FBTyxDQUFDQyxhQUFhLENBQUNDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFBQTtZQUFBO1VBQUE7VUFBQTtVQUcxQztVQUNBQyxLQUFLLEdBQUdOLEdBQUcsQ0FBQ0csT0FBTyxDQUFDQyxhQUFhLENBQUNHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O1VBRS9DO1VBQ01DLE9BQU8sR0FBR0Msd0JBQUcsQ0FBQ0MsTUFBTSxDQUFDSixLQUFLLEVBQUVLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUMsRUFFekQ7VUFBQTtVQUFBLE9BQ2lCQyxxQkFBSSxDQUFDQyxRQUFRLENBQUNQLE9BQU8sQ0FBQ1EsRUFBRSxDQUFDLENBQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFBQTtVQUE5RGpCLEdBQUcsQ0FBQ2tCLElBQUk7VUFFUmhCLElBQUksRUFBRTtVQUFBO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFFTmlCLE9BQU8sQ0FBQ0MsR0FBRyxhQUFPO1VBQ2xCbkIsR0FBRyxDQUFDb0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFO1VBQWlCLENBQUMsQ0FBQztRQUFBO1VBSTNELElBQUksQ0FBQ2pCLEtBQUssRUFBRTtZQUNSTCxHQUFHLENBQUNvQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztjQUFFQyxPQUFPLEVBQUU7WUFBMkIsQ0FBQyxDQUFDO1VBQ2pFO1FBQUM7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBLENBQ0o7RUFBQTtJQUFBO0VBQUE7QUFBQSxJQUFDO0FBQUEsZUFDYXpCLE9BQU87QUFBQSJ9
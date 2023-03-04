"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLogin = exports.updateUserProfile = exports.registerUser = exports.getUserProfile = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _userModel = _interopRequireDefault(require("../models/userModel.js"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _photoUpload = _interopRequireDefault(require("../helpers/photoUpload.js"));
var registerUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, firstname, lastname, username, gender, phone, age, email, address, password, role, confirm_password, userExist, salt, hashedPassword, user, newUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, firstname = _req$body.firstname, lastname = _req$body.lastname, username = _req$body.username, gender = _req$body.gender, phone = _req$body.phone, age = _req$body.age, email = _req$body.email, address = _req$body.address, password = _req$body.password, role = _req$body.role, confirm_password = _req$body.confirm_password;
          if (!(!firstname || firstname == "")) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            "success": false,
            message: "firstname is required"
          }));
        case 4:
          if (!(!lastname || lastname == "")) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            "success": false,
            message: "lastname is required"
          }));
        case 6:
          if (!(!username || username == "")) {
            _context.next = 8;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            "success": false,
            message: "username is required"
          }));
        case 8:
          if (!(!gender || gender == "")) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            "success": false,
            message: "gender is required"
          }));
        case 10:
          if (!(!phone || phone == "")) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            "success": false,
            message: "phone is required"
          }));
        case 12:
          if (!(!age || age == "")) {
            _context.next = 14;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            "success": false,
            message: "age is required"
          }));
        case 14:
          if (!(!email || email == "")) {
            _context.next = 16;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            "success": false,
            message: "email is required"
          }));
        case 16:
          if (!(!address || address == "")) {
            _context.next = 18;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            "success": false,
            message: "address is required"
          }));
        case 18:
          if (!(!password || password == "")) {
            _context.next = 20;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            "success": false,
            message: "password is required"
          }));
        case 20:
          if (!(!role || role == "")) {
            _context.next = 22;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            "success": false,
            message: "role is required"
          }));
        case 22:
          if (!(!confirm_password || confirm_password == "")) {
            _context.next = 24;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            "success": false,
            message: "confirm_password is required"
          }));
        case 24:
          _context.next = 26;
          return _userModel["default"].findOne({
            email: email
          });
        case 26:
          userExist = _context.sent;
          if (!userExist) {
            _context.next = 31;
            break;
          }
          res.status(200).json({
            "success": false,
            message: "user email already exist"
          });
          _context.next = 44;
          break;
        case 31:
          if (!(password !== confirm_password)) {
            _context.next = 33;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            "success": false,
            message: "Two different password"
          }));
        case 33:
          _context.next = 35;
          return _bcryptjs["default"].genSalt(10);
        case 35:
          salt = _context.sent;
          _context.next = 38;
          return _bcryptjs["default"].hash(password, salt);
        case 38:
          hashedPassword = _context.sent;
          user = new _userModel["default"]({
            firstname: firstname,
            lastname: lastname,
            username: username,
            gender: gender,
            age: age,
            email: email,
            address: address,
            phone: phone,
            password: hashedPassword,
            role: role
          });
          _context.next = 42;
          return user.save();
        case 42:
          newUser = _context.sent;
          res.status(201).json({
            "success": true,
            "token": generateToken(newUser._id),
            "user": {
              id: newUser._id,
              firstname: firstname,
              lastname: lastname,
              username: username,
              gender: gender,
              age: age,
              email: email,
              address: address,
              phone: phone,
              role: role
            }
          });
        case 44:
          _context.next = 50;
          break;
        case 46:
          _context.prev = 46;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0.message);
          res.status(500).json({
            error: _context.t0
          });
        case 50:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 46]]);
  }));
  return function registerUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.registerUser = registerUser;
var userLogin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, email, password, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.next = 4;
          return _userModel["default"].findOne({
            email: email
          });
        case 4:
          user = _context2.sent;
          _context2.t0 = user;
          if (!_context2.t0) {
            _context2.next = 10;
            break;
          }
          _context2.next = 9;
          return _bcryptjs["default"].compare(password, user.password);
        case 9:
          _context2.t0 = _context2.sent;
        case 10:
          if (!_context2.t0) {
            _context2.next = 14;
            break;
          }
          res.json({
            "success": true,
            "token": generateToken(user._id),
            user: {
              id: user._id,
              username: user.username,
              firstname: user.firstname,
              lastname: user.lastname,
              gender: user.gender,
              address: user.address,
              email: user.email,
              role: user.role,
              phone: user.phone,
              dob: user.dob,
              profileImage: user.profileImage
            }
          });
          _context2.next = 15;
          break;
        case 14:
          res.json({
            "success": false,
            message: "Invalid credation"
          }).status(400);
        case 15:
          _context2.next = 20;
          break;
        case 17:
          _context2.prev = 17;
          _context2.t1 = _context2["catch"](0);
          res.status(500).json({
            "success": false,
            message: _context2.t1
          });
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 17]]);
  }));
  return function userLogin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.userLogin = userLogin;
var getUserProfile = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          try {
            user = req.user;
            res.status(200).json({
              "success": true,
              message: "user profile",
              data: user
            });
          } catch (error) {
            res.status(500).json({
              "success": false,
              message: error
            });
            console.log(error);
          }
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getUserProfile(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getUserProfile = getUserProfile;
var updateUserProfile = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var user_id, _req$body3, firstname, lastname, username, gender, address, email, phone, dob, image, updateUser;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          user_id = req.user._id;
          _req$body3 = req.body, firstname = _req$body3.firstname, lastname = _req$body3.lastname, username = _req$body3.username, gender = _req$body3.gender, address = _req$body3.address, email = _req$body3.email, phone = _req$body3.phone, dob = _req$body3.dob;
          if (!(!firstname || firstname == "")) {
            _context4.next = 5;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            "success": false,
            message: "firstname is required"
          }));
        case 5:
          if (!(!lastname || lastname == "")) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            "success": false,
            message: "lastname is required"
          }));
        case 7:
          if (!(!username || username == "")) {
            _context4.next = 9;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            "success": false,
            message: "username is required"
          }));
        case 9:
          if (!(!gender && gender == "")) {
            _context4.next = 11;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            "success": false,
            message: "gender is required"
          }));
        case 11:
          if (!(!address || address == "")) {
            _context4.next = 13;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            "success": false,
            message: "address is required"
          }));
        case 13:
          if (!(!email || email == "")) {
            _context4.next = 15;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            "success": false,
            message: "email is required"
          }));
        case 15:
          if (!(!phone || phone == "")) {
            _context4.next = 17;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            "success": false,
            message: "phone is required"
          }));
        case 17:
          if (!(!dob || dob == "")) {
            _context4.next = 19;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            "success": false,
            message: "dob is required"
          }));
        case 19:
          image = '';
          if (!req.files) {
            _context4.next = 25;
            break;
          }
          _context4.next = 23;
          return (0, _photoUpload["default"])(req);
        case 23:
          image = _context4.sent;
          image = image.url;
        case 25:
          _context4.next = 27;
          return _userModel["default"].findByIdAndUpdate(user_id, {
            firstname: firstname,
            lastname: lastname,
            username: username,
            gender: gender,
            dob: dob,
            email: email,
            address: address,
            phone: phone,
            profileImage: image
          }, {
            "new": true
          });
        case 27:
          updateUser = _context4.sent;
          res.status(200).json({
            "success": true,
            message: "user updated successfully",
            user: {
              id: updateUser._id,
              firstname: firstname,
              lastname: lastname,
              username: username,
              gender: gender,
              dob: dob,
              email: email,
              address: address,
              phone: phone,
              profileImage: image
            }
          });
          _context4.next = 35;
          break;
        case 31:
          _context4.prev = 31;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            "success": false,
            message: _context4.t0
          });
          console.log(_context4.t0);
        case 35:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 31]]);
  }));
  return function updateUserProfile(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// generate token 
exports.updateUserProfile = updateUserProfile;
var generateToken = function generateToken(id) {
  return _jsonwebtoken["default"].sign({
    id: id
  }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZWdpc3RlclVzZXIiLCJyZXEiLCJyZXMiLCJib2R5IiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJ1c2VybmFtZSIsImdlbmRlciIsInBob25lIiwiYWdlIiwiZW1haWwiLCJhZGRyZXNzIiwicGFzc3dvcmQiLCJyb2xlIiwiY29uZmlybV9wYXNzd29yZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiVXNlciIsImZpbmRPbmUiLCJ1c2VyRXhpc3QiLCJiY3J5cHQiLCJnZW5TYWx0Iiwic2FsdCIsImhhc2giLCJoYXNoZWRQYXNzd29yZCIsInVzZXIiLCJzYXZlIiwibmV3VXNlciIsImdlbmVyYXRlVG9rZW4iLCJfaWQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInVzZXJMb2dpbiIsImNvbXBhcmUiLCJkb2IiLCJwcm9maWxlSW1hZ2UiLCJnZXRVc2VyUHJvZmlsZSIsImRhdGEiLCJ1cGRhdGVVc2VyUHJvZmlsZSIsInVzZXJfaWQiLCJpbWFnZSIsImZpbGVzIiwiaW1hZ2VVcGxvYWRlciIsInVybCIsImZpbmRCeUlkQW5kVXBkYXRlIiwidXBkYXRlVXNlciIsImp3dCIsInNpZ24iLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy91c2VyQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tIFwiLi4vbW9kZWxzL3VzZXJNb2RlbC5qc1wiXHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiXHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCJcclxuaW1wb3J0IGltYWdlVXBsb2FkZXIgZnJvbSAnLi4vaGVscGVycy9waG90b1VwbG9hZC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCB7IGZpcnN0bmFtZSwgbGFzdG5hbWUsIHVzZXJuYW1lLCBnZW5kZXIsIHBob25lLCBhZ2UsIGVtYWlsLCBhZGRyZXNzLCBwYXNzd29yZCwgcm9sZSwgY29uZmlybV9wYXNzd29yZCB9ID0gcmVxLmJvZHlcclxuICAgICAgICBpZiAoIWZpcnN0bmFtZSB8fCBmaXJzdG5hbWUgPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBtZXNzYWdlOiBcImZpcnN0bmFtZSBpcyByZXF1aXJlZFwiIH0pXHJcbiAgICAgICAgaWYgKCFsYXN0bmFtZSB8fCBsYXN0bmFtZSA9PSBcIlwiKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBcInN1Y2Nlc3NcIjogZmFsc2UsIG1lc3NhZ2U6IFwibGFzdG5hbWUgaXMgcmVxdWlyZWRcIiB9KVxyXG4gICAgICAgIGlmICghdXNlcm5hbWUgfHwgdXNlcm5hbWUgPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBtZXNzYWdlOiBcInVzZXJuYW1lIGlzIHJlcXVpcmVkXCIgfSlcclxuICAgICAgICBpZiAoIWdlbmRlciB8fCBnZW5kZXIgPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBtZXNzYWdlOiBcImdlbmRlciBpcyByZXF1aXJlZFwiIH0pXHJcbiAgICAgICAgaWYgKCFwaG9uZSB8fCBwaG9uZSA9PSBcIlwiKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBcInN1Y2Nlc3NcIjogZmFsc2UsIG1lc3NhZ2U6IFwicGhvbmUgaXMgcmVxdWlyZWRcIiB9KVxyXG4gICAgICAgIGlmICghYWdlIHx8IGFnZSA9PSBcIlwiKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBcInN1Y2Nlc3NcIjogZmFsc2UsIG1lc3NhZ2U6IFwiYWdlIGlzIHJlcXVpcmVkXCIgfSlcclxuICAgICAgICBpZiAoIWVtYWlsIHx8IGVtYWlsID09IFwiXCIpXHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IFwic3VjY2Vzc1wiOiBmYWxzZSwgbWVzc2FnZTogXCJlbWFpbCBpcyByZXF1aXJlZFwiIH0pXHJcbiAgICAgICAgaWYgKCFhZGRyZXNzIHx8IGFkZHJlc3MgPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBtZXNzYWdlOiBcImFkZHJlc3MgaXMgcmVxdWlyZWRcIiB9KVxyXG4gICAgICAgIGlmICghcGFzc3dvcmQgfHwgcGFzc3dvcmQgPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBtZXNzYWdlOiBcInBhc3N3b3JkIGlzIHJlcXVpcmVkXCIgfSlcclxuICAgICAgICBpZiAoIXJvbGUgfHwgcm9sZSA9PSBcIlwiKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBcInN1Y2Nlc3NcIjogZmFsc2UsIG1lc3NhZ2U6IFwicm9sZSBpcyByZXF1aXJlZFwiIH0pXHJcbiAgICAgICAgaWYgKCFjb25maXJtX3Bhc3N3b3JkIHx8IGNvbmZpcm1fcGFzc3dvcmQgPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBtZXNzYWdlOiBcImNvbmZpcm1fcGFzc3dvcmQgaXMgcmVxdWlyZWRcIiB9KVxyXG5cclxuICAgICAgICBjb25zdCB1c2VyRXhpc3QgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KVxyXG4gICAgICAgIGlmICh1c2VyRXhpc3QpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBtZXNzYWdlOiBcInVzZXIgZW1haWwgYWxyZWFkeSBleGlzdFwiIH0pXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChwYXNzd29yZCAhPT0gY29uZmlybV9wYXNzd29yZClcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IFwic3VjY2Vzc1wiOiBmYWxzZSwgbWVzc2FnZTogXCJUd28gZGlmZmVyZW50IHBhc3N3b3JkXCIgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdCgxMClcclxuICAgICAgICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgc2FsdClcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHtcclxuICAgICAgICAgICAgICAgIGZpcnN0bmFtZSwgbGFzdG5hbWUsIHVzZXJuYW1lLCBnZW5kZXIsIGFnZSwgZW1haWwsIGFkZHJlc3MsIHBob25lLCBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICwgcm9sZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgdXNlci5zYXZlKClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInRva2VuXCI6IGdlbmVyYXRlVG9rZW4obmV3VXNlci5faWQpLFxyXG4gICAgICAgICAgICAgICAgXCJ1c2VyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogbmV3VXNlci5faWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdlbmRlcixcclxuICAgICAgICAgICAgICAgICAgICBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZSxcclxuICAgICAgICAgICAgICAgICAgICByb2xlLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyTG9naW4gPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pXHJcbiAgICAgICAgaWYgKHVzZXIgJiYgKGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSkpIHtcclxuICAgICAgICAgICAgcmVzLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInRva2VuXCI6IGdlbmVyYXRlVG9rZW4odXNlci5faWQpLFxyXG4gICAgICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB1c2VyLl9pZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IHVzZXIuZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RuYW1lOiB1c2VyLmxhc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGdlbmRlcjogdXNlci5nZW5kZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogdXNlci5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogdXNlci5waG9uZSxcclxuICAgICAgICAgICAgICAgICAgICBkb2I6IHVzZXIuZG9iLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVJbWFnZTogdXNlci5wcm9maWxlSW1hZ2VcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgcmVzLmpzb24oeyBcInN1Y2Nlc3NcIjogZmFsc2UsIG1lc3NhZ2U6IFwiSW52YWxpZCBjcmVkYXRpb25cIiB9KS5zdGF0dXMoNDAwKVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBcInN1Y2Nlc3NcIjogZmFsc2UsIG1lc3NhZ2U6IGVycm9yIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyUHJvZmlsZSA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gcmVxLnVzZXJcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IFwic3VjY2Vzc1wiOiB0cnVlLCBtZXNzYWdlOiBcInVzZXIgcHJvZmlsZVwiLCBkYXRhOiB1c2VyIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBtZXNzYWdlOiBlcnJvciB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJQcm9maWxlID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJfaWQgPSByZXEudXNlci5faWRcclxuICAgICAgICBjb25zdCB7IGZpcnN0bmFtZSwgbGFzdG5hbWUsIHVzZXJuYW1lLCBnZW5kZXIsIGFkZHJlc3MsIGVtYWlsLCBwaG9uZSwgZG9iIH0gPSByZXEuYm9keVxyXG5cclxuICAgICAgICBpZiAoIWZpcnN0bmFtZSB8fCBmaXJzdG5hbWUgPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBtZXNzYWdlOiBcImZpcnN0bmFtZSBpcyByZXF1aXJlZFwiIH0pXHJcbiAgICAgICAgaWYgKCFsYXN0bmFtZSB8fCBsYXN0bmFtZSA9PSBcIlwiKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBcInN1Y2Nlc3NcIjogZmFsc2UsIG1lc3NhZ2U6IFwibGFzdG5hbWUgaXMgcmVxdWlyZWRcIiB9KVxyXG4gICAgICAgIGlmICghdXNlcm5hbWUgfHwgdXNlcm5hbWUgPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBtZXNzYWdlOiBcInVzZXJuYW1lIGlzIHJlcXVpcmVkXCIgfSlcclxuICAgICAgICBpZiAoIWdlbmRlciAmJiBnZW5kZXIgPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBtZXNzYWdlOiBcImdlbmRlciBpcyByZXF1aXJlZFwiIH0pXHJcbiAgICAgICAgaWYgKCFhZGRyZXNzIHx8IGFkZHJlc3MgPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBtZXNzYWdlOiBcImFkZHJlc3MgaXMgcmVxdWlyZWRcIiB9KVxyXG4gICAgICAgIGlmICghZW1haWwgfHwgZW1haWwgPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBtZXNzYWdlOiBcImVtYWlsIGlzIHJlcXVpcmVkXCIgfSlcclxuICAgICAgICBpZiAoIXBob25lIHx8IHBob25lID09IFwiXCIpXHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IFwic3VjY2Vzc1wiOiBmYWxzZSwgbWVzc2FnZTogXCJwaG9uZSBpcyByZXF1aXJlZFwiIH0pXHJcbiAgICAgICAgaWYgKCFkb2IgfHwgZG9iID09IFwiXCIpXHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IFwic3VjY2Vzc1wiOiBmYWxzZSwgbWVzc2FnZTogXCJkb2IgaXMgcmVxdWlyZWRcIiB9KVxyXG5cclxuICAgICAgICBsZXQgaW1hZ2UgPSAnJ1xyXG4gICAgICAgIGlmIChyZXEuZmlsZXMpIHtcclxuICAgICAgICAgICAgaW1hZ2UgPSBhd2FpdCBpbWFnZVVwbG9hZGVyKHJlcSlcclxuICAgICAgICAgICAgaW1hZ2UgPSBpbWFnZS51cmxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkQW5kVXBkYXRlKHVzZXJfaWQsIHtcclxuICAgICAgICAgICAgZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICBsYXN0bmFtZSxcclxuICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIGdlbmRlcixcclxuICAgICAgICAgICAgZG9iLFxyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgYWRkcmVzcyxcclxuICAgICAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgICAgIHByb2ZpbGVJbWFnZTogaW1hZ2VcclxuICAgICAgICB9LCB7IG5ldzogdHJ1ZSB9KVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsIG1lc3NhZ2U6IFwidXNlciB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiLCB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdXBkYXRlVXNlci5faWQsXHJcbiAgICAgICAgICAgICAgICBmaXJzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0bmFtZSxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgZ2VuZGVyLFxyXG4gICAgICAgICAgICAgICAgZG9iLFxyXG4gICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlSW1hZ2U6IGltYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBcInN1Y2Nlc3NcIjogZmFsc2UsIG1lc3NhZ2U6IGVycm9yIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gZ2VuZXJhdGUgdG9rZW4gXHJcbmNvbnN0IGdlbmVyYXRlVG9rZW4gPSAoaWQpID0+IHtcclxuICAgIHJldHVybiBqd3Quc2lnbih7IGlkIH0sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIHsgZXhwaXJlc0luOiAnMzBkJyB9KVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZO0VBQUEseUZBQUcsaUJBQU9DLEdBQUcsRUFBRUMsR0FBRztJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFBQSxZQUc2RUQsR0FBRyxDQUFDRSxJQUFJLEVBQWhIQyxTQUFTLGFBQVRBLFNBQVMsRUFBRUMsUUFBUSxhQUFSQSxRQUFRLEVBQUVDLFFBQVEsYUFBUkEsUUFBUSxFQUFFQyxNQUFNLGFBQU5BLE1BQU0sRUFBRUMsS0FBSyxhQUFMQSxLQUFLLEVBQUVDLEdBQUcsYUFBSEEsR0FBRyxFQUFFQyxLQUFLLGFBQUxBLEtBQUssRUFBRUMsT0FBTyxhQUFQQSxPQUFPLEVBQUVDLFFBQVEsYUFBUkEsUUFBUSxFQUFFQyxJQUFJLGFBQUpBLElBQUksRUFBRUMsZ0JBQWdCLGFBQWhCQSxnQkFBZ0I7VUFBQSxNQUN2RyxDQUFDVixTQUFTLElBQUlBLFNBQVMsSUFBSSxFQUFFO1lBQUE7WUFBQTtVQUFBO1VBQUEsaUNBQ3RCRixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUUsU0FBUyxFQUFFLEtBQUs7WUFBRUMsT0FBTyxFQUFFO1VBQXdCLENBQUMsQ0FBQztRQUFBO1VBQUEsTUFDbkYsQ0FBQ1osUUFBUSxJQUFJQSxRQUFRLElBQUksRUFBRTtZQUFBO1lBQUE7VUFBQTtVQUFBLGlDQUNwQkgsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFLFNBQVMsRUFBRSxLQUFLO1lBQUVDLE9BQU8sRUFBRTtVQUF1QixDQUFDLENBQUM7UUFBQTtVQUFBLE1BQ2xGLENBQUNYLFFBQVEsSUFBSUEsUUFBUSxJQUFJLEVBQUU7WUFBQTtZQUFBO1VBQUE7VUFBQSxpQ0FDcEJKLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRSxTQUFTLEVBQUUsS0FBSztZQUFFQyxPQUFPLEVBQUU7VUFBdUIsQ0FBQyxDQUFDO1FBQUE7VUFBQSxNQUNsRixDQUFDVixNQUFNLElBQUlBLE1BQU0sSUFBSSxFQUFFO1lBQUE7WUFBQTtVQUFBO1VBQUEsaUNBQ2hCTCxHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUUsU0FBUyxFQUFFLEtBQUs7WUFBRUMsT0FBTyxFQUFFO1VBQXFCLENBQUMsQ0FBQztRQUFBO1VBQUEsTUFDaEYsQ0FBQ1QsS0FBSyxJQUFJQSxLQUFLLElBQUksRUFBRTtZQUFBO1lBQUE7VUFBQTtVQUFBLGlDQUNkTixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUUsU0FBUyxFQUFFLEtBQUs7WUFBRUMsT0FBTyxFQUFFO1VBQW9CLENBQUMsQ0FBQztRQUFBO1VBQUEsTUFDL0UsQ0FBQ1IsR0FBRyxJQUFJQSxHQUFHLElBQUksRUFBRTtZQUFBO1lBQUE7VUFBQTtVQUFBLGlDQUNWUCxHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUUsU0FBUyxFQUFFLEtBQUs7WUFBRUMsT0FBTyxFQUFFO1VBQWtCLENBQUMsQ0FBQztRQUFBO1VBQUEsTUFDN0UsQ0FBQ1AsS0FBSyxJQUFJQSxLQUFLLElBQUksRUFBRTtZQUFBO1lBQUE7VUFBQTtVQUFBLGlDQUNkUixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUUsU0FBUyxFQUFFLEtBQUs7WUFBRUMsT0FBTyxFQUFFO1VBQW9CLENBQUMsQ0FBQztRQUFBO1VBQUEsTUFDL0UsQ0FBQ04sT0FBTyxJQUFJQSxPQUFPLElBQUksRUFBRTtZQUFBO1lBQUE7VUFBQTtVQUFBLGlDQUNsQlQsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFLFNBQVMsRUFBRSxLQUFLO1lBQUVDLE9BQU8sRUFBRTtVQUFzQixDQUFDLENBQUM7UUFBQTtVQUFBLE1BQ2pGLENBQUNMLFFBQVEsSUFBSUEsUUFBUSxJQUFJLEVBQUU7WUFBQTtZQUFBO1VBQUE7VUFBQSxpQ0FDcEJWLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRSxTQUFTLEVBQUUsS0FBSztZQUFFQyxPQUFPLEVBQUU7VUFBdUIsQ0FBQyxDQUFDO1FBQUE7VUFBQSxNQUNsRixDQUFDSixJQUFJLElBQUlBLElBQUksSUFBSSxFQUFFO1lBQUE7WUFBQTtVQUFBO1VBQUEsaUNBQ1pYLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRSxTQUFTLEVBQUUsS0FBSztZQUFFQyxPQUFPLEVBQUU7VUFBbUIsQ0FBQyxDQUFDO1FBQUE7VUFBQSxNQUM5RSxDQUFDSCxnQkFBZ0IsSUFBSUEsZ0JBQWdCLElBQUksRUFBRTtZQUFBO1lBQUE7VUFBQTtVQUFBLGlDQUNwQ1osR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFLFNBQVMsRUFBRSxLQUFLO1lBQUVDLE9BQU8sRUFBRTtVQUErQixDQUFDLENBQUM7UUFBQTtVQUFBO1VBQUEsT0FFdEVDLHFCQUFJLENBQUNDLE9BQU8sQ0FBQztZQUFFVCxLQUFLLEVBQUxBO1VBQU0sQ0FBQyxDQUFDO1FBQUE7VUFBekNVLFNBQVM7VUFBQSxLQUNYQSxTQUFTO1lBQUE7WUFBQTtVQUFBO1VBQ1RsQixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUUsU0FBUyxFQUFFLEtBQUs7WUFBRUMsT0FBTyxFQUFFO1VBQTJCLENBQUMsQ0FBQztVQUFBO1VBQUE7UUFBQTtVQUFBLE1BRTNFTCxRQUFRLEtBQUtFLGdCQUFnQjtZQUFBO1lBQUE7VUFBQTtVQUFBLGlDQUN0QlosR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFLFNBQVMsRUFBRSxLQUFLO1lBQUVDLE9BQU8sRUFBRTtVQUF5QixDQUFDLENBQUM7UUFBQTtVQUFBO1VBQUEsT0FFckVJLG9CQUFNLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFBQTtVQUEvQkMsSUFBSTtVQUFBO1VBQUEsT0FDbUJGLG9CQUFNLENBQUNHLElBQUksQ0FBQ1osUUFBUSxFQUFFVyxJQUFJLENBQUM7UUFBQTtVQUFsREUsY0FBYztVQUNkQyxJQUFJLEdBQUcsSUFBSVIscUJBQUksQ0FBQztZQUNsQmQsU0FBUyxFQUFUQSxTQUFTO1lBQUVDLFFBQVEsRUFBUkEsUUFBUTtZQUFFQyxRQUFRLEVBQVJBLFFBQVE7WUFBRUMsTUFBTSxFQUFOQSxNQUFNO1lBQUVFLEdBQUcsRUFBSEEsR0FBRztZQUFFQyxLQUFLLEVBQUxBLEtBQUs7WUFBRUMsT0FBTyxFQUFQQSxPQUFPO1lBQUVILEtBQUssRUFBTEEsS0FBSztZQUFFSSxRQUFRLEVBQUVhLGNBQWM7WUFDekZaLElBQUksRUFBSkE7VUFDTixDQUFDLENBQUM7VUFBQTtVQUFBLE9BQ29CYSxJQUFJLENBQUNDLElBQUksRUFBRTtRQUFBO1VBQTNCQyxPQUFPO1VBQ2IxQixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsT0FBTyxFQUFFYSxhQUFhLENBQUNELE9BQU8sQ0FBQ0UsR0FBRyxDQUFDO1lBQ25DLE1BQU0sRUFBRTtjQUNKQyxFQUFFLEVBQUVILE9BQU8sQ0FBQ0UsR0FBRztjQUNmMUIsU0FBUyxFQUFUQSxTQUFTO2NBQ1RDLFFBQVEsRUFBUkEsUUFBUTtjQUNSQyxRQUFRLEVBQVJBLFFBQVE7Y0FDUkMsTUFBTSxFQUFOQSxNQUFNO2NBQ05FLEdBQUcsRUFBSEEsR0FBRztjQUNIQyxLQUFLLEVBQUxBLEtBQUs7Y0FDTEMsT0FBTyxFQUFQQSxPQUFPO2NBQ1BILEtBQUssRUFBTEEsS0FBSztjQUNMSyxJQUFJLEVBQUpBO1lBQ0o7VUFDSixDQUFDLENBQUM7UUFBQTtVQUFBO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFHTm1CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQU1oQixPQUFPLENBQUM7VUFDMUJmLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRWtCLEtBQUs7VUFBQyxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUEsQ0FFdEM7RUFBQSxnQkE5RFlsQyxZQUFZO0lBQUE7RUFBQTtBQUFBLEdBOER4QjtBQUFBO0FBRU0sSUFBTW1DLFNBQVM7RUFBQSwwRkFBRyxrQkFBT2xDLEdBQUcsRUFBRUMsR0FBRztJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFBQSxhQUVKRCxHQUFHLENBQUNFLElBQUksRUFBNUJPLEtBQUssY0FBTEEsS0FBSyxFQUFFRSxRQUFRLGNBQVJBLFFBQVE7VUFBQTtVQUFBLE9BQ0pNLHFCQUFJLENBQUNDLE9BQU8sQ0FBQztZQUFFVCxLQUFLLEVBQUxBO1VBQU0sQ0FBQyxDQUFDO1FBQUE7VUFBcENnQixJQUFJO1VBQUEsZUFDTkEsSUFBSTtVQUFBO1lBQUE7WUFBQTtVQUFBO1VBQUE7VUFBQSxPQUFXTCxvQkFBTSxDQUFDZSxPQUFPLENBQUN4QixRQUFRLEVBQUVjLElBQUksQ0FBQ2QsUUFBUSxDQUFDO1FBQUE7VUFBQTtRQUFBO1VBQUE7WUFBQTtZQUFBO1VBQUE7VUFDdERWLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDO1lBQ0wsU0FBUyxFQUFFLElBQUk7WUFDZixPQUFPLEVBQUVhLGFBQWEsQ0FBQ0gsSUFBSSxDQUFDSSxHQUFHLENBQUM7WUFDaENKLElBQUksRUFBRTtjQUNGSyxFQUFFLEVBQUVMLElBQUksQ0FBQ0ksR0FBRztjQUNaeEIsUUFBUSxFQUFFb0IsSUFBSSxDQUFDcEIsUUFBUTtjQUN2QkYsU0FBUyxFQUFFc0IsSUFBSSxDQUFDdEIsU0FBUztjQUN6QkMsUUFBUSxFQUFFcUIsSUFBSSxDQUFDckIsUUFBUTtjQUN2QkUsTUFBTSxFQUFFbUIsSUFBSSxDQUFDbkIsTUFBTTtjQUNuQkksT0FBTyxFQUFFZSxJQUFJLENBQUNmLE9BQU87Y0FDckJELEtBQUssRUFBRWdCLElBQUksQ0FBQ2hCLEtBQUs7Y0FDakJHLElBQUksRUFBRWEsSUFBSSxDQUFDYixJQUFJO2NBQ2ZMLEtBQUssRUFBRWtCLElBQUksQ0FBQ2xCLEtBQUs7Y0FDakI2QixHQUFHLEVBQUVYLElBQUksQ0FBQ1csR0FBRztjQUNiQyxZQUFZLEVBQUVaLElBQUksQ0FBQ1k7WUFFdkI7VUFDSixDQUFDLENBQUM7VUFBQTtVQUFBO1FBQUE7VUFFRHBDLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDO1lBQUUsU0FBUyxFQUFFLEtBQUs7WUFBRUMsT0FBTyxFQUFFO1VBQW9CLENBQUMsQ0FBQyxDQUFDRixNQUFNLENBQUMsR0FBRyxDQUFDO1FBQUE7VUFBQTtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBRzdFYixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUUsU0FBUyxFQUFFLEtBQUs7WUFBRUMsT0FBTztVQUFRLENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQSxDQUVqRTtFQUFBLGdCQTdCWWtCLFNBQVM7SUFBQTtFQUFBO0FBQUEsR0E2QnJCO0FBQUE7QUFFTSxJQUFNSSxjQUFjO0VBQUEsMEZBQUcsa0JBQU90QyxHQUFHLEVBQUVDLEdBQUc7SUFBQTtJQUFBO01BQUE7UUFBQTtVQUN6QyxJQUFJO1lBQ013QixJQUFJLEdBQUd6QixHQUFHLENBQUN5QixJQUFJO1lBQ3JCeEIsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztjQUFFLFNBQVMsRUFBRSxJQUFJO2NBQUVDLE9BQU8sRUFBRSxjQUFjO2NBQUV1QixJQUFJLEVBQUVkO1lBQUssQ0FBQyxDQUFDO1VBQ2xGLENBQUMsQ0FBQyxPQUFPUSxLQUFLLEVBQUU7WUFDWmhDLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Y0FBRSxTQUFTLEVBQUUsS0FBSztjQUFFQyxPQUFPLEVBQUVpQjtZQUFNLENBQUMsQ0FBQztZQUMxREYsT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUssQ0FBQztVQUN0QjtRQUFDO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQSxDQUNKO0VBQUEsZ0JBUllLLGNBQWM7SUFBQTtFQUFBO0FBQUEsR0FRMUI7QUFBQTtBQUVNLElBQU1FLGlCQUFpQjtFQUFBLDBGQUFHLGtCQUFPeEMsR0FBRyxFQUFFQyxHQUFHO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUVsQ3dDLE9BQU8sR0FBR3pDLEdBQUcsQ0FBQ3lCLElBQUksQ0FBQ0ksR0FBRztVQUFBLGFBQ2tEN0IsR0FBRyxDQUFDRSxJQUFJLEVBQTlFQyxTQUFTLGNBQVRBLFNBQVMsRUFBRUMsUUFBUSxjQUFSQSxRQUFRLEVBQUVDLFFBQVEsY0FBUkEsUUFBUSxFQUFFQyxNQUFNLGNBQU5BLE1BQU0sRUFBRUksT0FBTyxjQUFQQSxPQUFPLEVBQUVELEtBQUssY0FBTEEsS0FBSyxFQUFFRixLQUFLLGNBQUxBLEtBQUssRUFBRTZCLEdBQUcsY0FBSEEsR0FBRztVQUFBLE1BRXJFLENBQUNqQyxTQUFTLElBQUlBLFNBQVMsSUFBSSxFQUFFO1lBQUE7WUFBQTtVQUFBO1VBQUEsa0NBQ3RCRixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUUsU0FBUyxFQUFFLEtBQUs7WUFBRUMsT0FBTyxFQUFFO1VBQXdCLENBQUMsQ0FBQztRQUFBO1VBQUEsTUFDbkYsQ0FBQ1osUUFBUSxJQUFJQSxRQUFRLElBQUksRUFBRTtZQUFBO1lBQUE7VUFBQTtVQUFBLGtDQUNwQkgsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFLFNBQVMsRUFBRSxLQUFLO1lBQUVDLE9BQU8sRUFBRTtVQUF1QixDQUFDLENBQUM7UUFBQTtVQUFBLE1BQ2xGLENBQUNYLFFBQVEsSUFBSUEsUUFBUSxJQUFJLEVBQUU7WUFBQTtZQUFBO1VBQUE7VUFBQSxrQ0FDcEJKLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRSxTQUFTLEVBQUUsS0FBSztZQUFFQyxPQUFPLEVBQUU7VUFBdUIsQ0FBQyxDQUFDO1FBQUE7VUFBQSxNQUNsRixDQUFDVixNQUFNLElBQUlBLE1BQU0sSUFBSSxFQUFFO1lBQUE7WUFBQTtVQUFBO1VBQUEsa0NBQ2hCTCxHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUUsU0FBUyxFQUFFLEtBQUs7WUFBRUMsT0FBTyxFQUFFO1VBQXFCLENBQUMsQ0FBQztRQUFBO1VBQUEsTUFDaEYsQ0FBQ04sT0FBTyxJQUFJQSxPQUFPLElBQUksRUFBRTtZQUFBO1lBQUE7VUFBQTtVQUFBLGtDQUNsQlQsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFLFNBQVMsRUFBRSxLQUFLO1lBQUVDLE9BQU8sRUFBRTtVQUFzQixDQUFDLENBQUM7UUFBQTtVQUFBLE1BQ2pGLENBQUNQLEtBQUssSUFBSUEsS0FBSyxJQUFJLEVBQUU7WUFBQTtZQUFBO1VBQUE7VUFBQSxrQ0FDZFIsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFLFNBQVMsRUFBRSxLQUFLO1lBQUVDLE9BQU8sRUFBRTtVQUFvQixDQUFDLENBQUM7UUFBQTtVQUFBLE1BQy9FLENBQUNULEtBQUssSUFBSUEsS0FBSyxJQUFJLEVBQUU7WUFBQTtZQUFBO1VBQUE7VUFBQSxrQ0FDZE4sR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFLFNBQVMsRUFBRSxLQUFLO1lBQUVDLE9BQU8sRUFBRTtVQUFvQixDQUFDLENBQUM7UUFBQTtVQUFBLE1BQy9FLENBQUNvQixHQUFHLElBQUlBLEdBQUcsSUFBSSxFQUFFO1lBQUE7WUFBQTtVQUFBO1VBQUEsa0NBQ1ZuQyxHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUUsU0FBUyxFQUFFLEtBQUs7WUFBRUMsT0FBTyxFQUFFO1VBQWtCLENBQUMsQ0FBQztRQUFBO1VBRTdFMEIsS0FBSyxHQUFHLEVBQUU7VUFBQSxLQUNWMUMsR0FBRyxDQUFDMkMsS0FBSztZQUFBO1lBQUE7VUFBQTtVQUFBO1VBQUEsT0FDSyxJQUFBQyx1QkFBYSxFQUFDNUMsR0FBRyxDQUFDO1FBQUE7VUFBaEMwQyxLQUFLO1VBQ0xBLEtBQUssR0FBR0EsS0FBSyxDQUFDRyxHQUFHO1FBQUE7VUFBQTtVQUFBLE9BR0k1QixxQkFBSSxDQUFDNkIsaUJBQWlCLENBQUNMLE9BQU8sRUFBRTtZQUNyRHRDLFNBQVMsRUFBVEEsU0FBUztZQUNUQyxRQUFRLEVBQVJBLFFBQVE7WUFDUkMsUUFBUSxFQUFSQSxRQUFRO1lBQ1JDLE1BQU0sRUFBTkEsTUFBTTtZQUNOOEIsR0FBRyxFQUFIQSxHQUFHO1lBQ0gzQixLQUFLLEVBQUxBLEtBQUs7WUFDTEMsT0FBTyxFQUFQQSxPQUFPO1lBQ1BILEtBQUssRUFBTEEsS0FBSztZQUNMOEIsWUFBWSxFQUFFSztVQUNsQixDQUFDLEVBQUU7WUFBRSxPQUFLO1VBQUssQ0FBQyxDQUFDO1FBQUE7VUFWWEssVUFBVTtVQVdoQjlDLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDakIsU0FBUyxFQUFFLElBQUk7WUFBRUMsT0FBTyxFQUFFLDJCQUEyQjtZQUFFUyxJQUFJLEVBQUU7Y0FDekRLLEVBQUUsRUFBRWlCLFVBQVUsQ0FBQ2xCLEdBQUc7Y0FDbEIxQixTQUFTLEVBQVRBLFNBQVM7Y0FDVEMsUUFBUSxFQUFSQSxRQUFRO2NBQ1JDLFFBQVEsRUFBUkEsUUFBUTtjQUNSQyxNQUFNLEVBQU5BLE1BQU07Y0FDTjhCLEdBQUcsRUFBSEEsR0FBRztjQUNIM0IsS0FBSyxFQUFMQSxLQUFLO2NBQ0xDLE9BQU8sRUFBUEEsT0FBTztjQUNQSCxLQUFLLEVBQUxBLEtBQUs7Y0FDTDhCLFlBQVksRUFBRUs7WUFDbEI7VUFDSixDQUFDLENBQUM7VUFBQTtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBR0Z6QyxHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUUsU0FBUyxFQUFFLEtBQUs7WUFBRUMsT0FBTztVQUFRLENBQUMsQ0FBQztVQUMxRGUsT0FBTyxDQUFDQyxHQUFHLGNBQU87UUFBQTtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUEsQ0FFekI7RUFBQSxnQkExRFlRLGlCQUFpQjtJQUFBO0VBQUE7QUFBQSxHQTBEN0I7O0FBSUQ7QUFBQTtBQUNBLElBQU1aLGFBQWEsR0FBRyxTQUFoQkEsYUFBYSxDQUFJRSxFQUFFLEVBQUs7RUFDMUIsT0FBT2tCLHdCQUFHLENBQUNDLElBQUksQ0FBQztJQUFFbkIsRUFBRSxFQUFGQTtFQUFHLENBQUMsRUFBRW9CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLEVBQUU7SUFBRUMsU0FBUyxFQUFFO0VBQU0sQ0FBQyxDQUFDO0FBQ3pFLENBQUMifQ==
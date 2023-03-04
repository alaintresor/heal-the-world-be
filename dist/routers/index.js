"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userRoute = _interopRequireDefault(require("./userRoute.js"));
var _postRoute = _interopRequireDefault(require("./postRoute.js"));
var router = _express["default"].Router();
router.use('/user', _userRoute["default"]);
router.use('/post', _postRoute["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwidXNlIiwidXNlclJvdXRlciIsInBvc3RSb3V0ZXIiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVycy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgdXNlclJvdXRlciBmcm9tIFwiLi91c2VyUm91dGUuanNcIlxyXG5pbXBvcnQgcG9zdFJvdXRlciBmcm9tIFwiLi9wb3N0Um91dGUuanNcIlxyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxyXG5cclxucm91dGVyLnVzZSgnL3VzZXInLCB1c2VyUm91dGVyKVxyXG5yb3V0ZXIudXNlKCcvcG9zdCcsIHBvc3RSb3V0ZXIpXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUNDLE1BQU0sRUFBRTtBQUUvQkYsTUFBTSxDQUFDRyxHQUFHLENBQUMsT0FBTyxFQUFFQyxxQkFBVSxDQUFDO0FBQy9CSixNQUFNLENBQUNHLEdBQUcsQ0FBQyxPQUFPLEVBQUVFLHFCQUFVLENBQUM7QUFBQSxlQUVoQkwsTUFBTTtBQUFBIn0=
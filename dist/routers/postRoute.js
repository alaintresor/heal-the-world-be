"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _protectRoute = _interopRequireDefault(require("../middleware/protectRoute.js"));
var _postController = require("../controllers/postController.js");
var router = _express["default"].Router();
router.get('/', _protectRoute["default"], _postController.getAllPosts);
router.get('/:postId', _protectRoute["default"], _postController.getSinglePost);
router.post('/add', _protectRoute["default"], _postController.createPost);
// ................comments ...................
router.post('/:postId/comment', _protectRoute["default"], _postController.commentingOnPost);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwiZ2V0IiwicHJvdGVjdCIsImdldEFsbFBvc3RzIiwiZ2V0U2luZ2xlUG9zdCIsInBvc3QiLCJjcmVhdGVQb3N0IiwiY29tbWVudGluZ09uUG9zdCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXJzL3Bvc3RSb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgcHJvdGVjdCBmcm9tIFwiLi4vbWlkZGxld2FyZS9wcm90ZWN0Um91dGUuanNcIlxyXG5pbXBvcnQgeyBjb21tZW50aW5nT25Qb3N0LCBjcmVhdGVQb3N0LCBnZXRBbGxQb3N0cywgZ2V0U2luZ2xlUG9zdCB9IGZyb20gXCIuLi9jb250cm9sbGVycy9wb3N0Q29udHJvbGxlci5qc1wiO1xyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsIHByb3RlY3QsIGdldEFsbFBvc3RzKVxyXG5yb3V0ZXIuZ2V0KCcvOnBvc3RJZCcsIHByb3RlY3QsIGdldFNpbmdsZVBvc3QpXHJcbnJvdXRlci5wb3N0KCcvYWRkJywgcHJvdGVjdCwgY3JlYXRlUG9zdClcclxuLy8gLi4uLi4uLi4uLi4uLi4uLmNvbW1lbnRzIC4uLi4uLi4uLi4uLi4uLi4uLi5cclxucm91dGVyLnBvc3QoJy86cG9zdElkL2NvbW1lbnQnLCBwcm90ZWN0LCBjb21tZW50aW5nT25Qb3N0KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQ0MsTUFBTSxFQUFFO0FBRS9CRixNQUFNLENBQUNHLEdBQUcsQ0FBQyxHQUFHLEVBQUVDLHdCQUFPLEVBQUVDLDJCQUFXLENBQUM7QUFDckNMLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLFVBQVUsRUFBRUMsd0JBQU8sRUFBRUUsNkJBQWEsQ0FBQztBQUM5Q04sTUFBTSxDQUFDTyxJQUFJLENBQUMsTUFBTSxFQUFFSCx3QkFBTyxFQUFFSSwwQkFBVSxDQUFDO0FBQ3hDO0FBQ0FSLE1BQU0sQ0FBQ08sSUFBSSxDQUFDLGtCQUFrQixFQUFFSCx3QkFBTyxFQUFFSyxnQ0FBZ0IsQ0FBQztBQUFBLGVBRzNDVCxNQUFNO0FBQUEifQ==
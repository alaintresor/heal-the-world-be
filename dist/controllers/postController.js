"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSinglePost = exports.getAllPosts = exports.deletePost = exports.createPost = exports.commentingOnPost = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _post = _interopRequireDefault(require("../models/post.js"));
var _photoUpload = _interopRequireDefault(require("../helpers/photoUpload.js"));
var createPost = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user, content, image, post, newPost;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          user = req.user;
          content = req.body.content;
          if (!(!content || content == "")) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            "success": false,
            message: "content is required"
          }));
        case 5:
          image = '';
          if (!req.files) {
            _context.next = 11;
            break;
          }
          _context.next = 9;
          return (0, _photoUpload["default"])(req);
        case 9:
          image = _context.sent;
          image = image.url;
        case 11:
          post = new _post["default"]({
            user: user._id,
            content: content,
            image: image
          });
          _context.next = 14;
          return post.save();
        case 14:
          newPost = _context.sent;
          res.status(201).json({
            "success": true,
            "post": {
              id: newPost._id,
              content: content,
              image: newPost.image,
              comments: newPost.comments,
              postedDate: newPost.postedDate
            }
          });
          _context.next = 22;
          break;
        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            error: _context.t0
          });
        case 22:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 18]]);
  }));
  return function createPost(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createPost = createPost;
var getAllPosts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var posts;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _post["default"].find().populate('user', '-password');
        case 3:
          posts = _context2.sent;
          res.status(200).json({
            "success": true,
            posts: posts
          });
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            "success": false,
            message: _context2.t0
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getAllPosts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAllPosts = getAllPosts;
var getSinglePost = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var postId, post;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          postId = req.params.postId;
          _context3.next = 4;
          return _post["default"].findById(postId).populate('user', '-password');
        case 4:
          post = _context3.sent;
          res.status(200).json({
            "success": true,
            post: post
          });
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            "success": false,
            message: _context3.t0
          });
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function getSinglePost(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getSinglePost = getSinglePost;
var deletePost = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var user, postId, post;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          user = req.user;
          postId = req.params.postId;
          _context4.next = 5;
          return _post["default"].findById(postId);
        case 5:
          post = _context4.sent;
          if (post) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            "success": false,
            message: "post doesn't exist"
          }));
        case 8:
          if (!(post.user !== user._id)) {
            _context4.next = 10;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            "success": false,
            message: "this post doesn't belong to you"
          }));
        case 10:
          _context4.next = 12;
          return _post["default"].deleteOne({
            _id: postId
          });
        case 12:
          res.status(200).json({
            "success": true,
            message: "post deleted successful"
          });
          _context4.next = 18;
          break;
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            "success": false,
            message: _context4.t0
          });
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 15]]);
  }));
  return function deletePost(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deletePost = deletePost;
var commentingOnPost = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var postId, user, comment, post, newComment;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          postId = req.params.postId;
          user = req.user;
          comment = req.body.comment;
          if (!(!comment || comment == '')) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(200).json({
            "success": false,
            message: "comment is required!"
          }));
        case 6:
          _context5.next = 8;
          return _post["default"].findById(postId);
        case 8:
          post = _context5.sent;
          if (post) {
            _context5.next = 11;
            break;
          }
          return _context5.abrupt("return", res.status(200).json({
            "success": false,
            message: "Invalid post id"
          }));
        case 11:
          newComment = {
            user: user._id,
            comment: comment,
            postedDate: new Date()
          };
          post.comments.push(newComment);
          _context5.next = 15;
          return post.save();
        case 15:
          // const posts = await Post.findById(postId)
          //     .populate('user', '-password')
          res.status(200).json({
            "success": true,
            post: post
          });
          _context5.next = 21;
          break;
        case 18:
          _context5.prev = 18;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            "success": false,
            message: _context5.t0
          });
        case 21:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 18]]);
  }));
  return function commentingOnPost(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.commentingOnPost = commentingOnPost;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVQb3N0IiwicmVxIiwicmVzIiwidXNlciIsImNvbnRlbnQiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJpbWFnZSIsImZpbGVzIiwiaW1hZ2VVcGxvYWRlciIsInVybCIsInBvc3QiLCJQb3N0IiwiX2lkIiwic2F2ZSIsIm5ld1Bvc3QiLCJpZCIsImNvbW1lbnRzIiwicG9zdGVkRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImdldEFsbFBvc3RzIiwiZmluZCIsInBvcHVsYXRlIiwicG9zdHMiLCJnZXRTaW5nbGVQb3N0IiwicG9zdElkIiwicGFyYW1zIiwiZmluZEJ5SWQiLCJkZWxldGVQb3N0IiwiZGVsZXRlT25lIiwiY29tbWVudGluZ09uUG9zdCIsImNvbW1lbnQiLCJuZXdDb21tZW50IiwiRGF0ZSIsInB1c2giXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvcG9zdENvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3QgZnJvbSBcIi4uL21vZGVscy9wb3N0LmpzXCJcclxuaW1wb3J0IGltYWdlVXBsb2FkZXIgZnJvbSAnLi4vaGVscGVycy9waG90b1VwbG9hZC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgeyB1c2VyIH0gPSByZXFcclxuICAgICAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgaWYgKCFjb250ZW50IHx8IGNvbnRlbnQgPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgXCJzdWNjZXNzXCI6IGZhbHNlLCBtZXNzYWdlOiBcImNvbnRlbnQgaXMgcmVxdWlyZWRcIiB9KVxyXG5cclxuICAgICAgICBsZXQgaW1hZ2UgPSAnJ1xyXG4gICAgICAgIGlmIChyZXEuZmlsZXMpIHtcclxuICAgICAgICAgICAgaW1hZ2UgPSBhd2FpdCBpbWFnZVVwbG9hZGVyKHJlcSlcclxuICAgICAgICAgICAgaW1hZ2UgPSBpbWFnZS51cmxcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCBwb3N0ID0gbmV3IFBvc3Qoe1xyXG4gICAgICAgICAgICB1c2VyOiB1c2VyLl9pZCxcclxuICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBhd2FpdCBwb3N0LnNhdmUoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcclxuICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwicG9zdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogbmV3UG9zdC5faWQsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG5ld1Bvc3QuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50czogbmV3UG9zdC5jb21tZW50cyxcclxuICAgICAgICAgICAgICAgIHBvc3RlZERhdGU6IG5ld1Bvc3QucG9zdGVkRGF0ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3IgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbFBvc3RzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgUG9zdC5maW5kKClcclxuICAgICAgICAgICAgLnBvcHVsYXRlKCd1c2VyJywgJy1wYXNzd29yZCcpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgcG9zdHNcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBcInN1Y2Nlc3NcIjogZmFsc2UsIG1lc3NhZ2U6IGVycm9yIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldFNpbmdsZVBvc3QgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBwb3N0SWQgfSA9IHJlcS5wYXJhbXNcclxuICAgICAgICBjb25zdCBwb3N0ID0gYXdhaXQgUG9zdC5maW5kQnlJZChwb3N0SWQpXHJcbiAgICAgICAgICAgIC5wb3B1bGF0ZSgndXNlcicsICctcGFzc3dvcmQnKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHRydWUsXHJcbiAgICAgICAgICAgIHBvc3RcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBcInN1Y2Nlc3NcIjogZmFsc2UsIG1lc3NhZ2U6IGVycm9yIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBvc3QgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VyIH0gPSByZXFcclxuICAgICAgICBjb25zdCB7IHBvc3RJZCB9ID0gcmVxLnBhcmFtc1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBQb3N0LmZpbmRCeUlkKHBvc3RJZClcclxuICAgICAgICBpZiAoIXBvc3QpXHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IFwic3VjY2Vzc1wiOiBmYWxzZSwgbWVzc2FnZTogXCJwb3N0IGRvZXNuJ3QgZXhpc3RcIiB9KVxyXG4gICAgICAgIGlmIChwb3N0LnVzZXIgIT09IHVzZXIuX2lkKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBcInN1Y2Nlc3NcIjogZmFsc2UsIG1lc3NhZ2U6IFwidGhpcyBwb3N0IGRvZXNuJ3QgYmVsb25nIHRvIHlvdVwiIH0pXHJcblxyXG4gICAgICAgIGF3YWl0IFBvc3QuZGVsZXRlT25lKHsgX2lkOiBwb3N0SWQgfSlcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB0cnVlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcInBvc3QgZGVsZXRlZCBzdWNjZXNzZnVsXCJcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBcInN1Y2Nlc3NcIjogZmFsc2UsIG1lc3NhZ2U6IGVycm9yIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb21tZW50aW5nT25Qb3N0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgcG9zdElkIH0gPSByZXEucGFyYW1zXHJcbiAgICAgICAgY29uc3QgeyB1c2VyIH0gPSByZXFcclxuICAgICAgICBjb25zdCB7IGNvbW1lbnQgfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgaWYgKCFjb21tZW50IHx8IGNvbW1lbnQgPT0gJycpXHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IFwic3VjY2Vzc1wiOiBmYWxzZSwgbWVzc2FnZTogXCJjb21tZW50IGlzIHJlcXVpcmVkIVwiIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBQb3N0LmZpbmRCeUlkKHBvc3RJZClcclxuICAgICAgICBpZiAoIXBvc3QpXHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IFwic3VjY2Vzc1wiOiBmYWxzZSwgbWVzc2FnZTogXCJJbnZhbGlkIHBvc3QgaWRcIiB9KVxyXG5cclxuICAgICAgICBjb25zdCBuZXdDb21tZW50ID0ge1xyXG4gICAgICAgICAgICB1c2VyOiB1c2VyLl9pZCxcclxuICAgICAgICAgICAgY29tbWVudCxcclxuICAgICAgICAgICAgcG9zdGVkRGF0ZTogbmV3IERhdGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9zdC5jb21tZW50cy5wdXNoKG5ld0NvbW1lbnQpXHJcbiAgICAgICAgYXdhaXQgcG9zdC5zYXZlKClcclxuXHJcbiAgICAgICAgLy8gY29uc3QgcG9zdHMgPSBhd2FpdCBQb3N0LmZpbmRCeUlkKHBvc3RJZClcclxuICAgICAgICAvLyAgICAgLnBvcHVsYXRlKCd1c2VyJywgJy1wYXNzd29yZCcpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcclxuICAgICAgICAgICAgcG9zdFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IFwic3VjY2Vzc1wiOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxVQUFVO0VBQUEseUZBQUcsaUJBQU9DLEdBQUcsRUFBRUMsR0FBRztJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFHekJDLElBQUksR0FBS0YsR0FBRyxDQUFaRSxJQUFJO1VBQ0pDLE9BQU8sR0FBS0gsR0FBRyxDQUFDSSxJQUFJLENBQXBCRCxPQUFPO1VBQUEsTUFDWCxDQUFDQSxPQUFPLElBQUlBLE9BQU8sSUFBSSxFQUFFO1lBQUE7WUFBQTtVQUFBO1VB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
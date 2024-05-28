"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrarProducto = exports.modificarProducto = exports.listarProducto = exports.eliminarProducto = exports.crearProducto = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mysql = require("../config/mysql.db");
var mostrarProducto = exports.mostrarProducto = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          id = req.params.id;
          _context.prev = 1;
          _context.next = 4;
          return _mysql.pool.query("CALL SP_MOSTRAR_PRODUCTO (?)", [id]);
        case 4:
          respuesta = _context.sent;
          res.json({
            "respuesta": respuesta[0]
          });
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.json({
            "error": _context.t0
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function mostrarProducto(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var listarProducto = exports.listarProducto = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _mysql.pool.query("CALL SP_LISTAR_PRODUCTO()");
        case 3:
          respuesta = _context2.sent;
          res.json({
            "respuesta": respuesta[0]
          });
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.json({
            "error": _context2.t0
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function listarProducto(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var crearProducto = exports.crearProducto = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, idproducto, producto, categoria, preciou, descripcion, respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, idproducto = _req$body.idproducto, producto = _req$body.producto, categoria = _req$body.categoria, preciou = _req$body.preciou, descripcion = _req$body.descripcion;
          _context3.prev = 1;
          _context3.next = 4;
          return _mysql.pool.query("CALL SP_CREAR_PRODUCTO (\"".concat(idproducto, "\",\"").concat(producto, "\", \"").concat(categoria, "\",\"").concat(preciou, "\", \"").concat(descripcion, "\");"));
        case 4:
          respuesta = _context3.sent;
          res.json({
            "respuesta": "El producto se agrego exitosamente"
          });
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          res.json({
            "error": "El producto no se agrego"
          });
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return function crearProducto(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var modificarProducto = exports.modificarProducto = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, idproducto, producto, categoria, preciou, descripcion, respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body2 = req.body, idproducto = _req$body2.idproducto, producto = _req$body2.producto, categoria = _req$body2.categoria, preciou = _req$body2.preciou, descripcion = _req$body2.descripcion;
          _context4.prev = 1;
          _context4.next = 4;
          return _mysql.pool.query("CALL SP_MODIFICAR_PRODUCTO (\"".concat(idproducto, "\", \"").concat(producto, "\",\"").concat(categoria, "\", \"").concat(preciou, "\", \"").concat(descripcion, "\");"));
        case 4:
          respuesta = _context4.sent;
          res.json({
            "respuesta": "el producto ha sido modificado"
          });
          _context4.next = 11;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          res.json({
            "error": "el producto no ha sido modificado"
          });
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return function modificarProducto(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var eliminarProducto = exports.eliminarProducto = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.body.id;
          _context5.prev = 1;
          _context5.next = 4;
          return _mysql.pool.query("CALL SP_ELIMINAR_PRODUCTO (\"".concat(id, "\");"));
        case 4:
          respuesta = _context5.sent;
          res.json({
            "respuesta": "el producto fue eliminado"
          });
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          res.json({
            "error": "el producto no fue eliminado"
          });
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function eliminarProducto(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
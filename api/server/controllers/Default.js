'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.deletePOST = function deletePOST (req, res, next) {
  Default.deletePOST(req.swagger.params, res, next);
};

module.exports.readPOST = function readPOST (req, res, next) {
  Default.readPOST(req.swagger.params, res, next);
};

module.exports.servicePOST = function servicePOST (req, res, next) {
  Default.servicePOST(req.swagger.params, res, next);
};

module.exports.storePOST = function storePOST (req, res, next) {
  Default.storePOST(req.swagger.params, res, next);
};

module.exports.updatePOST = function updatePOST (req, res, next) {
  Default.updatePOST(req.swagger.params, res, next);
};

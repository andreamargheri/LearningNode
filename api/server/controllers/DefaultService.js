'use strict';

exports.deletePOST = function(args, res, next) {
  /**
   * This endpoint is used to remove a policy by an id. 
   *
   * body Delete-body Body in JSON
   * returns response
   **/
  var examples = {};
  examples['application/json'] = {
  "message" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.readPOST = function(args, res, next) {
  /**
   * This endpoint is used to retrieve a policy by an id. 
   *
   * body Read-body Body in JSON
   * returns read-response
   **/
  var examples = {};
  examples['application/json'] = {
  "expirationTime" : "aeiou",
  "policy" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.servicePOST = function(args, res, next) {
  /**
   * This endpoint is used to retrieve a set of policies using a service identifier. 
   *
   * body Service-body Body in JSON
   * returns service-response
   **/
  var examples = {};
  examples['application/json'] = {
  "list" : [ {
    "id" : "aeiou",
    "policy" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.storePOST = function(args, res, next) {
  /**
   * This endpoint is used to store a new policy. 
   *
   * body Store-body Body in JSON
   * returns response
   **/
  var examples = {};
  examples['application/json'] = {
  "message" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updatePOST = function(args, res, next) {
  /**
   * This endpoint is used to update a policy by an id. 
   *
   * body Update-body Body in JSON
   * returns response
   **/
  var examples = {};
  examples['application/json'] = {
  "message" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}


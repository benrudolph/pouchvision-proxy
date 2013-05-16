/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var cors_proxy = require("corsproxy");
var http_proxy = require("http-proxy");

cors_proxy.options = { target: 'http://pouchvision.iriscouch.com/' }
http_proxy.createServer(cors_proxy).listen(2020);

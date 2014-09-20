/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var cors_proxy = require("corsproxy");
var http_proxy = require("http-proxy");

http_proxy.createServer(cors_proxy).listen(2020);

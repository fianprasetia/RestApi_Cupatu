const usr_login = require("./usr_login");
const usr_wallet = require("./usr_wallet");
const adm_banner = require("./adm_banner");
const usr_testimonial = require("./usr_testimonial");
const usr_register = require("./usr_register");
const usr_forgot = require("./usr_forgot");
const adm_service = require("./adm_service");
const usr_order = require("./usr_order");
const controller = {};

controller.adm_service = adm_service;
controller.usr_forgot = usr_forgot;
controller.usr_register = usr_register;
controller.usr_testimonial = usr_testimonial;
controller.adm_banner = adm_banner;
controller.usr_login = usr_login;
controller.usr_wallet = usr_wallet;
controller.usr_order = usr_order;
module.exports = controller;

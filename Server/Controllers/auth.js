"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessSignIn = exports.ProcessSignUp = exports.ProcessHome = void 0;
const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
function ProcessHome(req, res, next) {
    res.send('You are at the Home Route!');
}
exports.ProcessHome = ProcessHome;
function ProcessSignUp(req, res, next) {
    () => __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const newUser = new User({ email, password });
            yield newUser.save();
            const token = jwt.sign({ userId: newUser._id }, process.env.SECRET);
            res.send({ token });
        }
        catch (err) {
            return res.status(422).send(err.message);
        }
    });
}
exports.ProcessSignUp = ProcessSignUp;
function ProcessSignIn(req, res, next) {
    () => __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).send({ error: 'Must provide an email and password' });
        }
        const user = yield User.findOne({ email });
        if (!user) {
            return res.status(404).send({ error: 'Invalid password or email' });
        }
        try {
            yield user.comparePassword(password);
            const token = jwt.sign({ userId: user._id }, process.env.SECRET);
            return res.send({ token });
        }
        catch (err) {
            return res.status(422).send({ error: 'Invalid password or email' });
        }
    });
}
exports.ProcessSignIn = ProcessSignIn;
//# sourceMappingURL=auth.js.map
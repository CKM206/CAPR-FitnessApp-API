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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteExercise = exports.UpdateExercise = exports.NewExercise = exports.GetExercise = exports.GetExercises = void 0;
const Exercise_1 = __importDefault(require("../Models/Exercise"));
function GetExercises(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.user.id;
        console.log(userId);
        try {
            const exercises = yield Exercise_1.default.find({ $or: [{ isDefault: true }, { userId: userId }] });
            return res.send(exercises);
        }
        catch (err) {
            return res.status(422).send(err.message);
        }
    });
}
exports.GetExercises = GetExercises;
;
function GetExercise(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const exercise = yield Exercise_1.default.findById(req.params.id);
            if (!exercise) {
                return res.status(404).send({ error: 'Couldn\'t find an Exercise with that Id' });
            }
            return res.send(exercise);
        }
        catch (err) {
            return res.status(422).send(err.message);
        }
    });
}
exports.GetExercise = GetExercise;
;
function NewExercise(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, exerciseType, muscles, force, equipment } = req.body;
        const userId = req.user.id;
        const isDefault = false;
        console.log(userId);
        try {
            if (!name || !exerciseType || !muscles || !force || !equipment) {
                return res.status(422).send({ error: 'Important Exercise Properties Missing!' });
            }
            const newExercise = new Exercise_1.default({ name, exerciseType, muscles, force, equipment, isDefault, userId: userId });
            console.log(newExercise);
            yield newExercise.save();
            res.send(newExercise);
        }
        catch (err) {
            return res.status(422).send(err.message);
        }
    });
}
exports.NewExercise = NewExercise;
;
function UpdateExercise(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, exerciseType, isDefault } = req.body;
        console.log("Hello");
        try {
            const exercise = yield Exercise_1.default.findById(req.params.id);
            if (!exercise) {
                return res.status(404).send({ error: 'Couldn\'t find an Exercise with that Id' });
            }
            if (!name || !exerciseType || !req.body.hasOwnProperty('isDefault') || isDefault === null) {
                return res.status(422).send({ error: 'Import Exercise Properties Missing!' });
            }
            const newExercise = yield Exercise_1.default.findOneAndReplace({ _id: req.params.id }, req.body, { returnDocument: 'after' });
            return res.send(newExercise);
        }
        catch (err) {
            return res.status(422).send(err.message);
        }
    });
}
exports.UpdateExercise = UpdateExercise;
;
function DeleteExercise(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const exercise = yield Exercise_1.default.findById(req.params.id);
            console.log(exercise.id);
            if (!exercise) {
                return res.status(404).send({ error: 'Couldn\'t find an Exercise with that Id' });
            }
            yield Exercise_1.default.findByIdAndDelete(exercise.id);
            return res.send(exercise);
        }
        catch (err) {
            return res.status(422).send(err.message);
        }
        return res.send('Made it to the Delete Exercise Method');
    });
}
exports.DeleteExercise = DeleteExercise;
;
//# sourceMappingURL=exercise.js.map
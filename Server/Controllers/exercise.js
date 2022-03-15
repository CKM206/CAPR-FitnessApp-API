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
        try {
            const exercises = yield Exercise_1.default.find();
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
    return res.send('Made it to the Get 1 Exercise Method');
}
exports.GetExercise = GetExercise;
;
function NewExercise(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, exerciseType, setType, isDefault } = req.body;
        try {
            if (!name || !exerciseType || !setType || !req.body.hasOwnProperty('isDefault') || isDefault === null) {
                return res.status(422).send({ error: 'Import Exercise Properties Missing!' });
            }
            const newExercise = new Exercise_1.default(req.body);
            yield newExercise.save();
            res.send({ newExercise });
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
        return res.send('Made it to the Update Exercise Method');
    });
}
exports.UpdateExercise = UpdateExercise;
;
function DeleteExercise(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.send('Made it to the Delete Exercise Method');
    });
}
exports.DeleteExercise = DeleteExercise;
;
//# sourceMappingURL=exercise.js.map
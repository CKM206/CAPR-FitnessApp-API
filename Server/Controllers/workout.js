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
exports.NewWorkout = exports.GetWorkouts = void 0;
const Workout_1 = __importDefault(require("../Models/Workout"));
function GetWorkouts(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const workouts = yield Workout_1.default.find();
            return res.send(workouts);
        }
        catch (err) {
            return res.status(422).send(err.message);
        }
    });
}
exports.GetWorkouts = GetWorkouts;
;
function NewWorkout(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { workoutInformation, exercises, timeFinished } = req.body;
        const userId = req.user.id;
        const { title, note, timeStarted } = workoutInformation;
        const { sets } = exercises[0];
        console.log(sets);
        try {
            const newWorkout = new Workout_1.default({ title, note, timeStarted, timeFinished, exercises, userId });
            yield newWorkout.save();
            res.send(req.body);
        }
        catch (err) {
            return res.status(422).send(err.message);
        }
    });
}
exports.NewWorkout = NewWorkout;
;
//# sourceMappingURL=workout.js.map
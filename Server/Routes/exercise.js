"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const exercise_1 = require("../Controllers/exercise");
router.get('/', exercise_1.GetExercises);
router.get('/exercise/:id', exercise_1.GetExercise);
router.post('/', exercise_1.NewExercise);
router.put('/exercise/:id', exercise_1.UpdateExercise);
router.delete('/exercise/:id', exercise_1.DeleteExercise);
//# sourceMappingURL=exercise.js.map
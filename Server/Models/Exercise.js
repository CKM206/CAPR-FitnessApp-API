"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const ExerciseSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    exerciseType: {
        type: String,
        required: true
    },
    muscles: {
        type: [String],
        required: true
    },
    force: {
        type: String,
        required: true
    },
    equipment: {
        type: String,
        required: true
    },
    isDefault: {
        type: Boolean,
        required: true
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
});
const Exercise = (0, mongoose_1.model)('Exercise', ExerciseSchema);
exports.default = Exercise;
//# sourceMappingURL=Exercise.js.map
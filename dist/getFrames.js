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
exports.getFrames = void 0;
const fs = require("fs/promises");
const getFrames = (documentData) => __awaiter(void 0, void 0, void 0, function* () {
    const pageId = Number(process.env.FRAMES_PAGE);
    if (process.env.FRAMES_PAGE && typeof pageId == "number") {
        const frames = documentData.children[pageId].children;
        frames.forEach((frame, i) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(frame.name);
            const frameName = frame.name;
            const phpCode = `<?php\n// Your PHP code for the frame: ${frameName}\n?>`;
            const filePath = `./theme/templates/${frameName}.php`;
            try {
                yield fs.writeFile(filePath, phpCode, "utf-8");
                console.log(`Created PHP file for frame: ${frameName}`);
            }
            catch (error) {
                console.error(`Error creating PHP file for frame: ${frameName}`, error);
            }
        }));
    }
    else {
        console.log("Please provide a frame page ID");
    }
});
exports.getFrames = getFrames;

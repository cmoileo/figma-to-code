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
const getFrames = (documentData) => __awaiter(void 0, void 0, void 0, function* () {
    const pageId = Number(process.env.FRAMES_PAGE);
    console.log(typeof pageId);
    if (process.env.FRAMES_PAGE && typeof pageId == "number") {
        console.log(documentData.children[pageId]);
    }
    else {
        console.log("Please provide a frame page ID");
    }
});
exports.getFrames = getFrames;

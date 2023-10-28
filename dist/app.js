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
const dotenv = require("dotenv");
const node_fetch_1 = require("node-fetch");
dotenv.config();
const getFigmaData = () => __awaiter(void 0, void 0, void 0, function* () {
    if (process.env.FIGMA_TOKEN_KEY) {
        try {
            const res = yield (0, node_fetch_1.default)(`https://api.figma.com/v1/files/${process.env.FIGMA_FILE}`, {
                headers: {
                    "X-Figma-Token": process.env.FIGMA_TOKEN_KEY,
                },
            });
            if (res.ok) {
                const documentData = yield res.json();
                console.log(documentData);
            }
            else {
                console.error(`Erreur lors de la requête à Figma: ${res.status} - ${yield res.text()}`);
            }
        }
        catch (error) {
            console.error(`Une erreur s'est produite : ${error}`);
        }
    }
    else {
        console.log("Please fill .env informations");
    }
});
getFigmaData();

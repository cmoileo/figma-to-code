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
const fs = require("fs");
function generateStyles(styles, localStyles) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const key in styles) {
            const localStyle = {
                key: key,
                name: styles[key].name,
            };
            localStyles.push(localStyle);
        }
        fs.readFile("./src/style/variables.json", "utf8", (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err);
                return;
            }
            try {
                const jsonObject = JSON.parse(jsonString);
                let scssContent = '';
                for (const key in jsonObject.collections) {
                    if (jsonObject.collections[key].name == "Typography") {
                        jsonObject.collections[key].modes[0].variables.forEach((item) => {
                            const scsssTypo = `.${item.name} {
    font-family: ${item.value.fontFamily};
    font-size: ${item.value.fontSize}px;
    font-weight: ${item.value.fontWeight};
    line-height: ${item.value.lineHeight};
    text-decoration: ${item.value.textDecoration};
}
\n`;
                            scssContent += scsssTypo;
                        });
                    }
                }
                fs.writeFile("./theme/styles/typo.scss", scssContent, (err) => {
                    if (err) {
                        console.log("Error writing file:", err);
                    }
                    else {
                        console.log("Styles written to styles.scss");
                    }
                });
            }
            catch (error) {
                console.log("An error has occured :", error);
            }
        });
    });
}
exports.default = generateStyles;

import * as fs from 'fs'
import { LocalStyle, Typography } from '../types';

export default async function generateStyles(styles: Record<string, any>, localStyles: LocalStyle[]) {

    for (const key in styles) {
        const localStyle: LocalStyle = {
            key: key,
            name: styles[key].name,
        };
        localStyles.push(localStyle)
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
                    jsonObject.collections[key].modes[0].variables.forEach((item: Typography) => {
                        const scsssTypo = `.${item.name} {
    font-family: ${item.value.fontFamily};
    font-size: ${item.value.fontSize}px;
    font-weight: ${item.value.fontWeight};
    line-height: ${item.value.lineHeight};
    text-decoration: ${item.value.textDecoration};
}
\n`
                        scssContent += scsssTypo;
                    })
                }
            }
            fs.writeFile("./theme/styles/typo.scss", scssContent, (err) => {
                if (err) {
                    console.log("Error writing file:", err);
                } else {
                    console.log("Styles written to styles.scss");
                }
            });
        } catch (error) {
            console.log("An error has occured :", error);
        }
    });
}
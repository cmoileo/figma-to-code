import * as dotenv from "dotenv"
import fetch from "node-fetch"
import { getFrames } from "./html/getFrames"

dotenv.config()
const getFigmaData = async () => {
    if (process.env.FIGMA_TOKEN_KEY) {
        try {
            const res = await fetch(`https://api.figma.com/v1/files/${process.env.FIGMA_FILE}`, {
                headers: {
                    "X-Figma-Token": process.env.FIGMA_TOKEN_KEY,
                },
            });

            if (res.ok) {
                const documentData = await res.json();
                getFrames(documentData.document)
            } else {
                console.error(`An error has occured: ${res.status} - ${await res.text()}`);
            }
        } catch (error) {
            console.error(`An error has occured: ${error}`);
        }
    } else {
        console.log("Please fill .env informations")
    }
}

getFigmaData();

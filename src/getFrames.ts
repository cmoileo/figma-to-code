import * as dotenv from "dotenv"
import { DocumentNode } from "./types"
import { FrameNode } from "figma-rest-api-types"
import * as fs from "fs/promises";

export const getFrames = async (documentData: DocumentNode) => {
    const pageId = Number(process.env.FRAMES_PAGE);

    if (process.env.FRAMES_PAGE && typeof pageId == "number") {
        const frames = documentData.children[pageId].children;
        frames.forEach(async (frame: FrameNode, i: number) => {

            const frameName = frame.name;
            const phpCode = `<?php\n// Your PHP code for the frame: ${frameName}\n?>`;
            const filePath = `./theme/templates/${frameName}.php`;

            try {
                await fs.writeFile(filePath, phpCode, "utf-8");
                console.log(`Created PHP file for frame: ${frameName}`);
            } catch (error) {
                console.error(`Error creating PHP file for frame: ${frameName}`, error);
            }
        });
    } else {
        console.log("Please provide a frame page ID");
    }
};
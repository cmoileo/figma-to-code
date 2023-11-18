import * as dotenv from "dotenv"
import { DocumentNode } from "../types"
import { FrameNode } from "../types"
import getFileTemplate from "./fileTemplate"
import * as fs from "fs/promises";

export const getFrames = async (documentData: DocumentNode) => {
    const pageId = Number(process.env.FRAMES_PAGE);

    if (process.env.FRAMES_PAGE && typeof pageId == "number") {
        const frames = documentData.children[pageId].children;
        frames.forEach(async (frame: FrameNode, i: number) => {

            const frameName = frame.name;
            const template = getFileTemplate(frame);
            const filePath = `./theme/templates/${frameName}.php`;


            try {
                await fs.writeFile(filePath, template, "utf-8");
                console.log(`Created PHP file for frame: ${frameName}`);
            } catch (error) {
                console.error(`Error creating PHP file for frame: ${frameName}`, error);
            }
        });
    } else {
        console.log("Please provide a frame page ID");
    }
};
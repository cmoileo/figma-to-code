import * as dotenv from "dotenv"
import { DocumentNode } from "./types"

export const getFrames = async (documentData: DocumentNode) => {
    const pageId = Number(process.env.FRAMES_PAGE)

    if (process.env.FRAMES_PAGE && typeof pageId == "number") {
        console.log(documentData.children[pageId])
    } else {
        console.log("Please provide a frame page ID")
    }
}
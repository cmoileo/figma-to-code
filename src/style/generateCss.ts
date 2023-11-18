import { FigmaRes } from "../types";
import generateStyles from './generateStyles'

export default async function generateCss(documentData: FigmaRes) {
    generateStyles(documentData.styles)
}
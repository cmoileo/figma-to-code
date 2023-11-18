import { FigmaRes, LocalStyle } from "../types";
import generateStyles from './generateStyles'

export default async function generateCss(documentData: FigmaRes, localStyles: LocalStyle[]) {
    generateStyles(documentData.styles, localStyles)
}
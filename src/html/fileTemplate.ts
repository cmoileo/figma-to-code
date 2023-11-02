import { FrameNode, Node } from "figma-rest-api-types";
import getTag from './getTag';

export default function getFileTemplate(frame: FrameNode) {
    function generateSection(section: Node, index: number): string {
        return `<section class="section-${index}">\n${
            section.children.map(generateChild).join('\n')
        }</section>\n`;
    }

    function generateChild(child: Node): string {
        const tag = getTag(child);
        if (tag == null) {
            return `<div class="${child.name}">\n${
                child.children.map(generateChild).join('\n')
            }</div>\n`;
        } else {
            return `<${tag}>${child.characters}</${tag}>\n`;
        }
    }

    let template = `<?php
/**
 * Template Name: ${frame.name}
 * 
*/
?>
`;

    frame.children.forEach((child, index) => {
        if (child.name === "section") {
            template += generateSection(child, index);
        }
    });

    return template;
}

import { FrameNode, Node, TextNode } from "../types";
import getTag from './getTag';

import { localStyles } from "../app";

function findNameByKey(keyToFind: string): string | undefined {
    for (const item of localStyles) {
      if (item.key === keyToFind) {
        return item.name;
      }
    }
    return undefined;
}

export default function getFileTemplate(frame: FrameNode) {
    function generateSection(section: Node, index: number): string {
        return `<section class="section-${index}">\n${
            section.children.map(generateChild).join('\n')
        }</section>\n`;
    }

    function generateChild(child: TextNode): string {
        const tag = getTag(child);
        if (tag == null) {
            return `<div class="${child.name}">\n${
                child.children.map(generateChild).join('\n')
            }</div>\n`;
        } else {
            const className = typeof child.styles !== "undefined" ? findNameByKey(child.styles.text) : ""
            return `<${tag} class="${className}">${child.characters}</${tag}>\n`;
        }
    }

    let template = `<?php
/**
 * Template Name: ${frame.name}
 * 
*/
?>
`;

    frame.children.forEach((child: Node, index: number) => {
        if (child.name === "section") {
            template += generateSection(child, index);
        }
    });

    return template;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTag_1 = require("./getTag");
function getFileTemplate(frame) {
    function generateSection(section, index) {
        return `<section class="section-${index}">\n${section.children.map(generateChild).join('\n')}</section>\n`;
    }
    function generateChild(child) {
        const tag = (0, getTag_1.default)(child);
        if (tag == null) {
            return `<div class="${child.name}">\n${child.children.map(generateChild).join('\n')}</div>\n`;
        }
        else {
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
exports.default = getFileTemplate;

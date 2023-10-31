import { FrameNode, Node } from "figma-rest-api-types";

export default function getFileTemplate(frame: FrameNode) {
    let template = `<?php
/**
 * Template Name: ${frame.name}
 * 
*/
?>
`;

    frame.children.forEach((child: any, i: number) => {
        if (child.name === "section") {
            template += `<section class="section-${i}">\n`;

            child.children.forEach((greatChild: Node) => {
                let tag;
                switch (greatChild.name) {
                    case "h1":
                        tag = "h1";
                        break;
                    case "h2":
                        tag = "h2";
                        break;
                    case "h3":
                        tag = "h3";
                        break;
                    case "h4":
                        tag = "h4";
                        break;
                    case "h5":
                        tag = "h5";
                        break;
                    case "p":
                        tag = "p";
                        break;
                        
                    default:
                        tag = null;
                }

                if (tag == null) {
                    template += `<div class="${greatChild.name}">\n`;
                    template += `</div>\n`;
                } else {
                    template += `<${tag}>${greatChild.characters}</${tag}>\n`;
                }
            });

            template += `</section>\n`;
        }
    });

    return template;
}

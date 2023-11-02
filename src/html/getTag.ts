import { Node } from "figma-rest-api-types";

export default function getTag(greatChild: Node) : string | null {
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
    
    return tag
}
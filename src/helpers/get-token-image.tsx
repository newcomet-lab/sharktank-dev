import ShrkImg from "../assets/tokens/SHRK.svg";
import sShrkImg from "../assets/tokens/SSHRK.png";

function toUrl(tokenPath: string): string {
    const host = window.location.origin;
    return `${host}/${tokenPath}`;
}

export function getTokenUrl(name: string) {
    if (name === "shrk") {
        return toUrl(ShrkImg);
    }

    if (name === "sshrk") {
        return toUrl(sShrkImg);
    }

    throw Error(`Token url doesn't support: ${name}`);
}

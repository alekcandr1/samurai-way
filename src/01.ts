export function split(text: string) {
    return text.split(" ").filter(w => w !== "" && w !== "-")
    .map(w => w.replace("!", ""));
}
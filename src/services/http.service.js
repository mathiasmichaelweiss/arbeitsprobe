export default async function http(url) {
    const request = await fetch(url);
    return request;
}
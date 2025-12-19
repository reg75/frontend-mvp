export function sleep(ms = 400) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
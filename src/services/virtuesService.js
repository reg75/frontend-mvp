import virtuesPayload from "../data/virtues.json";
import { sleep } from "./http";

export async function getVirtues( { delayMs = 400 } = {}) {
    await sleep(delayMs);
    return virtuesPayload; 
}
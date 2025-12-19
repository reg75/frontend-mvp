// Simulated resources API service (local JSON + artificial delay)
import resourcesPayload from "../data/resources.json";
import { sleep } from "./http";

export async function getResources(
    { category = "all", virtueId = null, delayMs = 500 } = {}
) {
    await sleep(delayMs);

    let items = resourcesPayload.data;

    if (category && category !== "all") {
        items = items.filter((r) => r.category?.slug === category);
    }

    if (virtueId) {
        items = items.filter((r) => Array.isArray(r.virtueIds) && r.virtueIds.includes(virtueId));
    }

    return {
        ...resourcesPayload,
        data: items,
    };
}
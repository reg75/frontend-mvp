// Simulated resources API service (local JSON + artificial delay)
// Serviço de API simulado para recursos (JSON local + atraso artificial)

import resourcesPayload from "../data/resources.json";
import { sleep } from "./http";

/**
 * Fetch resources with optional filtering.
 * Busca recursos com filtragem opcional.
 *
 * @param {Object} options
 * @param {string} options.category - Category slug to filter by ("all" for no filter)
 * @param {string|null} options.virtueId - Virtue ID to filter by (null for no filter)
 * @param {number} options.delayMs - Artificial delay in milliseconds
 *
 * @returns {Promise<Object>} Payload containing filtered resources
 * Retorna um payload contendo os recursos filtrados
 */
export async function getResources(
    { category = "all", virtueId = null, delayMs = 500 } = {}
) {
    // Simulate network latency
    // Simula latência de rede
    await sleep(delayMs);

    // Start with all resources from the local JSON payload
    // Começa com todos os recursos do JSON local
    let items = resourcesPayload.data;

    // Filter by category if a specific category is provided
    // Filtra por categoria se uma categoria específica for fornecida
    if (category && category !== "all") {
        items = items.filter((r) => r.category?.slug === category);
    }

    // Filter by virtue if a virtue ID is provided
    // Filtra por virtude se um ID de virtude for fornecido
    if (virtueId) {
        items = items.filter(
            (r) =>
                Array.isArray(r.virtueIds) &&
                r.virtueIds.includes(virtueId)
        );
    }

    // Return the original payload structure with filtered data
    // Retorna a estrutura original do payload com os dados filtrados
    return {
        ...resourcesPayload,
        data: items,
    };
}

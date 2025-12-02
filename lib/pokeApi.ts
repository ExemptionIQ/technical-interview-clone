const STAT_ORDER = [
  "hp",
  "attack",
  "defense",
  "special-attack",
  "special-defense",
  "speed",
];

const PAGE_SIZE = 12;

export const POKEMON_PAGE_SIZE = PAGE_SIZE;

export async function fetchPokemonPage(page) {
  /*
   * TODO:
   * - Accept a page number and calculate offset/limit using PAGE_SIZE.
   * - Call the public PokeAPI list endpoint with that pagination.
   * - Handle non-OK responses with a thrown error.
   * - Parse the JSON, and return the results array (or an empty array) for further mapping.
   */
}

export function mapPokemon(detail) {
  /*
   * TODO:
   * - Validate the shape of the incoming detail payload
   * - Map stats in STAT_ORDER into objects with name/value pairs (use 0 when missing).
   * - Compute the total by summing mapped stat values.
   * - Derive a display image
   * - Return a normalized object with id, name, image, types array, stats array, and total.
   */
}

export function formatName(name) {
  /*
   * TODO:
   * - Normalize a Pokemon name for display (e.g., capitalize first letter).
   * - Handle edge cases like empty/undefined input gracefully.
   */
}

export const ALL_STAT_KEYS = [...STAT_ORDER];

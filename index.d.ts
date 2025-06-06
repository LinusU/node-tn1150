/** Compare two strings using the algorithm from TN1150. Useful for sorting filenames. */
export function compare (lhs: string, rhs: string): number

/** Normalize a string using Unicode Canonical Decomposition. */
export function normalize (input: string): string

/**
 * Cleans text by removing duplicate separators and applying capitalization rules.
 *
 * - Removes repeated separators (spaces, apostrophes, hyphens)
 * - Converts text to lowercase
 * - Capitalizes:
 *    • the first character of the string
 *    • any character after a space, apostrophe, or hyphen
 *
 * @param {string} value - The input text to normalize.
 * @returns {string} - The formatted text.
 */
const formatText = (value) => {
  if (!value) return ''
  const cleaned = value
    // Remove repeated separators: spaces, apostrophes, hyphens
    .replace(/([ '-]){2,}/g, '$1')
    .toLowerCase()
    // Capitalize depending on position
    .replace(/(^|[\s'-])([a-zà-ÿ])/gi, (match) => match.toUpperCase())
  return cleaned
}

/**
 * Formats an address string.
 * Allows any characters but applies normalization (capitalization + separator cleanup).
 *
 * @param {string} value - The address text entered by the user.
 * @returns {string} - The formatted address.
 */
export const formatAddress = (value) => {
  return formatText(value)
}

/**
 * Formats a name string.
 *
 * - Removes any characters that are not:
 *    • letters (including accents)
 *    • spaces
 *    • hyphens
 *    • apostrophes
 * - Applies capitalization and separator-cleaning rules.
 *
 * @param {string} value - The name entered by the user.
 * @returns {string} - The sanitized and formatted name.
 */
export const formatName = (value) => {
  if (!value) return ''
  // Keep only letters, spaces, hyphens, and apostrophes
  const allowedOnly = value.replace(/[^A-Za-zÀ-ÿ'\s-]/g, '')
  return formatText(allowedOnly)
}

/**
 * Formats a ZIP code by:
 * - Keeping only digits
 * - Limiting the value to 5 characters
 *
 * @param {string} value - ZIP code input.
 * @returns {string} - The sanitized ZIP code (max 5 digits).
 */
export const formatZipcode = (value) => {
  if (!value) return ''
  return value
    .replace(/\D/g, '') // Remove non-digit characters
    .slice(0, 5) // Limit to 5 digits
}

/**
 * Converts a Date or string into a standardized "YYYY-MM-DD" format.
 *
 * @param {Date|string|null} value
 * @returns {string|null}
 */
export const toDateString = (value) => {
  if (!value) return null
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10) // "YYYY-MM-DD"
  }
  return value // already a string
}

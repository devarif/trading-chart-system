import { NumericalString } from './types'

/**
 * @param input - numerical string
 * @examples '38'
 * @returns number
 * @examples 38
 */

export const stringToNumber = (input: NumericalString) => Number(input)

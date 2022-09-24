import { faker } from '@faker-js/faker'

/**
 * Returns a random number between the given boundaries
 * @param min
 * @param max
 */
export function randomNumber(min: number, max: number) {
  return faker.datatype.number({ min, max })
}

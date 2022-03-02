import { faker } from "@faker-js/faker";
import { randomIntFromInterval } from "../../libraries/utils";

/**
 * Generates an array of random messages.
 *
 * @returns {Array} Random messages.
 */
export function getMessages() {
  const numberItems = randomIntFromInterval(1, 10);
  const messages = [];

  for (let i = 0; i < numberItems; i += 1) {
    messages.push({
      id: (i + 1).toString(),
      avatarSource: [
        {
          uri: faker.image.avatar(20, 20).replace("http://", "https://"),
          height: 20,
          width: 20
        },
        {
          uri: faker.image.avatar(40, 40).replace("http://", "https://"),
          height: 40,
          width: 40
        },
        {
          uri: faker.image.avatar(60, 60).replace("http://", "https://"),
          height: 60,
          width: 60
        }
      ],
      name: faker.name.findName()
    });
  }
  return messages;
}

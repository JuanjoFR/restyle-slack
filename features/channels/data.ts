import { faker } from "@faker-js/faker";
import {
  capitalizeFirstLetter,
  randomIntFromInterval
} from "../../libraries/utils";

type Props = Array<{
  id: string;
  name: string;
}>;

export function getChannels(): Props {
  const numberItems = randomIntFromInterval(1, 10);
  const channels = [];

  for (let i = 0; i < numberItems; i += 1) {
    const numberWords = randomIntFromInterval(1, 3);

    channels.push({
      id: (i + 1).toString(),
      name: capitalizeFirstLetter(faker.random.words(numberWords))
    });
  }
  return channels;
}

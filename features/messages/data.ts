import { faker } from "@faker-js/faker";
import { randomIntFromInterval } from "../../libraries/utils";

type Props = Array<{
  id: string;
  avatarSource: Array<{
    uri: string;
    width: number;
    height: number;
  }>;
  name: string;
}>;

export function getMessages(): Props {
  const numberItems = randomIntFromInterval(1, 10);
  const messages = [];

  for (let i = 0; i < numberItems; i += 1) {
    const uri = faker.image.avatar().replace("http://", "https://");

    messages.push({
      id: (i + 1).toString(),
      avatarSource: [
        {
          uri,
          width: 20,
          height: 20
        },
        {
          uri,
          width: 40,
          height: 40
        },
        {
          uri,
          width: 60,
          height: 60
        }
      ],
      name: faker.name.findName()
    });
  }
  return messages;
}

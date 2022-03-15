import { faker } from "@faker-js/faker";
import { ImageSourcePropType } from "react-native";

export function getStatus(): {
  name: string;
  avatarSource: ImageSourcePropType;
  currentStatus: "Away";
} {
  return {
    name: faker.name.findName(),
    avatarSource: [
      {
        uri: faker.image.avatar()
      }
    ],
    currentStatus: "Away"
  };
}

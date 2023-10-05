import { Text, View } from "react-native";
import Colors from "../constants/Colors";
import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./MonoText/MonoText";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View className="mx-12 items-center">
        <Text className="text-center text-base">
          Open up the code for this screen:
        </Text>

        <View className="my-2 rounded px-1">
          <MonoText>{path}</MonoText>
        </View>

        <Text className="text-center text-base">
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View>

      <View className="mx-5 mt-4 items-center">
        <ExternalLink
          className="py-4"
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
        >
          <Text className="text-center">
            Tap here if your app doesn't automatically update after making
            changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

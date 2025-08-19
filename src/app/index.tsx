import { Text, View } from "react-native";
import { useTranslation } from "@/src/hooks/useTranslation";

export default function Index() {
  const translate = useTranslation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{translate("global.welcome")}</Text>
    </View>
  );
}

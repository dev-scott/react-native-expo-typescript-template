import { useQuery } from "@tanstack/react-query";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { getItems, IItem } from "../../src/api";

const Item: React.FC<{ item: IItem }> = ({ item }) => {
  return (
    <View className="w-full border-b-[1px] border-gray-200 py-5">
      <Text>{item.content}</Text>
    </View>
  );
};

export default function ItemsScreen() {
  const { data } = useQuery({
    queryFn: getItems,
    queryKey: ["items"],
  });
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="my-5 text-xl font-bold">View Items</Text>
      <SafeAreaView className="w-[80%] flex-1">
        <View className="w-full border-t-[1px] border-gray-200" />
        <FlatList
          data={data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

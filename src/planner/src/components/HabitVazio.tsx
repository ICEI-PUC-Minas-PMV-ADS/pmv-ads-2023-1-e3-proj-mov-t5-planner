import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export function HabitVazio() {
  const { navigate } = useNavigation()

  return (
    <Text
      className="text-zinc-400 text-base"
    >
      Você não está monitorando nenhum  {'    '}

      <Text
        className="text-teal-400 text-base underline active:text-teal-500"
        onPress={() => navigate('new')}
      >
        Que tal criar um?
      </Text>
    </Text>
  )
}
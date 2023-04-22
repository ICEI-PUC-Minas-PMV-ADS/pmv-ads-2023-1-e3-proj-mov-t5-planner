import { ScrollView, Text, View } from "react-native";
import { BackButtom } from "../components/BackButtom";

export function New(){
    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView showsVerticalScrollIndicator={false}>

                <BackButtom />

                <Text className="text-white mt-6 font-extrabold text-3xl">
                    Criar hábito
                </Text>
                <Text className="text-white mt-6 font-semibold text-base">
                    Qual seu comprometimento?
                </Text>

            </ScrollView>
        </View>
    )
}
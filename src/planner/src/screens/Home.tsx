import { View, Text, ScrollView } from "react-native";

import { generateRangeDatesFromYearStart } from '../utils/intervalo-de-datas';

import { HabitDay, TAMANHO_BOX_DIA } from "../components/HabitDay";
import { Header } from "../components/Header";

const diasDaSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateRangeDatesFromYearStart();
const proximosDias = 18 * 7;
const diasParaPreencherTela = proximosDias - datesFromYearStart.length

export function Home(){
    return(
        <View className="flex-1 bg-background px-8 pt-16" >
            <Header />

            <View className="flex-row mt-6 mb-2">
                {
                    diasDaSemana.map((diasDaSemana, i) => (
                        <Text 
                            key={`${diasDaSemana}-${i}`}
                            className="text-zinc-400 text-xl font-bold text-center mx-1"
                            style={{width: TAMANHO_BOX_DIA}}
                        >
                            {diasDaSemana}
                        </Text>
                    ))
                }
            </View>

            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100}}
            >
                <View className="flex-row flex-wrap">
                    {
                    datesFromYearStart.map(date => (
                        <HabitDay 
                        key={date.toISOString()}
                        />
                    ))
                    }

                    {
                diasParaPreencherTela > 0 && Array.
                    from({ length: diasParaPreencherTela })
                    .map((_, index) => (
                        <View
                        key={index} 
                        className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                        style={{ width: TAMANHO_BOX_DIA, height: TAMANHO_BOX_DIA }}
                        />
                    ))
                }
                </View>
            </ScrollView>
            
        </View>
    )
}
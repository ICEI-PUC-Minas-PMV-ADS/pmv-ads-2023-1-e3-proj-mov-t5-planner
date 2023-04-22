import { ScrollView, View, Text } from "react-native";
import{ useRoute } from '@react-navigation/native';
import { BackButtom } from "../components/BackButtom";
import * as React from 'react';
import dayjs from "dayjs";
import { ProgressBar } from "../components/ProgressBar";
import { CheckBox } from "../components/CheckBox";

interface Params {
    date: string;
}

export function Habit(){
    const route = useRoute();
    const { date } = route.params as Params
    
    const dias = dayjs(date)
    const diaSemana = dias.format('dddd')
    const diaMes = dias.format('DD/MM')


    return (
        <View className="flex-1 bg-background px-8 pt-16">
            
         <ScrollView
           showsVerticalScrollIndicator={false}
           contentContainerStyle={{ paddingBottom: 100}}
          >
            <BackButtom />
            <Text className="text-white mt-6 font-semibold text-base lowercase ">
            {diaSemana}
            </Text>
            <Text className="text-white font-extrabold text-3xl">
            {diaMes}
            </Text>
            
            <ProgressBar 
            progress={75}
            />

            <View className="mt-6">
              <CheckBox
              checked={true} 
              title='Academia'
              />
             <CheckBox
              checked={false} 
              title='Estudar'
              />
              <CheckBox
              checked={true} 
              title='Ler'
              />
            </View>
         </ScrollView>
       </View>
    )
}
import { useState, useCallback } from 'react'
import { View, Text, ScrollView, Alert } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import dayjs from 'dayjs';

import { api } from "../lib/axios";
import { generateRangeDatesFromYearStart } from '../utils/intervalo-de-datas';

import { HabitDay, TAMANHO_BOX_DIA } from "../components/HabitDay";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";

// import axios from 'axios';

const diasDaSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateRangeDatesFromYearStart();
const proximosDias = 18 * 7;
const diasParaPreencherTela = proximosDias - datesFromYearStart.length

type SummaryProps = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>

export function Home() {
  const [loading, setLoading] = useState(true)
  const [summary, setSummary] = useState<SummaryProps | null>(null)

  const { navigate } = useNavigation();

  // axios.get('http://127.0.0.1:3333')

  async function fetchData() {


    try {
      setLoading(true)
      const response = await api.get('/summary')
      // const response = await axios.get('/summary')
      // console.log(response.data)
      setSummary(response.data)
    } catch (error) {
      Alert.alert('Deu ruim.', 'por motivos de só Deus sabe, não consegui puxar o sumário')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchData()
  }, []))

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16" >
      <Header />

      <View className="flex-row mt-6 mb-2">
        {
          diasDaSemana.map((diasDaSemana, i) => (
            <Text
              key={`${diasDaSemana}-${i}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{ width: TAMANHO_BOX_DIA }}
            >
              {diasDaSemana}
            </Text>
          ))
        }
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {
          summary &&
          <View className="flex-row flex-wrap">
            {
              datesFromYearStart.map(date => {
                const dayWithHabits = summary.find(day => {
                  return dayjs(date).isSame(day.date, 'day')
                })

                return (
                  <HabitDay
                    key={date.toISOString()}
                    date={date}
                    amountOfHabits={dayWithHabits?.amount}
                    amountOfCompleted={dayWithHabits?.completed}
                    onPress={() => navigate('habit', { date: date.toISOString() })}
                  />
                )
              })
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
        }
      </ScrollView>
    </View>
  )
}
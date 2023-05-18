import { useState, useEffect } from 'react';
import { ScrollView, View, Text, Alert } from "react-native";
import { useRoute } from '@react-navigation/native';
import dayjs from "dayjs";
import clsx from 'clsx';

import { api } from '../lib/axios';
import { generateProgressPercentage } from '../utils/generate-progress-porcentage';

import { BackButtom } from "../components/BackButtom";
import { ProgressBar } from "../components/ProgressBar";
import { CheckBox } from "../components/CheckBox";
import { Loading } from '../components/Loading';
import { HabitVazio } from '../components/HabitVazio';

interface Params {
  date: string;
}

interface DayInfoProps {
  completedHabits: string[];
  possibleHabits: {
    id: string,
    title: string,
  }[];
}

export function Habit() {
  const [loading, setLoading] = useState(true)
  const [dayInfo, setDayInfo] = useState<DayInfoProps | null>(null)
  const [completedHabits, setCompletedHabits] = useState<string[]>([])

  const route = useRoute();
  const { date } = route.params as Params

  const dias = dayjs(date)
  const isDateInPast = dias.endOf('day').isBefore(new Date())
  const diaSemana = dias.format('dddd')
  const diaMes = dias.format('DD/MM')

  const habitProgress = dayInfo?.possibleHabits.length ?
    generateProgressPercentage(dayInfo.possibleHabits.length, completedHabits.length)
    : 0;

  async function fetchHabits() {
    try {
      setLoading(true)

      const response = await api.get('/day', { params: { date } })
      // console.log(response.data)
      setDayInfo(response.data)
      setCompletedHabits(response.data.completedHabits)

    } catch (error) {
      console.log(error)
      Alert.alert('Deu ruim', 'Não deu pra buscar os hábitos :(')
    }
    finally {
      setLoading(false)
    }
  }

  async function handleToggleHabit(habitId: string) {
    try {
      await api.patch(`/habits/${habitId}/toggle`);

      if (completedHabits.includes(habitId)) {
        setCompletedHabits(prevState => prevState.filter(habit => habit !== habitId))
      } else {
        setCompletedHabits(prevState => [...prevState, habitId])
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Deu ruim', 'Não deu pra atualizar o status do hábito')
    }
  }

  useEffect(() => {
    fetchHabits()
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButtom />
        <Text className="text-white mt-6 font-semibold text-base lowercase ">
          {diaSemana}
        </Text>
        <Text className="text-white font-extrabold text-3xl">
          {diaMes}
        </Text>

        <ProgressBar
          progress={habitProgress}
        />

        <View className={clsx("mt-6", {
          ["opacity-40"]: isDateInPast
        })}>
          {
            dayInfo?.possibleHabits ?
              dayInfo?.possibleHabits.map(habit => (
                <CheckBox
                  key={habit.id}
                  title={habit.title}
                  checked={completedHabits.includes(habit.id)}
                  disabled={isDateInPast}
                  onPress={() => handleToggleHabit(habit.id)}
                />
              ))
              : <HabitVazio />
          }

        </View>

        {
          isDateInPast && (
            <Text className='text-white mt-10 text-center'>
              Você não pode atualizar um hábito que já passou.
            </Text>
          )
        }

      </ScrollView>
    </View>
  )
}
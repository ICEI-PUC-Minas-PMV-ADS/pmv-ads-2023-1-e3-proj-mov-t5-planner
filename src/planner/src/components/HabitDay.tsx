import { TouchableOpacity, Dimensions, TouchableOpacityProps } from "react-native";
import clsx from "clsx"
import dayjs from "dayjs";

import { generateProgressPercentage } from "../utils/generate-progress-porcentage";

const DIAS_SEMANA = 7;
const PADDING_HORIZONTAL_TELA = (32 * 2) / 5;

export const MARGIN_ENTRE_DIAS = 8;
export const TAMANHO_BOX_DIA = (Dimensions.get('screen').width / DIAS_SEMANA) - (PADDING_HORIZONTAL_TELA + 5);

interface Props extends TouchableOpacityProps {
  amountOfHabits?: number;
  amountOfCompleted?: number;
  date: Date;
};

export function HabitDay({ amountOfHabits = 0, amountOfCompleted = 0, date, ...rest }: Props) {

  const amountAccomplishedPercentage = amountOfHabits > 0 ? generateProgressPercentage(amountOfHabits, amountOfCompleted) : 0;
  const today = dayjs().startOf('day').toDate()
  const isCurrentDay = dayjs(date).isSame(today)

  return (
    <TouchableOpacity
      className={clsx("rounded-lg border-2 m-1", {
        ["bg-zinc-900 border-zinc-800"]: amountAccomplishedPercentage === 0,
        ["bg-teal-900 border-teal-700"]: amountAccomplishedPercentage > 0 && amountAccomplishedPercentage < 20,
        ["bg-teal-800 border-teal-600"]: amountAccomplishedPercentage >= 20 && amountAccomplishedPercentage < 40,
        ["bg-teal-700 border-teal-500"]: amountAccomplishedPercentage >= 40 && amountAccomplishedPercentage < 60,
        ["bg-teal-600 border-teal-500"]: amountAccomplishedPercentage >= 60 && amountAccomplishedPercentage < 80,
        ["bg-teal-500 border-teal-400"]: amountAccomplishedPercentage >= 80,
        ["border-white border-4"] : isCurrentDay
      })}
      style={{ width: TAMANHO_BOX_DIA, height: TAMANHO_BOX_DIA }}
      activeOpacity={0.7}
      {...rest}
    />
  );
}
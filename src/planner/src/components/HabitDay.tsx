import { TouchableOpacity, Dimensions } from "react-native";

const DIAS_SEMANA = 7;
const PADDING_HORIZONTAL_TELA = (32 * 2) / 5;

export const MARGIN_ENTRE_DIAS = 8;
export const TAMANHO_BOX_DIA = (Dimensions.get('screen').width / DIAS_SEMANA) - (PADDING_HORIZONTAL_TELA + 5);

export function HabitDay(){
    return(
        <TouchableOpacity 
            className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
            style={{ width: TAMANHO_BOX_DIA, height: TAMANHO_BOX_DIA }}
            activeOpacity={0.7}
        />
    );
}
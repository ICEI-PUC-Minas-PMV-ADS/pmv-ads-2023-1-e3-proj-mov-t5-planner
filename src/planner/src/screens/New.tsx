import React, { useState } from 'react';
import { ScrollView, Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Checkbox, } from 'react-native-paper';
import type { CheckboxProps } from 'react-native-paper';
import { BackButtom } from "../components/BackButtom";
import Icon from 'react-native-vector-icons/FontAwesome';



interface Props {
    onPress: () => void;
}



const WeekDaysCheckbox = () => {

    const [weekDays, setWeekDays] = useState([
        { label: 'Domingo', checked: false },
        { label: 'Segunda', checked: false },
        { label: 'Terça', checked: false },
        { label: 'Quarta', checked: false },
        { label: 'Quinta', checked: false },
        { label: 'Sexta', checked: false },
        { label: 'Sábado', checked: false },
    ]);
    const handleCheckboxChange = (index: number) => {
        const updatedWeekDays = [...weekDays];
        updatedWeekDays[index].checked = !updatedWeekDays[index].checked;
        setWeekDays(updatedWeekDays);
    };
    const [value, onChangeText] = useState('')

    return (

        <View className="flex-1 bg-background   ">
            <View className=" px-8 pt-16">
                <ScrollView showsVerticalScrollIndicator={false}>

                    <BackButtom />

                    <Text className="text-white mt-6 font-extrabold text-3xl">
                        Criar hábito
                    </Text>

                    <Text className="text-white mt-6 font-semibold text-base">
                        Qual seu comprometimento?
                    </Text>
                    <View className="text-zinc-400" >

                        <TextInput

                            className="border border-zinc-800 font-extrabold  rounded-lg "
                            numberOfLines={1}
                            maxLength={40}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                            style={styles.TextInput}
                            placeholder="Exercicios, dormir bem etc..."
                            placeholderTextColor="#A1A1AA"
                        />

                    </View>

                    <Text className="text-white mt-6 font-semibold text-base">
                        Qual a Recorrência?
                    </Text>

                    <View >
                        {weekDays.map((day, index) => (
                            <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Checkbox

                                    status={day.checked ? 'checked' : 'unchecked'}
                                    onPress={() => handleCheckboxChange(index)}
                                    color={day.checked ? 'green' : 'white'}

                                />
                                <Text className="text-white">{day.label}</Text>
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.button} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Icon name="check" size={10} color="white" />

                            <Text style={styles.text}>  Confirmar</Text>
                        </View>
                    </TouchableOpacity>




                </ScrollView>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    TextInput: {
        marginTop: 8,
        backgroundColor: '#18181B',
        color: '#FFFFFF',
        paddingHorizontal: 10,
        paddingVertical: 8,

    },

    button: {
        marginTop: 10,
        backgroundColor: '#16A34A',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 8,

    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',

    },
});
export function New() {
    return <WeekDaysCheckbox />;
}

import React, { useState } from 'react';
import { ScrollView, Text, View, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
import { useRoute } from '@react-navigation/native';
import { BackButtom } from "../components/BackButtom";
import { AntDesign } from '@expo/vector-icons';
import { CheckBox } from "../components/CheckBox";
import dayjs from "dayjs";

interface Params {
    date: string;
    checked: boolean;
}
interface Props {
    onPress: () => void;
}

export function New() {

    const [dia, setDia] = useState([
        { title: 'Domingo', checked: false },
        { title: 'Segunda-feira', checked: false },
        { title: 'Terça-feira', checked: false },
        { title: 'Quarta-feira', checked: false },
        { title: 'Quinta-feira', checked: false },
        { title: 'Sexta-feira', checked: false },
        { title: 'Sábado', checked: false },

      ]);

    const handleCheckBoxChange = (index: number) => {
        const updatedDiaSemana = [...dia];
        updatedDiaSemana[index].checked = !updatedDiaSemana[index].checked;
        setDia(updatedDiaSemana);
    };


    const [value, onChangeText] = useState('')

    return (

        <View className="flex-1 bg-background px-8 pt-16  ">
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
                        placeholder="Exercícios, dormir bem, etc..."
                        placeholderTextColor="#A1A1AA"
                    />

                </View>
                <View>

                    <Text className="text-white mt-4 mb-6 font-semibold text-base">
                        Qual a Recorrência?
                    </Text>

                </View>
                <View>

                    <CheckBox
                        checked={dia[0].checked}
                        title={dia[0].title}
                        onPress={() => handleCheckBoxChange(0)}
                    />
                    <CheckBox
                        checked={dia[1].checked}
                        title={dia[1].title}
                        onPress={() => handleCheckBoxChange(1)}
                    />
                    <CheckBox
                        checked={dia[2].checked}
                        title={dia[2].title}
                        onPress={() => handleCheckBoxChange(2)}
                    />
                    <CheckBox
                        checked={dia[3].checked}
                        title={dia[3].title}
                        onPress={() => handleCheckBoxChange(3)}
                    />
                    <CheckBox
                        checked={dia[4].checked}
                        title={dia[4].title}
                        onPress={() => handleCheckBoxChange(4)}
                    />
                    <CheckBox
                        checked={dia[5].checked}
                        title={dia[5].title}
                        onPress={() => handleCheckBoxChange(5)}
                    />
                    <CheckBox
                        checked={dia[6].checked}
                        title={dia[6].title}
                        onPress={() => handleCheckBoxChange(6)}
                    />

                </View>

                <View >
                    <TouchableOpacity style={styles.button} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <AntDesign name="check" size={13} color="white" />

                            <Text style={styles.text}>  Confirmar</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </ScrollView>
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
})

import { View } from "react-native";

interface Props{
    progress?: number;
}

export function ProgressBar ({progress=0}:Props) {

    return (
    <View className="bg-zinc-700 w-full h-3 rounded-xl mt-4">

        <View 
        className= "bg-teal-600 h-3 rounded-xl" 
        style= { { width: `${progress}%`} }
        />
        
    </View>
)
}

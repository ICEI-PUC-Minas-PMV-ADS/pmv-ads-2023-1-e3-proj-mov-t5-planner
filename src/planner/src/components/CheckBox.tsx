import { View, TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import Animated, { RotateInUpLeft, ZoomOut } from 'react-native-reanimated'

interface Props extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

export function CheckBox({ title, checked = false, ...rest }: Props) {

  return (
    <TouchableOpacity
      activeOpacity={0.3}
      className='flex-row mb-2 items-center'
      {...rest}
    >
      {
        checked
          ?
          <Animated.View 
            className='h-8 w-8 bg-green-500 items-center justify-center rounded-lg'
            entering={RotateInUpLeft}
            exiting={ZoomOut}
            >
            <Feather
              name='check'
              size={20}
              color={colors.white}
            />
          </Animated.View>
          :
          <View className='h-8 w-8 bg-zinc-900 rounded-lg' />
      }

      <Text className='text-white font-semibold text-base ml-3'>
        {title}
      </Text>

    </TouchableOpacity>


  )
}


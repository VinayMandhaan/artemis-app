import { Text, TextProps } from "react-native"
import { Fonts } from "../../../utils/theme"


interface CustomTextProps {
    title: string,
    color?: string,
    fontSize?: number,
    fontFamily?: string,
    style?: CustomTextProps
}

const CustomText = ({ title, color, fontSize, fontFamily, style }: CustomTextProps) => {
    return (
        <Text style={{ fontFamily: fontFamily || Fonts.Font_Primary, fontSize: fontSize || 16, color: color || 'black', ...style }}>{title}</Text>
    )
}

export default CustomText
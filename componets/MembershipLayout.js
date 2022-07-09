// components
import { View, Text, StyleSheet, PixelRatio, ImageBackground,TouchableOpacity,Dimensions  } from "react-native";

const MembershipLayout = ({heading, children, margin}) => {
    return(
        <View style={[styles.container, {marginTop: margin}]}>
            <Text style={{fontSize: PixelRatio.getPixelSizeForLayoutSize(10), fontWeight: 'bold', left: PixelRatio.getPixelSizeForLayoutSize(5)}}>
                {heading}
            </Text>
                {children}
        </View>
    )
}

export default MembershipLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: PixelRatio.getPixelSizeForLayoutSize(5),
    },
})
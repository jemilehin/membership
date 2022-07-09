
import { View, Text, StyleSheet, PixelRatio, ImageBackground, TouchableOpacity, Dimensions } from "react-native";

const MembershipCard = ({ data, direction }) => {
    return (
        <View style={[styles.itemholder, { flexDirection: direction,}]}>
            {data.map((item, index) => {
                if (direction === 'row') {
                    return (
                    <View style={{
                        
                        width: "50%", padding:PixelRatio.getPixelSizeForLayoutSize(2)}}
                        key={index}
                    >
                    <ImageBackground
                        source={item.img} 
                    resizeMode="cover" style={[styles.background]}
                    imageStyle={{borderRadius: PixelRatio.getPixelSizeForLayoutSize(5),flexDirection: "column", alignContent: "space-between", justifyContent: "space-between"}}>
                        <View style={styles.item}>
                            <Text style={[styles.text, styles.brand,styles.package,{marginBottom: PixelRatio.getPixelSizeForLayoutSize(40)}]}>
                                {item.package}
                            </Text>
                            <View style={[styles.item, styles.innercontainer]}>
                                <View>
                                    <Text style={[styles.text, styles.heading]}>{item.type}</Text>
                                    <Text style={[styles.text, styles.sm]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: "flex-end", paddingTop: PixelRatio.getPixelSizeForLayoutSize(3), flexWrap: 'wrap'}}>
                                    <Text style={{fontSize: PixelRatio.getPixelSizeForLayoutSize(6)}}>{item.level}</Text>
                                <TouchableOpacity style={[styles.backgroundcolor, styles.button]}>
                                    <Text style={styles.brand}>$25.90</Text>
                                </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    </View>)
                }
                else {
                    return (
                        <View style={styles.card} key={index}>
                            <ImageBackground source={item.img} style={{ padding: PixelRatio.getPixelSizeForLayoutSize(4), borderRadius: PixelRatio.getPixelSizeForLayoutSize(5),flex: 0.7, height: PixelRatio.getPixelSizeForLayoutSize(45) }}
                            imageStyle={{borderRadius: PixelRatio.getPixelSizeForLayoutSize(5),flexDirection: "column", alignItems: "flex-start", justifyContent: 'flex-start',}}>
                                <Text style={[styles.brand,styles.package,{maxWidth: PixelRatio.getPixelSizeForLayoutSize(19)}]}>
                                    {item.package}
                                </Text>
                            </ImageBackground>
                            <View style={{flexDirection: "column", alignContent: "space-between",flex: 1.5, flexWrap: 'wrap', alignItems:'flex-start', marginLeft: PixelRatio.getPixelSizeForLayoutSize(7)}}>
                                <Text style={[{fontSize: PixelRatio.getPixelSizeForLayoutSize(10.3),paddingBottom: PixelRatio.getPixelSizeForLayoutSize(6)},styles.heading,]}>{item.type}</Text>
                                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <Text>Great for Beginners</Text>
                            <TouchableOpacity style={[styles.button,styles.backgroundcolor,{marginLeft: PixelRatio.getPixelSizeForLayoutSize(4)}]}>
                                <Text style={[styles.text, styles.brand]}>Free</Text>
                            </TouchableOpacity>
                                </View>
                            </View>
                        </View>)
                }
            })}
        </View>
    )
}

export default MembershipCard

const styles = StyleSheet.create({
    itemholder: {
        flex: 1,
        alignContent: 'center',
        marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
    },
    background: {
        flexDirection: 'column',
        padding: PixelRatio.getPixelSizeForLayoutSize(2),
        alignContent: "space-between",
        justifyContent: "space-between",
    },
    item: {
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    innercontainer: {
        backgroundColor: '#ffffff',
        padding: PixelRatio.getPixelSizeForLayoutSize(5),
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(5),
        flexDirection: "column",
        alignItems: "baseline"
    },
    text: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
    },
    heading: {
        fontWeight: "bold",
        color: 'black'
    },
    regularcolor: {
        color: 'grey',
    },
    brand: {
        color: 'orange'
    },
    sm: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(4)
    },
    button: {
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(3),
        paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(2),
        backgroundColor: '#FFF9FB',
    },
    card: {
        width: '80%',
        flexDirection: 'row',
        padding: PixelRatio.getPixelSizeForLayoutSize(5),
        backgroundColor: "#ffffff",
        marginBottom: PixelRatio.getPixelSizeForLayoutSize(7),
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(7),
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    package:{
        backgroundColor: '#FFFFFF',
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(4),
        paddingVertical: PixelRatio.getPixelSizeForLayoutSize(1),
        paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(2)
    }
})
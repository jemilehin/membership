// components
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, PixelRatio, Dimensions } from "react-native";
import MembershipCard from "../componets/MembershipCard";
import MembershipLayout from "../componets/MembershipLayout";

const deviceScreenWidth = Dimensions.get("screen").width

export const Membership = () => {
    const data1 = [
        {
            package: "PLUS",
            type: "Bronze Membership",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            level: "Great for Beginners",
            price: "$25.90",
            img: require('../assets/woman_paint.png')
        },
        {
            package: "PLUS",
            type: "Bronze Membership",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            level: "Great for Beginners",
            price: "$25.90",
            img: require('../assets/woman_paint.png')
        },
        {
            package: "PLUS",
            type: "Bronze Membership",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            level: "Great for Beginners",
            price: "$20.90",
            img: require('../assets/woman_paint.png')
        },
    ]

    const arrayLength = data1.length
    const half = deviceScreenWidth * 0.5
    const calWidth = half * arrayLength

    const data2 = [
        {
            package: "PLUS",
            type: "Bronze Membership",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            level: "Great for Beginners",
            price: "$25.90",
            img: require('../assets/woman_paint.png')
        },
        {
            package: "PLUS",
            type: "Bronze Membership",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            level: "Great for Beginners",
            price: "$25.90",
            img: require('../assets/woman_paint.png')
        },
        {
            package: "PLUS",
            type: "Bronze Membership",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            level: "Great for Beginners",
            price: "$25.90",
            img: require('../assets/woman_paint.png')
        }
    ]

    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor="orange" />
            <ScrollView showsHorizontalScrollIndicator={false}  contentContainerStyle={{width: calWidth}} horizontal={true}>
                <MembershipLayout
                    heading="Memberships"
                    children={
                    <MembershipCard
                        data={data1}
                        direction="row"
                    />} 
                />
            </ScrollView>
            <MembershipLayout heading="Memberships" children={<MembershipCard data={data2} direction="column" />} />
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: PixelRatio.getPixelSizeForLayoutSize(10)
    },
})


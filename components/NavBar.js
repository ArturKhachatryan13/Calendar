import {View, Text, StyleSheet, Button} from "react-native";

function NavBar({OnPress}) {
    return(
        <View style={styles.NavBarStyle}>
            <Button
             onPress={OnPress} 
             title ="Calendar"/>
        </View>
    );
}

export default NavBar;


const styles = StyleSheet.create({
    NavBarStyle: {
        flex:1,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",

    }
})
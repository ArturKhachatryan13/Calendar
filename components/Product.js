import{View, Text, StyleSheet} from "react-native"

function Product( {item}) {
    console.log(item)
    return(
        <View style={styles.listContainer}>
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{item.name}  ${item.amount} </Text>  
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{item.date}</Text>
                </View>                    
            </View>
        </View>
        
      
    );
}

export default Product;

const styles = StyleSheet.create({
    listContainer:{
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: "black",
        paddingTop: 20,
    },
    mainContainer: {
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems:"center",
        borderWidth: 1,
        borderRadius:6,
        height:30,
        marginTop:7,
        backgroundColor: "#E5CCFF",
    },
    titleContainer: {
        paddingLeft:10,
    },
    titleText: {
        fontSize:20
    },
    dateText: {
        fontSize: 15,
        paddingLeft: 3,
    },
    dateContainer: {
        paddingRight: 10,
        marginRight:5,
        borderWidth:1,
        borderRadius: 6,
        backgroundColor: "#ACC1C1"
    }


})
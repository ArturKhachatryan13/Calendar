import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import DatePicker from "react-native-datepicker";
import Product from "./Product";

function InputComp({OnPress}) {

    const [titleValue, setTitleValue] =  useState("");
    const [amountValue, setAmauntValue] = useState("");
    const [productList, setProductList] = useState([]);
    const [selectedDate, setSelectedDate ] = useState( null )



    const geteTitleValue =(title)=> {
            setTitleValue( title );
    }

    const getAmountValue =(Amount)=> {
        setAmauntValue( Amount );
    }

    const addNewProduct =()=> {
        if (titleValue || amountValue) {
                setProductList(CurrentList=>[
                ...CurrentList,
                { name:titleValue, amount: amountValue, id: Math.random().toString(), date: selectedDate },
                ])
                }       
        setTitleValue("");
        setAmauntValue("");
    }




    return(
    <View style={styles.backGroundContainer}>           
        <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text>Title</Text>
                    <Text>Amount</Text>
                </View>
                <View style={styles.InputsContainer}>
                    <TextInput 
                        style={styles.titleInput}
                        onChangeText={geteTitleValue}
                        value={titleValue}/>
                    <TextInput 
                        style={styles.titleInput}
                        onChangeText={getAmountValue}
                        value={amountValue}/>
                </View>
                <View >
                    <DatePicker style={styles.datePicker}
                        selected={selectedDate} 
                        onDateChange={date=>setSelectedDate(date)}
                        date={selectedDate}/>   
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.cancelButton}>
                        <Button
                        title="Cancel"
                        onPress={OnPress}/>
                    </View>
                    <View style={styles.addButton}>
                        <Button
                        title="Add Expense"
                        onPress={addNewProduct}/>
                    </View>
                    
                </View>
        </View>
        
        {productList.map( item=> <Product key={item.id} item={item}/>)}
    </View>
    );
}

export default InputComp;

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection:"row",
        justifyContent: "space-between",
        marginLeft:10,
        marginRight:10

    },
    mainContainer: {
        borderWidth:1,
        borderColor:"black",
        borderRadius: 6,
        margin: 5,
        padding:5,
        backgroundColor: "#E0D5EB"
    },
    InputsContainer: {
        flexDirection:"row",
        justifyContent: "space-between",
    },
    titleInput: {
        borderColor: "black",
        height: 40,
        width: 150,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 5
    }, 
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",        
    },
    datePicker: {
        marginLeft: 10,
        borderRadius: 5
},
    cancelButton: {
        borderRadius: 6,
        borderRightColor:"black",
        borderWidth:1,
        backgroundColor: '#C683E8',
},
addButton: {
    borderRadius: 6,
        borderRightColor:"black",
        borderWidth:1,
        backgroundColor: '#C683E8',
},
backGroundContainer: {
}
   
})
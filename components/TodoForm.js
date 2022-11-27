import { useState } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

export const TodoForm = ({ submitHandler }) => {
    const [text, setText] = useState("");

    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
            <TextInput 
                styles={styles.input}
                placeholder='new todo...'
                value={text}
                onChangeText={changeHandler}
            />

            <Button 
                onPress={(e) => submitHandler(text)} 
                title="add todo" 
                color="coral" 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderColor: "#ddd",
        borderBottomWidth: 1,
        borderStyle: "dashed",
    },
});
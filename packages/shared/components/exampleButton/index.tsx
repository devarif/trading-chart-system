import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

interface Props {
  onPress: () => void
}

export const ExampleButton = (props: Props) => {
  const {onPress = () => {}} = props
  return (
    <Pressable onPress={onPress} style = {styles.mainContainer}>
      <Text style = {styles.text}>Example Shared Button</Text>
    </Pressable>
  );
};


const styles = StyleSheet.create({
    mainContainer: {
      paddingVertical: 20,
      paddingHorizontal: 10,
      backgroundColor: '#2BE044'
    },
    text: {
      fontSize: 16,
      color: '#E03F2B'
    }
})
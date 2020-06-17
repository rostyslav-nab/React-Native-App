import React from "react";
import { StyleSheet, View, Image } from "react-native";

// const { height, widht } = Dimensions.get("window");

export const OpenPhotoScreen = ({ navigation }) => {
  const link = navigation.getParam("link");
  return (
    <View style={styles.center}>
      <Image style={styles.image} source={{ uri: link }} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

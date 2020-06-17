import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export const ImageItem = ({ img, onOpen }) => {
  return (
    <View style={styles.oneImageBlock}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(img)}>
        <ImageBackground
          style={styles.ImageStyle}
          source={{ uri: img.urls.regular }}
        />
      </TouchableOpacity>

      <View style={styles.textInfo}>
        <Text style={styles.textBlock}>Author: {img.user.first_name}</Text>
        <Text style={styles.textBlock}>Description: {img.lt_description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageStyle: {
    flex: 1,
    height: 300,
  },
  textBlock: {
    flex: 1,
    textAlign: "center",
    fontFamily: "open-bold",
    color: "#03fcf0",
  },
  oneImageBlock: {
    marginBottom: 20,
  },
  textInfo: {
    marginTop: 10,
  },
});

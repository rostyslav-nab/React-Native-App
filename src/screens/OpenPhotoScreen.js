import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// const { height, widht } = Dimensions.get("window");

export const OpenPhotoScreen = (images) => {
  return (
    <View style={styles.center}>
      <Text>OpenPhotoScreen</Text>
      <Text>{console.log(images.navigation.state.params.images[2].urls)}</Text>
      <Text>{console.log(id)}</Text>
      {/* <Image source={{ uri: images.urls.regular }} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
  },
});

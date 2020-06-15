import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Image,
  TouchableHighlight,
} from "react-native";
import axios from "axios";
import { ROOT_URL, client_id } from "../REST/config";
import { THEME } from "../theme";
import { CardItem, Thumbnail, Card } from "native-base";

//const { height, widht } = Dimensions.get("window");

export const MainScreen = ({ navigation }) => {
  const [isloading, setIsLoading] = useState(false);
  const [images, setImages] = useState("");

  const goToPhoto = () => {
    navigation.navigate("OpenPhoto", { images }); // Так же можно прокинуть данные вторым параметром
  };

  const loadWallpapers = () => {
    axios
      .get(`${ROOT_URL}/random?count=30&client_id=${client_id}`)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("request completed"));
  };

  const renderItem = (image) => {
    return (
      <View style={styles.imageBlock}>
        <View style={styles.oneImageBlock}>
          <Card style={{ borderColor: THEME.BACKGROUND_COLOR }}>
            <CardItem
              button
              onPress={goToPhoto}
              style={{
                height: 300,
                backgroundColor: THEME.BACKGROUND_COLOR,
              }}
            >
              <Thumbnail
                style={styles.ImageStyle}
                source={{ uri: image.urls.regular }}
              />
            </CardItem>
          </Card>

          {/* <TouchableHighlight onPress={goToPhoto}> */}
          {/* <Image
            style={styles.ImageStyle}
            source={{ uri: image.urls.regular }}
          /> */}
          {/* </TouchableHighlight> */}
        </View>
        <View>
          <Text style={styles.textBlock}>Author: {image.user.first_name}</Text>
          <Text style={styles.textBlock}>
            Description: {image.alt_description}
          </Text>
        </View>
      </View>
    );
  };

  return isloading ? (
    <View>
      <ActivityIndicator size="large" color="#000" />
    </View>
  ) : (
    <View style={styles.center}>
      <Button
        title="Request new photos"
        color={THEME.DESCRIPTION_TEXT_COLOR}
        onPress={loadWallpapers}
      />
      <FlatList
        // pagingEnabled Плавность прокрутки
        data={images}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: "Unsplash API",
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: THEME.BACKGROUND_COLOR,
  },
  imageBlock: {
    width: "100%",
    padding: 5,
    backgroundColor: THEME.BACKGROUND_COLOR,
  },
  oneImageBlock: {
    height: 350,
    backgroundColor: THEME.BACKGROUND_COLOR,
    marginBottom: -30,
  },
  ImageStyle: {
    flex: 1,
    height: 300,
  },
  textBlock: {
    flex: 1,
    textAlign: "center",
    fontFamily: "open-bold",
    color: THEME.DESCRIPTION_TEXT_COLOR,
  },
});

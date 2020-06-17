import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Button,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ROOT_URL, client_id } from "../REST/config";
import { THEME } from "../theme";
import { ImageItem } from "../components/ImageItem";
import { loadImages } from "../store/actions/image";

export const MainScreen = ({ navigation }) => {
  const [isloading, setIsLoading] = useState(false);
  const [images, setImages] = useState("");
  // const imageData = images; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

  const openPostHandler = (images) => {
    navigation.navigate("OpenPhoto", {
      link: images.urls.regular,
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  const allImages = useSelector((state) => state.image.allImages);

  const loadWallpapers = () => {
    axios
      .get(`${ROOT_URL}/random?count=30&client_id=${client_id}`)
      .then((response) => {
        setImages(response.data);
        // dispatch(
        //   loadImages({
        //     type: "LOAD_IMAGES",
        //     payload: response.data,
        //   })
        // );
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("request completed"));
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
        keyExtractor={(image) => image.id.toString()}
        renderItem={({ item }) => (
          <ImageItem img={item} onOpen={openPostHandler} />
        )}
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
});

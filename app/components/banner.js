import Carousel, { Pagination } from "react-native-snap-carousel";
import React, { useRef, useState } from "react";
import { Image, View, StyleSheet, useWindowDimensions } from "react-native";
import api from "../config/api";

export default function Banner({ data }) {
  const { width } = useWindowDimensions();
  const [active, setActive] = useState(0);
  const ref = useRef();

  return (
    <View style={styles.container}>
      <Carousel
        autoplay={true}
        activeDotIndex={10}
        ref={ref}
        data={data}
        renderItem={({ item, index }) => (
          <View
            style={{
              ...styles.imageContainer,
              width: width,
            }}
          >
            <Image
              style={styles.image}
              source={{ uri: api.baseAssetUrl + item.bimg }}
            />
          </View>
        )}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => setActive(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={active}
        containerStyle={styles.dotContainer}
        dotStyle={styles.dot}
        inactiveDotStyle={
          {
            // inactive dot style
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
    padding: 0,
    height: 200,
  },

  image: {
    borderRadius: 20,
    width: "97.5%",
    height: "100%",
    padding: 0,
    margin: 0,
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: "rgba(0, 0, 0, 0.92)",
  },
});

// Tamil

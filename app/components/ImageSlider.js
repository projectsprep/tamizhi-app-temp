import Carousel, { Pagination } from "react-native-snap-carousel";
import React, { useRef, useState } from "react";
import { Image, View, StyleSheet, useWindowDimensions } from "react-native";

export default function ImageSlider({ images }) {
  const { width, height } = useWindowDimensions();
  const [active, setActive] = useState(0);
  const ref = useRef();

  return (
    <View style={styles.container}>
      <Carousel
        autoplay={true}
        activeDotIndex={10}
        ref={ref}
        data={images}
        renderItem={({ item, index }) => (
          <View
            style={{
              height: Math.floor(height * (50 / 100)),
              width: width,
            }}
          >
            <Image style={styles.image} source={{ uri: item }} />
          </View>
        )}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => setActive(index)}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={active}
        containerStyle={styles.dotContainer}
        dotStyle={styles.dot}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "black",
  },
});

// Tamil

import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import React from "react";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Restaurant Name",
    icon,
    photos = [
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    address = "100 random Address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <Card>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Title title={name} subtitle={address} />
    </Card>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  image: {
    height: 250,
  },
});

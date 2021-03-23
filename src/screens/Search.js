import React from "react";
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";

//Thunk
import { fetchSearch } from "../redux/searchJobSlice"

import {
  StyleSheet,
  SafeAreaView,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import SearchField from "../components/SearchField";
import SearchJobList from "../components/SearchJobList";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9bbf2",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  companyLogo: {
    width: 100,
    height: 100,
  }
});


export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchField />
      <SearchJobList />
    </SafeAreaView>
  );
}
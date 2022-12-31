import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import NavFavourites from "../components/NavFavourites";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {GOOGLE_MAPS_APIKEY} from '@env'

import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../slices/navSlice";

const HomeScreen = () => {
  //to push info into the data layer
  const dispatch = useDispatch();
  

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5 flex`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where From ?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            //console.log(data, details);
            //push info into the data layer
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          returnKeyType={"search"} //press enter then search
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400} //only stopped typing for 4s, will refresh
          onFail={(error) => console.error(error)}
        />
        <NavOptions />
        <NavFavourites/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

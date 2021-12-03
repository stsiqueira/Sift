import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import postImage from '../services/CameraScan';
import ItemData from '../assets/jsonData/data.json'
import { useNavigation } from "@react-navigation/core";
import { CommonActions } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import { uploadtoS3 } from '../services/ProfileServices'
import { updateHistory, updateBadge } from '../services/ProfileServices'
import SVGComponent from '../svgComponents/SvgComponent';
import { fallbackLogo, Logo } from '../services/Images';



export default function CameraScreen() {

  //  camera permissions
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);

  const [type, setType] = useState(Camera.Constants.Type.back);


  // Screen Ratio and image padding
  const [imagePadding, setImagePadding] = useState(0);
  const [ratio, setRatio] = useState('4:3');  // default is 4:3
  const { height, width } = Dimensions.get('window');
  const screenRatio = height / width;
  const [isRatioSet, setIsRatioSet] = useState(false);

  //Other States
  const [image, setImage] = useState(null);
  const [analyzing, SetAnalyzing] = useState(false);
  const [labels, SetLabels] = useState([]);
  const [itemData, setItemData] = useState(ItemData)

  const navigation = useNavigation()
  let encd64Image = null;

  useEffect(() => {
    async function getCameraStatus() {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    }
    getCameraStatus();

    async function getGalleryStatus() {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      // setHasGalleryPermission(galleryStatus.status === 'granted')
      setHasGalleryPermission(true)
    }
    getGalleryStatus();

  }, []);

  const scaleCircle = useRef(new Animated.Value(1)).current;

  const circleAnimation = {
  transform:[
    {
      scale:scaleCircle
    }
  ]
  }

  useEffect(() => {
  ScaleCircle()
  }, [])
  const ScaleCircle = () =>{
    Animated.loop(
      Animated.sequence([
      Animated.timing(scaleCircle, {
        toValue:1.3,
        duration: 2500,
      }),
      Animated.timing(scaleCircle,{
        toValue:1,
        duration:2500
      })
      ])
    ).start()
  }

  // set the camera ratio and padding.
  // this code assumes a portrait mode screen
  const prepareRatio = async () => {
    let desiredRatio = '4:3';  // Start with the system default
    // This issue only affects Android
    if (Platform.OS === 'android') {
      const ratios = await camera.getSupportedRatiosAsync();

      // Calculate the width/height of each of the supported camera ratios
      // These width/height are measured in landscape mode
      // find the ratio that is closest to the screen ratio without going over
      let distances = {};
      let realRatios = {};
      let minDistance = null;
      for (const ratio of ratios) {
        const parts = ratio.split(':');
        const realRatio = parseInt(parts[0]) / parseInt(parts[1]);
        realRatios[ratio] = realRatio;
        // ratio can't be taller than screen, so we don't want an abs()
        const distance = screenRatio - realRatio;
        distances[ratio] = realRatio;
        if (minDistance == null) {
          minDistance = ratio;
        } else {
          if (distance >= 0 && distance < distances[minDistance]) {
            minDistance = ratio;
          }
        }
      }
      // set the best match
      desiredRatio = minDistance;
      //  calculate the difference between the camera width and the screen height
      const remainder = Math.floor(
        (height - realRatios[desiredRatio] * width) / 2
      );
      // set the preview padding and preview ratio
      setImagePadding(remainder);
      setRatio(desiredRatio);
      // Set a flag so we don't do this 
      // calculation each time the screen refreshes
      setIsRatioSet(true);
    }
  };

  // the camera must be loaded in order to access the supported ratios
  const setCameraReady = async () => {
    if (!isRatioSet) {
      await prepareRatio();
    }
  };

  //function called when image is clicked
  const takePicture = async () => {
    console.log("Clicked");
    if (camera) {
      const clicked = await camera.takePictureAsync({ quality: 0.5, base64: true });

      encd64Image = clicked.base64;
      getLabels(clicked.base64)

    }
  }

  //Pick an image from gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Image,
      allowsEditing: false,
      aspect: [2, 2],
      quality: 0.5,
      base64: true,
    });
    if (!result.cancelled) {
      encd64Image = result.base64;
      getLabels(result.base64);
    }
  };

  const showInstructions = (id) => {
    console.log("Inside Show Instructions 1");
    const data = itemData.find(el => el.id === id);
    if (data) {

      //POST data on HISTORY **CODE**
      
      SecureStore.getItemAsync("g-user").then((result) => {
        console.log("g-user resolved")
        let response = JSON.parse(result)
        if (response.user && response.user.email) {
            //Send file to S3 here
                uploadtoS3(encd64Image).then((responseImagePath) => {
                    console.log("Image Service response->", responseImagePath); //Get public S3 image path in response                       
            //Write history
                updateHistory(response.user.email, data.name, responseImagePath);
            
            //Update Badge Status
                updateBadge(response.user.email, 1, true);

            if(id == "cup_with_plastic_lid_and_paper_sleeve" || id == "glass_bottle_with_plastic_lid"){
                updateBadge(response.user.email, 4, true);
            }
            });

        }
    });

      // navigation.navigate("Search", {
      // 	pageType: 'text',
      // 	searchID: id,
      // 	data: data,
      // })

      navigation.dispatch({
        ...CommonActions.reset({
          index: 0,
          routes: [
            {
              name: "Search",
              state: {
                routes: [
                  {
                    name: "ScanResult",
                    params: {
                      searchID: id,
                      data: data,
                      pageType: "image",
                      searchImage: encd64Image,
                    }
                  }
                ]
              }
            }
          ]
        })
      });

    } else { // no results was found for the searched keyword
      let data = [];
      showFallbackInstructions(data);      
    }
  }

  const showFallbackInstructions = (labelsData) => {
    navigation.dispatch({
      ...CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "Search",
            state: {
              routes: [
                {
                  name: "FallbackLabels",
                  params: {                    
                    data: labelsData,
                    searchImage: encd64Image,
                  }
                }
              ]
            }
          }
        ]
      })
    });
  }

  const getLabels = async (B64ImgData) => {

    SetAnalyzing(true);
    const picLabels = await postImage(B64ImgData);

    const picLabelArray = [];

    if (picLabels.Labels) {
      picLabels.Labels.forEach((elem, index) => {

        picLabelArray.push({
          "id": index,
          "label": elem.Label,
          "confidence": elem.Confidence ? elem.Confidence : 0
        });
      });

      SetLabels(picLabelArray);
    }
    else {
      // No Label Returned
      showFallbackInstructions([]);      
    }

    let fallbackOptions = []

    picLabelArray.forEach(function (item) {
      // if (item.confidence > 65 && itemData.find(x => (x.name.toLowerCase() == item.label.toLowerCase()))) {
        fallbackOptions.push(item.label);
      // }
    });


    if (fallbackOptions.length == 0) {
      showFallbackInstructions([]);
    }
    else if (fallbackOptions.length == 1) {
      // Call the result screen.
      showInstructions(fallbackOptions[0]);
    }
    else if (fallbackOptions.length > 1) {
      //Call the Fallback Screen
      showFallbackInstructions(fallbackOptions);
      // showInstructions("cup_with_plastic_lid_and_paper_sleeve");

    }
  }

  if (analyzing === true) {
    return (
      <View style={styles.information}>
              <Animated.View style={[{ backgroundColor:'#8CE3FF',borderRadius:80, width:160, height:160, justifyContent:'center', alignItems:'center'}, circleAnimation]}>
                <View style={[{ backgroundColor:'#D8F5FF',borderRadius:70, width:140, height:140, justifyContent:'center', alignItems:'center'}]}>
                  <View style={[{ backgroundColor:'#FFF', borderRadius:60,width:120, height:120, justifyContent:'center', alignItems:'center'}]}>
                  </View>
                </View>
              </Animated.View>
              <View style={{marginTop:-110}}>
                    <SVGComponent img={fallbackLogo}/>
              </View>

            <Text style={{marginTop:100, marginHorizontal:20,fontFamily:'Lato-Regular', fontSize:18,lineHeight:22, textAlign:'center'}}>Please wait for a moment while we analyse this picture.</Text>
      </View>
    );
  }

  if (hasPermission === null) {
    return (
      <View style={styles.information}>
        <Text>Waiting for camera permissions</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.information}>
        <Text>No access to camera</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Camera
          style={[styles.cameraPreview, { marginTop: imagePadding, marginBottom: imagePadding }]}
          ratio={ratio}
          type={type}
          onCameraReady={setCameraReady}
          ref={(ref) => {
            setCamera(ref);
          }}
        >
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 30 }}>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                alignItems: 'center',
                backgroundColor: 'transparent'
              }}
              // onPress={() => { hasGalleryPermission ? pickImage() : console.log("Permission not set"); }}
              onPress={() => { pickImage() }}
            >
              <MaterialCommunityIcons
                name="image-album"
                style={hasGalleryPermission ? { color: "#fff", fontSize: 40 } : { color: "#babbcc", fontSize: 40 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                alignItems: 'center',
                backgroundColor: 'transparent',
              }}
              onPress={() => takePicture()}
            >
              <FontAwesome
                name="camera"
                style={{ color: "#fff", fontSize: 40 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                alignItems: 'center',
                backgroundColor: 'transparent',
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <MaterialCommunityIcons
                name="camera-switch"
                style={{ color: "#fff", fontSize: 40 }}
              />
            </TouchableOpacity>
            {/* {image && <Image source={{uri: image}} style={{flex:1}} />} */}
          </View>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  information: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center'
  },
  cameraPreview: {
    flex: 1,
  }
});
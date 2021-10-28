import { StyleSheet } from "react-native";

const darkBlue = '#134075'
export const globalStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        width:'100%',
        backgroundColor: '#F3F4F8',
        paddingHorizontal:20,
        paddingVertical:30,
      },
    callToActionWrapper:{
        paddingBottom:30,
    },
    promotionSectionWrapper:{
        paddingBottom:34,
    },

    CallToActionContainer:{
        marginTop:10,
        flexDirection:"row",
    },
    CallToActionImageContainer:{
        padding: 24,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#E4E6EE',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
    },
    CallToActionTextButtonContainer:{
        backgroundColor: darkBlue,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        flex:1,
        paddingTop:14,
        paddingLeft:14,
        justifyContent:'space-between'
    },
    CallToActionText:{
        fontSize:14,
        lineHeight:20,
        color:'white'
    },
    CallToActionButtonContainer:{
        flexDirection: "row",
        justifyContent:"flex-end",
        paddingBottom:8,
        paddingRight:10
    },
    screenHeading:{
        fontFamily:"Lato-Bold",
        fontSize:36,
        lineHeight:43,
        marginBottom:14
    },
    sectionHeading:{
        fontFamily:"Lato-Bold",
        fontSize:24,
        lineHeight:29
    },
    iconContainer:{
        borderBottomWidth:5,
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        paddingHorizontal:10,
    },
    iconLabel:{
        color: '#016089'
    },
})
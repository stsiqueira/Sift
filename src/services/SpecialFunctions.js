//NOT IN USE....THIS IS HOW WE SAVE DATA IN LOCAL STORAGE
export const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userData')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
      console.log("didnt work")
    }
  }

export const storeData = async (value) => {
    console.log("tesssss")
    try {
      console.log("we are here")
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('useData', jsonValue)
      console.log(jsonValue)
    } catch (e) {
      console.log(e)
    }
  }
import * as SecureStore from 'expo-secure-store';
const dbServiceUrl = "https://sift.wmdd4950.com/dbservice";

const getIdToken = () => new Promise((resolve) => {

    SecureStore.getItemAsync("g-user").then((result)=>{
        let response = JSON.parse(result)
        if (response) {
            resolve(response.idToken)
        }
        else resolve(""); 
    });
})



const getDBProfile = async (userEmail) => new Promise((resolve) => {
    console.log("3 -Inside DB Profile");
    getIdToken().then((token)=>{
        // console.log("accessToken Value->", token);
    const getUrl = dbServiceUrl + "/getProfile?id=" + (userEmail ? userEmail : "Invalid")
    console.log("URL -", getUrl);
    fetch(getUrl, {method: 'GET',
     headers: new Headers({
        'Authorization': 'Bearer ' + token, 
        'Content-Type': 'application/x-www-form-urlencoded'
      })})
        .then(res => res.json())
        .then(data => {
            resolve(data);
        })
    });  
});


const createDBProfile = (userData) => new Promise((resolve) => {

    
    // userData must have userData.email & userData.name
    // userData = {email: "abc@xyz.com", name: "Test User1"}

    const data = { profileData: userData };

    let postUrl = dbServiceUrl + "/createProfile"
    //POST request with body equal on data in JSON format


    fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        //Then with the data from the response in JSON...
        .then((data) => {
            resolve(data);
        })
        //Then with the error genereted...
        .catch((error) => {
            resolve(error);
        });

    //	
});

const updateDBName = (userEmail, newName) => new Promise((resolve) => {    

    const data = { userName: newName };

    let postUrl = dbServiceUrl + "/updateProfileName?id=" + userEmail
    //POST request with body equal on data in JSON format


    fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        //Then with the data from the response in JSON...
        .then((data) => {
            resolve(data);
        })
        //Then with the error genereted...
        .catch((error) => {
            resolve(error);
        });

    //	
});


const updateDBHistory = (userEmail, newHistoryItem) => new Promise((resolve) => {    

    const data = { historyItem: newHistoryItem };

    let postUrl = dbServiceUrl + "/updateHistory?id=" + userEmail
    //POST request with body equal on data in JSON format


    fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        //Then with the data from the response in JSON...
        .then((data) => {
            resolve(data);
        })
        //Then with the error genereted...
        .catch((error) => {
            resolve(error);
        });
});

const updateDBBadge = (userEmail, newBadgeItem) => new Promise((resolve) => {    

    const data = { badgedata: newBadgeItem };

    let postUrl = dbServiceUrl + "/updateBadge?id=" + userEmail
    //POST request with body equal on data in JSON format


    fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        //Then with the data from the response in JSON...
        .then((data) => {
            resolve(data);
        })
        //Then with the error genereted...
        .catch((error) => {
            resolve(error);
        });
});

const s3UploadService = (base64Image) => new Promise((resolve) => {    

    const data = { eImage: base64Image };

    let postUrl = "https://sift.wmdd4950.com/awsservice/uploadImgtoS3"
    console.log(postUrl);
    //POST request with body equal on data in JSON format

    fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        //Then with the data from the response in JSON...
        .then((data) => {
            resolve(data);
        })
        //Then with the error genereted...
        .catch((error) => {
            resolve(error);
        });
});

const getProfile = async (userEmail) => {    
    try {
        return await getDBProfile(userEmail);       
    }
    catch (e) {
        console.log(e);
    }

}

const updateName = async (userEmail, newName) => {    
    try {
        return await updateDBName(userEmail, newName);       
    }
    catch (e) {
        console.log(e);
    }

}

const updateHistory = async (userEmail, objectName, s3BucketImagePath) => {    

    const date = new Date().getDate(); 
    const month = new Date().getMonth() + 1; 
    const year = new Date().getFullYear(); 
    const currentDate = date + '/' + month + '/' + year;

    const hours = new Date().getHours();
    const min = new Date().getMinutes(); 
    const sec = new Date().getSeconds();
    const currentTime = hours + ':' + min + ':' + sec; 

    let newHistoryItem = {
        itemName: objectName,
        imgPath: s3BucketImagePath,
        scannedDate: currentDate,
        scannedTime: currentTime
      }

    try {
        return await updateDBHistory(userEmail, newHistoryItem);       
    }
    catch (e) {
        console.log(e);
    }

}

const updateBadge = async (userEmail, badgeId, badgeValue) => {    

    let newBadgeItem = {id: badgeId, value: badgeValue}

    try {
        return await updateDBBadge(userEmail, newBadgeItem);       
    }
    catch (e) {
        console.log(e);
    }

}

const uploadtoS3 = async (base64Image) => {     

    try {
        return await s3UploadService(base64Image);       
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = {
    getProfile,
    createDBProfile,
    updateName,
    updateHistory,
    updateBadge,
    uploadtoS3
};

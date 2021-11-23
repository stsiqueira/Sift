const dbServiceUrl = "https://sift.wmdd4950.com/dbservice";

const getDBProfile = (userEmail) => new Promise((resolve) => {
    console.log("3 -Inside DB Profile");

    const getUrl = dbServiceUrl + "/getProfile?id=" + userEmail
    console.log("URL -", getUrl);
    fetch(getUrl, {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            resolve(data);
        })

});


const createDBProfile = (userData) => new Promise((resolve) => {

    
    // userData must have userData.email & userData.name
    // userData = {email: "abc@xyz.com", name: "Test User1"}

    const data = { profileData: userData };

    postUrl = dbServiceUrl + "/createProfile"
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

    postUrl = dbServiceUrl + "/updateProfileName?id=" + userEmail
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

    postUrl = dbServiceUrl + "/updateHistory?id=" + userEmail
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

    postUrl = dbServiceUrl + "/updateBadge?id=" + userEmail
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

const updateHistory = async (userEmail, objectName, s3BucketImagePath, scanDate, scanTime) => {    

    let newHistoryItem = {
        itemName: objectName,
        imgPath: s3BucketImagePath,
        scannedDate: scanDate,
        scannedTime: scanTime
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

module.exports = {
    getProfile,
    createDBProfile,
    updateName,
    updateHistory,
    updateBadge
};
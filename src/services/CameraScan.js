const callAWSService = (type, encodedImage) => new Promise((resolve) => {

    // console.log(encodedImage);
    //Obj of data to send in future like a dummyDb
    const data = { eImage: encodedImage };

    postUrl = "https://sift.wmdd4950.com/awsservice" + (type == "custom" ? "/getcustomlabels" : "/getlabels")
    console.log(postUrl);
    //POST request with body equal on data in JSON format


    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 3000)

    fetch(postUrl, {
        signal: controller.signal,
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

const postImage = async (encodedImage) => {

    let labels;
    const customCallResponse = await callAWSService("custom", encodedImage);
    console.log("CC -->", customCallResponse);

    //Call general api if custom is timed out or returned error.
    if (customCallResponse.toString().includes("Aborted") || customCallResponse.toString().includes("error")) {
        const generalCallResponse = await callAWSService("general", encodedImage);
        console.log("GC -->", generalCallResponse);
        labels = generalCallResponse;
    }
    else if (customCallResponse.Labels) {
        // LOGIC TO CHECK IF THE RETURN FROM CUSTOM API IS SENSIBLE
        let c_cup = customCallResponse.Labels.find(elem => elem.Custom_Label == "c_Cofee Cup")
        let cupConfidence = c_cup ? c_cup.Confidence : 0
        let c_sleeve = customCallResponse.Labels.find(elem => elem.Custom_Label == "c_Sleeve")
        let sleeveConfidence = c_sleeve ? c_sleeve.Confidence : 0
        let c_Lid = customCallResponse.Labels.find(elem => elem.Custom_Label == "c_Lid")
        let lidConfidence = c_Lid ? c_Lid.Confidence : 0
        let c_keyboard = customCallResponse.Labels.find(elem => elem.Custom_Label == "c_Keyboard")
        let keyBoardConfidence = c_keyboard ? c_keyboard.Confidence : 0
        let c_banana = customCallResponse.Labels.find(elem => elem.Custom_Label == "c_Banana")
        let bananaConfidence = c_banana ? c_banana.Confidence : 0
        let c_bottle = customCallResponse.Labels.find(elem => elem.Custom_Label == "c_Glass Bottle")
        let glassBottleConfidence = c_bottle ? c_bottle.Confidence : 0
        let c_bottleCap = customCallResponse.Labels.find(elem => elem.Custom_Label == "c_Bottle Cap")
        let bottleCapConfidence = c_bottleCap ? c_bottleCap.Confidence : 0

        //FILTER LABELS ON BASIS OF CONFIDENCE LEVEL
        if (cupConfidence > 50 && lidConfidence > 40 && sleeveConfidence > 15) {
            labels = { "Labels": [{ "Label": "cup_with_plastic_lid_and_paper_sleeve" }] }
        }
        else if (cupConfidence > 50 && lidConfidence > 50) {
            labels = { "Labels": [{ "Label": "cup_with_plastic_lid_and_paper_sleeve" }] }
            //Ideally to be this           
            //             "Label" : "cup_with_plastic_lid"
        }
        else if (glassBottleConfidence > 50 && bottleCapConfidence > 40) {
            labels = { "Labels": [{ "Label": "glass_bottle_with_plastic_lid", "Confidence": 100 }] }
        }
        else if (cupConfidence > 65) {
            labels = { "Labels": [{ "Label": "coffee_cup_paper", "Confidence": 100 }] }
        }
        else if (glassBottleConfidence > 65) {
            labels = { "Labels": [{ "Label": "juice_bottle_glass", "Confidence": 100 }] }
        }
        else if (keyBoardConfidence > 65) {
            labels = { "Labels": [{ "Label": "keyboard_computer", "Confidence": 100 }] }
        }
        else if (bananaConfidence > 65) {
            labels = { "Labels": [{ "Label": "fruit_raw", "Confidence": 100 }] }
        }
        else { // Call General Label API
            const generalCallResponse = await callAWSService("general", encodedImage);
            console.log("GC2 -->", generalCallResponse);
            labels = generalCallResponse;
        }
    }

    return labels;

}

export default postImage;
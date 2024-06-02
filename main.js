
// Step 1: Initialize an array to store your NFTs
let nftCollection = [];

// Step 2: Implement the createNFT function
function createNFT(title, author, creationDate, description) {
    const nft = {
        title: title,
        author: author,
        creationDate: creationDate,
        description: description
    };
    
    
    nftCollection.push(nft);
}

// Step 3: Implement the displayNFTs function
function displayNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("Title: " + nftCollection[i].title);
        console.log("Author: " + nftCollection[i].author);
        console.log("Creation Date: " + nftCollection[i].creationDate);
        console.log("Description: " + nftCollection[i].description);
        console.log("-------------------");
    }
}

// Step 4: Implement the getNFTCount function
function getNFTCount() {
    
    return nftCollection.length;
}


createNFT("Rangoli Art", "Arjun Kirdolia", "2024-05-29", "A vibrant Rangoli design made with colored powders for Diwali.");
createNFT("Classical Dance", "Jannat Pla", "2024-05-30", "A depiction of the classical Bharatanatyam dance form.");
createNFT("Festive Lights", "Kurmeet Bishnoi", "2024-05-31", "An illustration of beautifully lit lamps during Karthigai Deepam.");
createNFT("Traditional Music", "Shiv Prakash", "2024-06-01", "An artwork showcasing classical Indian musical instruments like sitar and tabla.");


displayNFTs();


console.log("Total Supply: " + getNFTCount());

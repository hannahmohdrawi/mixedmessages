
//Tourist ideas in Malaysia 

const malaysiaInfo = {

    food : ["Laksa", 
    "Nasi Lemak", 
    "Mee Goreng", 
    "Satay", 
    "Nasi Kerabu", 
    "Beef Rendang"],


    places : ["Penang", 
    "Johor Bahru", 
    "Tioman Island", 
    "Perhentian Island", 
    "Kuala Lumpur", 
    "Ipoh"], 



    comments : ["The food is great.", 
    "The location has amazing views!", 
    "The people were friendly.", 
    "The weather was hot.", 
    "The traffic was busy."],


};

//Choosing at random from each array.
const randomChoice = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const randomExperience = () => {
    const randFood = randomChoice(malaysiaInfo.food);
    const randPlaces = randomChoice(malaysiaInfo.places);
    const randComments = randomChoice(malaysiaInfo.comments);


    return `We went to ${randPlaces} and had some delicious ${randFood}. ${randComments}`
}

console.log(randomExperience());


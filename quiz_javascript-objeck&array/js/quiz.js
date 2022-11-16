let OBJ = [];
OBJ[0] = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: "yellow, pink, white, purple",
    isHavePet: "Yes",
    Education: [
        {
            name: "SD 01",
            city: "Jakarata",
            graduate: 2016
        },
        {
            name: "SMP 02",
            city: "Jakarta",
            graduate: 2019
        },
        {
            name: "SMA 03",
            city: "Tangerang"
        },


    ],
    favoriteRestaurant: ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi",]
},

    OBJ[1] = {
        name: "Wendy",
        gender: "Male",
        age: 23,
        email: "wendy@dingdong.com",
        favoriteColor: "Blue, Black, Grey",
        isHavePet: "No",
        Education: [
            {
                name: "SD 02",
                city: "Jakarata",
                graduate: 2010
            },
            {
                name: "SMP 03",
                city: "Bogor",
                graduate: 2013
            },
            {
                name: "SMA 01",
                city: "Surabaya",
                graduate: 2016
            },


        ],
        favoriteRestaurant: ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pankacake", "Eggy",]
    }


console.log("Nama : " + OBJ[1].name);
console.log("SMA : " + OBJ[1].Education[2].name);
console.log("Kota : " + OBJ[1].Education[2].city);
console.log("Makanan favorit : " + OBJ[1].favoriteRestaurant[5]);

const data = [
    {
        id:10,
        title: "café 1",
        price: 20,
        pictureUrl: "photo"
    },
    {
        id:20,
        title: "café 2",
        price: 22,
        pictureUrl: "photo"
    },
    {
        id:30,
        title: "café 3",
        price: 23,
        pictureUrl: "photo"
    }
]

const customFetch = (data, error) => {
    return new Promise (resolve, reject) => {
        setTimeout( () => {
            if(items) {
                resolve(data);
            } else {
                reject(error);
            }
        }, 2000)
    }
}

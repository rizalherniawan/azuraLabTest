const data = [
    {
        nama: 'indomie',
        harga: 3000,
        rating: 5,
        likes: 150
    },
    {
        nama: 'Laptop',
        harga: 4000000,
        rating: 4.5,
        likes: 123
    },
    {
        nama: 'Aqua',
        harga: 3000,
        rating: 4,
        likes: 250
    },
    {
        nama: 'Smart TV',
        harga: 4000000,
        rating: 4.5,
        likes: 42
    },
    {
        nama: 'Headphone',
        harga: 4000000,
        rating: 3.5,
        likes: 90
    },
    {
        nama: 'Very Smart TV',
        harga: 4000000,
        rating: 3.5,
        likes: 87
    },
]

function sortingData(data) {
    let temp;
    for(let i = 0; i < data.length; i++){
        for(let j = i + 1; j < data.length; j++){
            if(data[i].harga > data[j].harga){
                temp = data[i]
                data[i] = data[j]
                data[j] = temp
            } else if(data[i].harga == data[j].harga && data[i].rating < data[j].rating){
                    temp = data[i]
                    data[i] = data[j]
                    data[j] = temp
            } else if(data[i].harga == data[j].harga && data[i].rating == data[j].rating){
                if(data[i].likes < data[j].likes){
                    temp = data[i]
                    data[i] = data[j]
                    data[j] = temp
                }
            }
        }
    }
    return data
}


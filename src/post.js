axios.post('https://janam.free.beeceptor.com', arr,
    {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log(response.data.records);

        let myItems = [];
        response.data.records.forEach((item) => {
            myItems.push({
                SparePartID: item.SparePartID,
                Name: item.Name,
                Price: item.Price,  
                Quantity: 1,
                totalPrice: item.Price
            });
        })

        this.setState({
            myrecords: myItems
        })
    })
    .catch(error => {
        if (error) {
            console.log("REACT Error. Cannot show cart items");
        }
    });
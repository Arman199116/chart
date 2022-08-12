const getData = async () => {
    
    var options = {  
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin' : '*',
        
        },
    };
    let value
    
    // return fetch('https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=1', options )
    //       .then(response => response.json())
    
       
}

export default getData;
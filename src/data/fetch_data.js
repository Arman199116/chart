const getData = async (days) => {
    var options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
    };

    let response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=${days}`,options);
    let value = await response.json();

    return value;
};

export default getData;

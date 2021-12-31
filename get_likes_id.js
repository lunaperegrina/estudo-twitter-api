require('dotenv').config()

const needle = require('needle');
const axios = require('axios').default;

const token = process.env.BEARER_TOKEN;

const baseURL = "https://api.twitter.com/2/"
const id = "1034710670829400064"
const endpointURL = `${baseURL}users/${id}/liked_tweets`

async function getRequest() {

    const res = await axios.get(endpointURL, {
        headers: {
            "UserAgent": "v2LikedTweetJS",
            authorization: `Bearer ${token}`
        }
    });

    if (res) {
        console.log(res.data)
        return res.body;
    } else {
        throw new Error("Deu ruim");
    }
}

getRequest()
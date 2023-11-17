import axios from "axios";


const searchImages = async (term)=>{

const response = await axios.get("https://api.unsplash.com/search/photos",{
    headers:{
        Authorization: "Client-ID SwQyYAg5L-SrMnR4pZAuUZ9_QU4fKbOkSSpvyiYoCbY"
    },
    params:{
        query:term
    }
})

return response.data.results

}

export default searchImages;
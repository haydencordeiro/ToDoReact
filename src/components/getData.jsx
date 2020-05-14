import axios from 'axios';

const url='https://covid19.mathdro.id/api'
export const dataCall=async()=>
{
    try {
        const response= await axios.get(url);
        let returnVal={}
        returnVal['confimed']=response.data.confirmed.value;
        returnVal['recovered']=response.data.recovered.value;
        returnVal['deaths']=response.data.deaths.value;
        returnVal['lastUpdate']=response.data.lastUpdate;
        return returnVal;

    } catch (error) {
        
    }

}

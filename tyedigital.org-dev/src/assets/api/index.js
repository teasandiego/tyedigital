// import pointData from '../data/final_data.json';
import pointData from '../data/tye_data.json';

export const fetchPointDataLocal = ()=>{
    try{
        const response = pointData;
        console.log(response);
        return response;

    }catch(error){
        console.log("unable to load local data");
    }
}

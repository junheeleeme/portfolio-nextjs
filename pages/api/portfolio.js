import axios from "axios";

export default async function hanlder(req, res){

    const { data } = await axios({
        method : 'GET',
        url : 'http://localhost:8080/pofol.json'
    });

    res.json({ pofol : data});

}
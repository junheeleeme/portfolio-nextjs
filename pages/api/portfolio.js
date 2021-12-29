import axios from "axios";
export default async function handler(req, res) {
  // try{
  //   const data = await axios.get('http://localhost:3000/portfolio.json');  
  //   res.status(200).json(data);
  // }catch(err){
  // console.log(err)
    res.status(200).json({ "id" : "No data"});
  // }
}

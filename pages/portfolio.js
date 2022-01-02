import axios from "axios"
import SlideRight from "../components/slideRight"
import SlideAnimation from "../components/slideAnimation"
import SubTitle from '../components/subtitle';
import SlideShow from "../components/slideShow";

const portfolio = ({data}) => {

    return(
        <>
            <SlideRight>
                <SubTitle txt='Portfolio'/>
            </SlideRight>

            <SlideAnimation>
                <SlideShow data={data}/>
            </SlideAnimation>
        </>
    )
}

export const getServerSideProps = async() => {

    try{
        const res = await axios.get('http://localhost:3000/pofol/portfolio.json');
        if(res.status === 200){
            const data = res.data;
            console.log(data)
            return { props : {
                data
            } }
        }
    }catch(err){
        console.log(err);
        return { props: {} };
    }

}


export default portfolio
import axios from "axios";

const Index = ({data}) => {
    console.log(data);
    
    return(
        <> 
            <p>1</p>
        </>
    )
}

export const getServerSideProps = async ({params}) => {
    const {id} = params;

    try{
        const res = await axios.get('http://localhost:3000/pofol/portfolio.json');
        
        if(res.status === 200){
            const _data = res.data;
            const data = _data[Number(id)-1];
            if(data !== undefined){
                return { props : { data } }
            }else{
                return{ notFound : true }
            }
        }
    }catch(err){
        console.log(err);
        return { props: {} };
    }
}

export default Index
import { useCallback, useEffect, useState } from "react";
import './Api.css'
import axios from 'axios'

const Api = () => {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)

    const fechtData = useCallback(async ()=>{
        try {
            setLoading(true)
            const {todos} = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setData(todos)
        } catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
    },[])

    useEffect(()=>{
        fechtData()
    },[])

    const renderData = () =>{
        if(loading){
            return(
                <h3>Carregando</h3>
            )
        }
        return(
            <div>
                <h3>Dados</h3>
                <p>-------------------</p>
                {data.map(todos => (
                    <diV>
                        <h4>{todos.title}</h4>
                        <h5>{todos.completed}</h5>
                        <p>--------------------</p>
                    </diV>

                ))}
            </div>
        )
    }

    return (
        <div className="apiContainer">
            <h1>Geral</h1>
            {renderData()}
        </div>
    );
}

export default Api;
import React , {useState , useEffect} from "react";
import DataContext from "./DataContext";


const DataProvider = ({children})=>{
    const [packages ,setPackages] = useState([])
    const [ads , setAds] = useState([])

    useEffect(()=>{
        const cachedData = localStorage.getItem("packages");

        if(cachedData) {
            try {
                const parsedData = JSON.parse(cachedData);
                setPackages(parsedData)
            } catch (error) {
                console.log("Error parsing cached data:" ,error);
                localStorage.removeItem("packages")
            }
        }
        fetch('https://greenz-api.onrender.com/packages/getpackages')
        .then(response => response.json())
        .then(data => {
            setPackages(data);
            localStorage.setItem("data" , JSON.stringify(data))
        })
    },[])




    useEffect(()=>{
        const cachedData = localStorage.getItem("ads");

        if(cachedData) {
            try {
                const parsedData = JSON.parse(cachedData);
                setAds(parsedData)
            } catch (error) {
                console.log("Error parsing cached data:" ,error);
                localStorage.removeItem("packages")
            }
        }
        fetch('https://greenz-api.onrender.com/packages/getAd')
        .then(response => response.json())
        .then(data => {
            setAds(data);
            localStorage.setItem("data" , JSON.stringify(data))
        })
    },[])

    return (
        <DataContext.Provider value={{packages , ads}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
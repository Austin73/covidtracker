import React from 'react'
import { useDispatch } from 'react-redux'
import fetchCovidData from '../apicall/FetchCovidData'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import DisplayData from './DisplayData'

function FetchData() {

    const dispatch = useDispatch()
    const covidData = useSelector(state => state.covidData)

    useEffect(() => {
       dispatch(fetchCovidData())
    }, [])

    return (
        <div>
         {
             //Condition to display data based on the fetched data
             covidData.isLoading ? "Data Loading ": (<DisplayData/>)
         }
        </div>
    )
}

export default FetchData
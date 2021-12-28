import React from 'react'
import { useDispatch } from 'react-redux'
import fetchCovidData from '../apicall/FetchCovidData'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import DataTable from './DataGrid'
import DataLoading from './DataLoading'

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
             covidData.isLoading ? <DataLoading/> : (<DataTable/>)
         }
        </div>
    )
}

export default FetchData

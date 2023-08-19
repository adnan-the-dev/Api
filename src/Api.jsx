import React, { useEffect, useState } from 'react'

function Api() {


    const [data, setData] = useState()

    console.log(data);
    async function callApi() {
        const res = await fetch('https://dummyjson.com/products/1')
            .then(res => res.json())
            .then(json => json)

        setData(res)
    }

    useEffect(() => {
        callApi()
    }, [])


    return (
        <>
            <h1>{data?.title}</h1>
            <h1>{data?.brand}</h1>
            {/* <img src={data.images[4]} alt="" /> */}
            {data?.images?.map((item, ind) => {
                return (
                    <React.Fragment key={ind}>
                        <img src={item} alt="image" />
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default Api
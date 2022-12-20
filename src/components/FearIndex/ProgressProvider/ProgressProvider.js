import { useEffect, useState } from 'react'

const ProgressProvider = ({valueStart, valueEnd, children}) => {
    const [value, setValue] = useState(valueStart);
    useEffect(() => {
        setTimeout(() => setValue(valueEnd), 1000);
    }, [valueEnd]);
    
  return children(value);
}

export default ProgressProvider; 

// import { useState, useEffect } from 'react'

// const ChangingProgressProvider = (({ values, children }: any) => {
//         let [valuesIndex, setValuesIndex] = useState(0);
//         const defaultInterval: number = 1000;
//         useEffect(() => {
//             setInterval(() => {
//                 setValuesIndex((valuesIndex + 1) % values.length)
//             }, defaultInterval)
//         }, [])

//         return (
//             children(values[valuesIndex])
//         )
//     }
// )

// export default ChangingProgressProvider;

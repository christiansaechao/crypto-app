import { useState, useEffect } from 'react'

const ChangingProgressProvider = (({ values, children }) => {
        let [valuesIndex, setValuesIndex] = useState(0);
        const defaultInterval = 1000;
        useEffect(() => {
            setInterval(() => {
                setValuesIndex((valuesIndex + 1) % values.length)
            }, defaultInterval)
        }, [])

        return (
            children(values[valuesIndex])
        )
    }
)

export default ChangingProgressProvider;

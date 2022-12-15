import { useEffect, useState } from 'react'

const ProgressProvider = ({valueStart, valueEnd, children}) => {
    const [value, setValue] = useState(valueStart);
    useEffect(() => {
        setTimeout(() => setValue(valueEnd), 1000);
    }, [valueEnd]);
    
  return children(value);
}

export default ProgressProvider; 
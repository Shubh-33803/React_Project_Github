import { useEffect } from "react"

function useTitle(myTitle){

    useEffect(() => {
        document.title = myTitle;
    },[myTitle]);

  return  useTitle;
}


export default useTitle;
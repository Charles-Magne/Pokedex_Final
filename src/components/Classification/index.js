
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { ClickHeaderClassi } from '../../action/link';

function Classification () {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ClickHeaderClassi("Classi"));
  }, []);



    

  return (
    <div>
      <h1>La Classification des especes</h1>
    </div>
  )
}

export default Classification

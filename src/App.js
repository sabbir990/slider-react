import React, { useEffect, useState } from "react";
import people from "./components/api";
import MiddleInfo from "./components/middleinfo";
function App() {
  const [count, setCount] = useState(1)
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCount(prevCount => {
        let newCount = prevCount + 1
        if(newCount > people.length){
          newCount = 1
        }else if(newCount < 1){
          newCount = people.length
        }

        return newCount;
      })
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  console.log(count)
  const handleNext = () => {
    setCount(count + 1)
    if(count === people.length){
      setCount(1)
    }
  }
  const handlePrev = () => {
    setCount(count - 1)
    if(count === 1){
      setCount(people.length);
    }
  }
  return (
    <div>
      <div className="main-div">
        {people.filter((fil) => fil.id === count).map((fil2) => {
          return(
            <MiddleInfo nextBtn={handleNext} prevBtn={handlePrev} id={fil2.id} image={fil2.image} name={fil2.name} title={fil2.title} quote={fil2.quote}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;

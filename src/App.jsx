
import { useState,useCallback } from "react"

function App() {
  const [length, setLength]=useState(8);
  const [numeric, setNumeric] = useState(false);
  const [specialCharacter, setspecialCharacter]=useState(false);
  const [password,setPassword]=useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numeric) str += "0123456789"
    if(specialCharacter) str += "!@#$%^&*()_=-+[]';./{}"
    for(let i=1;i<=length;i++){
      let char = MATH.floor(MATH.random()*str.length+1)
      pass=str.charAt(char)
    }
    setPassword(pass)
  },[length,numeric, specialCharacter,setPassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-700 bg-gray-200">
        <h1 className="text-center">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input 
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            />
            <button>Copy</button>
          </div>
      </div>
    </>
  )
}

export default App

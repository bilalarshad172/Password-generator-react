
import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numeric, setNumeric] = useState(false);
  const [specialCharacter, setspecialCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numeric) str += "0123456789"
    if (specialCharacter) str += "!@#$%^&*()_=-+[]';./{}"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numeric, specialCharacter, setPassword])
  useEffect(() => {
    passwordGenerator();
  }, [length, numeric, specialCharacter, passwordGenerator])
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 flex-col flex place-content-center  bg-gray-200 h-[300px]">
        <div>
          <h1 className="text-center">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button
              className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
              onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-2">
            <div className="flex items-center gap-x-1">
              <input type="range"
                min={6}
                max={50}
                value={length}
                className="cursor-pointer"
                onChange={(e) => { setLength(e.target.value) }}
              />
              <label htmlFor="">Length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox"
                defaultChecked={numeric}
                id="numberInput"
                onChange={() => {
                  setNumeric((prev) => !prev);
                }} />
              <label htmlFor="">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox"
                defaultChecked={specialCharacter}
                id="charInput"
                onChange={() => {
                  setspecialCharacter((prev) => !prev)
                }} />
              <label htmlFor="">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

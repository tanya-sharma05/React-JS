import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  // 1 //
  const [length, setLength]=useState(8);
  const [password, setPassword]=useState("");
  const [numberAllowed, setNumberAllowed]=useState(false); // include number in initial state or not
  const [charAllowed, setCharAllowed]=useState(false); // include character in initial state or not

  // 5 //
  const passwordRef=useRef(null);
 
  // useCallback for optimization 
  // 2 // 
  const passwordGenerator= useCallback(()=>{
    let pass="";
    // select characters from str 
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*-_+=[]{}~`";
    // process of selecting password letters 
    for(let i=1;i<=length;i++){
      // we'll get index value from random 
      let char=Math.floor(Math.random()*str.length+1); // random generates from [0,1) then str.length makes it [0,str.length) add 1 then it become [1,str.length]
      // extracting character at the index 
      pass+=str.charAt(char);
    }

    setPassword(pass);
  },[length,numberAllowed,charAllowed]); // dependencies 

  // 6 // 
  const copyPasswordToClipboard= useCallback(()=>{
    //2 
    // this will show copying on clipboard of password 
    passwordRef.current?.select(); //optionally select if value length is non zero 
    // for more optimization, also select length of password
    passwordRef.current?.setSelectionRange(0,101);
    //1
    window.navigator.clipboard.writeText(password); // access password and copy it
  },[password]);

  // 4 // 
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator]); // for calling password function

  // 3 // 
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>      
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div> 

        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              // for flipping values from true to false or false to true
              onChange={()=>{setNumberAllowed((prev)=>!prev)}}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={()=>{setCharAllowed((prev)=>!prev)}}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App

import {useState, useEffect} from 'react'
export default function Content() {
    const [count, setcount] = useState(0);
    const Addcount = () => {
        setcount(addcount => addcount + 1);
    }
    const [isBool, setIsBool] = useState(true);

    const ifBool = () => {
        return isBool ? (
            <>
            <p>Bool is true</p>
            </>
        ): (
            <>
            <p>Bool is false</p>
            </>
        );
    };
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setTimer((timer) => timer + 1);
        }, 1000);   
        });
  return (
    <>
    <h1>Content</h1>
    <h2>Counter: {count}</h2>
    <h2>Timer: {timer}</h2>
    <button onClick = {Addcount}>Add count</button>
    <button onClick = {() => setIsBool((isTrue) => !isTrue)}>Bool Button</button>
    {ifBool()}
    </>
   
  );
};
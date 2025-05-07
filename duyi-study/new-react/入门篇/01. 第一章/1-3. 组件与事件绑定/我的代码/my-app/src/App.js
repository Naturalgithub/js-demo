import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  // const cref = useRef(0);
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1500);
  }, []);

  useEffect(() => {
    setInterval(() => {
      console.log(count);
    }, 1500);
  }, []);

  return (
    <div
      onClick={() => {
        console.log(count, 555);
      }}
    >
      Hello world
    </div>
  );
}

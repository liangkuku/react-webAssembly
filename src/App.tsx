import React, { useEffect, useState } from 'react';
import init, { get } from "wasm-lib";

type block = {
  id: string,
  label: string,
}
type Data = {
  blocks: block[]
}

function App() {

  const [list, setList] = useState<Data>();

  useEffect(() => {
    init().then(() => {
      const initData = get() as Data
      setList(initData)
    })
  }, [])

  return (
    <div className="App">
      {
        list?.blocks.map(b =>
          <span key={b.id}>
            {b.label}
          </span>
        )
      }
    </div>
  );
}

export default App;

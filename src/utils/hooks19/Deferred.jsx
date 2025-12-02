// AppDebounce.jsx
import React, { useState, useEffect } from "react";
import { useDeferredValue } from "react";

function HeavySearch(query) {
  let list = [];
  for (let i = 0; i < 5000000; i++) {
    if (i.toString().includes(query)) list.push(i);
  }
  return list;
}

export default function Defferred() {
  const [query, setQuery] = useState("");
  // deferredQuery updates slightly later so UI stays snappier
  const deferredQuery = useDeferredValue(query);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (deferredQuery === "") {
      setList([]);
      return;
    }
    // run heavy search only when deferredQuery settles
    const result = HeavySearch(deferredQuery);
    setList(result);
  }, [deferredQuery]);

  return (
    <>
      <h2>Debounce / useDeferredValue Example</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type and pause..."
      />
      <p>Typing: {query}</p>
      <p>Total results: {list.length}</p>
    </>
  );
}

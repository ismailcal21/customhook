import React, { useEffect, useState }  from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState(null)
  console.log(books)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then(res => {
        setTimeout(() => {
          console.log("res", res.data)
        setBooks(res.data)
        }, 1000);
        
      })
      .catch(err => {
        console.log("err",err)

    })
  },[])

  if (books === null) {
    return (
      <div>
        Loading
      </div>
    )
  }
  return (
    <div className="App">
      {
        books.map((item, index) => (
          <div key={index} style={{display:"grid" ,gridTemplateColumns:"33% 33% 33%"}}>
            {item.name}
            <br />
            {item.id}
          </div>
        ))
      }
    </div>
  );
}

export default App;

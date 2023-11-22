import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {

  const [arrImage, setArrImage] = useState([]);
  const handleSubmit = async (term) => {

    let resultado = await searchImages(term);

    setArrImage(resultado);

  }

  return (
    <div>
      <SearchBar enSubmit={handleSubmit} />
      <ImageList images={arrImage} />
    </div>
  );
}

export default App;

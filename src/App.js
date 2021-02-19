import React from "react";

import Button from "./components/Button";
import Card from "./components/Card";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className='App'>
      <h1>My React App</h1>
      <Button label='button A' color='red' />
      <Button label='button B' color='green' />
      <Button label='button C' color='salmon' />
      <Button label='button D' color='blue' />
      <Card myFavNumber='7'>
        <img src='https://picsum.photos/230/300' />
        <h5>First Title</h5>
        <p>jfklasfkljaslkdfjaklsjflkasjfkjaskdlf</p>
        <a href='google.com'>GOOGLE</a>
        <Button label='button D' color='blue' />
      </Card>

      <Paragraph title='My title' content='lorem ' />
      <Paragraph title='My second title' content='lorem ' />
      <Paragraph title='My thrid title' content='lorem ' />
      <Paragraph title='My title' content='lorem ' />
    </div>
  );
}

export default App;

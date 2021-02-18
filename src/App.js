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
      <Card
        title='my cool title'
        image='https://picsum.photos/200/300'
        details='jkhasjdkfhajshdfjka'
        firstHref='cnn.com'
        firstLink='Goto CNN'
      />
      <Card
        title='my cool title'
        image='https://picsum.photos/200/300'
        details='jkhasjdkfhajshdfjka'
        firstHref='cnn.com'
        firstLink='Goto CNN'
      />
      <Card
        title='my cool title'
        image='https://picsum.photos/200/300'
        details='jkhasjdkfhajshdfjka'
        firstHref='cnn.com'
        firstLink='Goto CNN'
      />
      <Card
        title='my cool title'
        image='https://picsum.photos/200/300'
        details='jkhasjdkfhajshdfjka'
        firstHref='cnn.com'
        firstLink='Goto CNN'
      />
      <Paragraph title='My title' content='lorem ' />
      <Paragraph title='My second title' content='lorem ' />
      <Paragraph title='My thrid title' content='lorem ' />
      <Paragraph title='My title' content='lorem ' />
    </div>
  );
}

export default App;

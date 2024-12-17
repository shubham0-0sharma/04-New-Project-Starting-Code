import { Button } from "./components/Button";
import Input from "./components/Input";
function App() {
  return (
    <main>
      <Button el="button">Click me</Button>
      <Button el="anchor" href="https://google.com">Link</Button>
      <Input label="Name" id="name" type ="text" ></Input>
      <Input label="Age" id="age" type = "date"></Input>
    </main>
  );
}

export default App;

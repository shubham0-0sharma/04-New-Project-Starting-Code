import { useRef } from "react";
import { Button } from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form, { type FormHandler } from "./components/Form";
function App() {
  const input = useRef(null);
  const customForm = useRef<FormHandler>(null);
  const handleSave = (data: unknown) => {
    // const extractedData = data as { name: string; age: string };
    if (
      !data ||
      typeof data !== 'object' ||
      !('name' in data) ||
      !('age' in data)
    ) {
        return;
    }
    console.log(data);
    customForm.current?.clear();
  };
  return (
    <main>
      <Button>Click me</Button>
      <Button href="https://google.com">Link</Button>
      <Form onSave={handleSave} ref={customForm}>
         <Input label="name" id="name" type="text"></Input>
        <Input label="Age" id="age" type="date"></Input>
        <p>
          <Button>Save</Button>
        </p>
      </Form>
      <Input label="Age" id="age" type="date" ref={input}></Input> 
      {/* polymorphic comp */}
      <Container as={"button"} type="button" onClick={() => alert("clicked")}>
        Click me!
      </Container>
    </main>
  );
}

export default App;

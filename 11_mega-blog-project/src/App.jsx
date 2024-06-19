import "./App.css";

function App() {

console.log(import.meta.env.VITE_APP_APPWRITE_URL); // because it is a vite app so it starts with import.meta and the vite prefix

  return (
    <>
      <h1 className=" bg-red-400 text-white">Heyy Pritu </h1>
    </>
  );
}

export default App;

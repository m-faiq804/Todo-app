import "./App.css";
import { Header } from "./Component/Header";
import { AddTodo } from "./Component/AddTodo";
import { Todos } from "./Component/Todos";
import { About } from "./Component/About";
import { Footer } from "./Component/Footer";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [todos, setTodos] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchTodo = async () => {
    try {
      const res = await axios.get(`${apiUrl}/todos/`);
      console.log(res.data);
      setTodos(res.data);
    } catch (error) {
      console.log("Fetch Todo Error", error);
    }
  };

  const addTodo = async (title, desc) => {
    try {
      const res = await axios.post(`${apiUrl}/todo/`, {
        title,
        desc,
      });

      setTodos([...todos, res.data]);
    } catch (error) {
      console.log("Added Todo Error", error);
    }
  };

  const onDelete = async (todo) => {
    try {
      await axios.delete(`${apiUrl}/deleteTodo/${todo.id}`);

      setTodos(
        todos.filter((e) => {
          return e !== todo;
        })
      );
    } catch (error) {
      console.log("Delete Todo Error", error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          minHeight: "80vh",
          py: "56px",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Box sx={{ width: "30%" }}>
                  <Todos todos={todos} onDelete={onDelete} />
                </Box>
                <Box sx={{ width: "30%" }}>
                  <AddTodo addTodo={addTodo} />
                </Box>
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

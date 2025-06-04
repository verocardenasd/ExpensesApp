import { useState } from "react";
import "./App.css";
import { Box, createListCollection, Heading } from "@chakra-ui/react";
import ExpensesList2 from "./components-app/ExpensesList2";
import ExpensesFilter2 from "./components-app/ExpensesFilter2";
import ExpensesForm2 from "./components-app/ExpensesForm2";

export const categories = createListCollection({
  items: [
    { label: "All", value: "All" },
    { label: "Groceries", value: "Groceries" },
    { label: "Entertainment", value: "Entertainment" },
    { label: "Health", value: "Health" },
    { label: "Shopping", value: "Shopping" },
    { label: "Bills", value: "Bills" },
  ],
});

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Movies", category: "Entertainment", price: 20 },
    {
      id: 2,
      description: "Coffee Maker",
      category: "Shopping",
      price: 50,
    },
    { id: 3, description: "Desk Chair", category: "Shopping", price: 150.0 },
    {
      id: 4,
      description: "Supermarket",
      category: "Groceries",
      price: 800,
    },
    {
      id: 5,
      description: "Gym Membership",
      category: "Health",
      price: 200,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const visibleExpenses =
    selectedCategory && selectedCategory !== "All"
      ? expenses.filter((e) => e.category === selectedCategory)
      : expenses;

  return (
    <>
      <Box mb="2">
        <ExpensesForm2
          onSubmit={(data) => {
            setExpenses([data, ...expenses]);
            setSelectedCategory("All");
          }}
        />
      </Box>
      <Box mb="4">
        <ExpensesFilter2
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </Box>
      <Box mb="4">
        <Heading mt="5" mb="2" size="lg">
          Expenses List
        </Heading>
        <ExpensesList2
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </Box>
    </>
  );
}

export default App;

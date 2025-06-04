import { useState } from "react";
import "./App.css";
import { Box, createListCollection, Heading, VStack } from "@chakra-ui/react";
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
      <Box
        maxW="600px"
        mx="auto"
        mt={10}
        p={6}
        bg="gray.50"
        borderRadius="xl"
        boxShadow="lg"
      >
        <VStack borderSpacing={6} align="stretch">
          <Heading textAlign="center" color="purple.800" size="2xl" mb="4">
            ExpensesApp
          </Heading>
          <Heading mb="4" size="lg" color="purple.600">
            Expenses Form
          </Heading>
          <ExpensesForm2
            onSubmit={(data) => {
              setExpenses([data, ...expenses]);
              setSelectedCategory("All");
            }}
          />
          <ExpensesFilter2
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
          <Heading mt="5" mb="2" size="lg" color="purple.600">
            Expenses List
          </Heading>
          <ExpensesList2
            expenses={visibleExpenses}
            onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
          />
        </VStack>
      </Box>
    </>
  );
}

export default App;

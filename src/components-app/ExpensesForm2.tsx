import { categories } from "@/App";
import { Box, Button, Heading, Input, Portal, Select } from "@chakra-ui/react";
import { useState } from "react";
import type { Expense } from "./Expense";

interface Props {
  onSubmit: (data: Expense) => void;
}

const ExpensesForm2 = ({ onSubmit }: Props) => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!description || !category || parseFloat(price) <= 0) {
      alert("Please fill in all fields");
      return;
    }

    const newExpense: Expense = {
      id: Date.now(),
      description,
      category,
      price: parseFloat(price),
    };

    // Call the onSubmit function passed from the parent component
    onSubmit(newExpense);

    // Reset the form fields
    setDescription("");
    setCategory("");
    setPrice("");
  };

  return (
    <>
      <Box mb="2" bg="white" p="4" borderRadius="lg" boxShadow="sm">
        <form action="" onSubmit={handleSubmit}>
          <Box mb="4">
            <label htmlFor="description">Description:</label>
            <Input
              type="text"
              name="description"
              placeholder="Description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>
          <Box mb="4">
            <label htmlFor="category">Category:</label>
            <Select.Root
              collection={categories}
              width="400px"
              value={category ? [category] : []}
              onValueChange={(e) => {
                const selected = e.value[0];
                setCategory(selected);
              }}
            >
              <Select.HiddenSelect />
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="Category" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {categories.items
                      .filter((cat) => cat.value !== "All")
                      .map((categories) => (
                        <Select.Item item={categories} key={categories.value}>
                          {categories.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
          </Box>
          <Box mb="4">
            <label htmlFor="price">Price:</label>
            <Input
              type="number"
              name="price"
              placeholder="Price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Box>
          <Button
            marginBottom="4"
            colorScheme="purple"
            w="full"
            variant="outline"
            borderColor="blue.700"
            type="submit"
            color={"purple.700"}
            _hover={{ bg: "purple.100" }}
            _active={{ bg: "purple.200" }}
            _focus={{ boxShadow: "0 0 0 3px rgba(76, 66, 225, 0.6)" }}
          >
            Add Expense
          </Button>
        </form>
      </Box>
    </>
  );
};

export default ExpensesForm2;

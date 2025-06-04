import { Box, Button, Strong, Table } from "@chakra-ui/react";

interface Expense {
  id: number;
  description: string;
  category: string;
  price: number;
}

interface Props {
  expenses: Expense[];
  onDelete: (i: number) => void;
}

const ExpensesList2 = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) {
    return (
      <Box
        textAlign="center"
        p={4}
        bg="gray.50"
        borderRadius="md"
        color="gray.500"
        fontWeight="semibold"
      >
        No expenses found
      </Box>
    );
  }

  return (
    <>
      <Box
        overflowX="auto"
        bg="white"
        p={4}
        borderRadius="md"
        boxShadow="sm"
        maxW="600px"
        mx="auto"
      >
        <Table.Root size="sm" colorScheme={"purple"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Description</Table.ColumnHeader>
              <Table.ColumnHeader>Category</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end"></Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {expenses.map((expense) => (
              <Table.Row key={expense.id}>
                <Table.Cell>{expense.description}</Table.Cell>
                <Table.Cell>{expense.category}</Table.Cell>
                <Table.Cell textAlign="end">${expense.price}</Table.Cell>
                <Table.Cell textAlign="end">
                  <Button
                    colorPalette="red"
                    variant="outline"
                    borderColor="red.700"
                    colorScheme="red"
                    size="sm"
                    onClick={() => onDelete(expense.id)}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.Cell colSpan={2} textAlign="right">
                <Strong>Total Expenses:</Strong>
              </Table.Cell>
              <Table.Cell textAlign="end">
                $
                {expenses
                  .reduce((acc, expense) => acc + expense.price, 0)
                  .toFixed(2)}
              </Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table.Root>
      </Box>
    </>
  );
};

export default ExpensesList2;

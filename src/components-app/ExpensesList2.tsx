import { Button, Table } from "@chakra-ui/react";

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
    return <div>No expenses found</div>;
  }

  return (
    <>
      <Table.Root size="sm">
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
              <Table.Cell textAlign="end">{expense.price}</Table.Cell>
              <Table.Cell textAlign="end">
                <Button
                  colorPalette="red"
                  variant="outline"
                  borderColor="red.700"
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
            <Table.Cell colSpan={3} textAlign="center">
              Total:
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
    </>
  );
};

export default ExpensesList2;

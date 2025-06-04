import { categories } from "@/App";
import { Portal, Select } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpensesFilter2 = ({ onSelectCategory }: Props) => {
  const [category, setCategory] = useState<string[]>([]);

  return (
    <>
      <Select.Root
        collection={categories}
        width="400px"
        value={category}
        onValueChange={(e) => {
          const selected = e.value;
          setCategory(selected);
          onSelectCategory(selected[0]);
        }}
      >
        <Select.HiddenSelect />
        <Select.Label>Filter Category</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select category" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {categories.items.map((categories) => (
                <Select.Item item={categories} key={categories.value}>
                  {categories.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </>
  );
};

export default ExpensesFilter2;

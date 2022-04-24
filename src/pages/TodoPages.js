import React, { ReactNode } from "react";
import { Box, Typography, Card } from "@material-ui/core";
import useListOfTodos from "hooks/Implementation/useListOfTodos";
import { IUseListOfTodos } from "hooks/Interfaces/IUseListOfTodos";
import CheckBox from "components/Checkbox";

const TodoPages = (): ReactNode => {
  const { data }: IUseListOfTodos = useListOfTodos();

  return (
    <Box>
      <h1>Here's a List Of Todo Items</h1>
      {data.map(({ id, title, completed }) => (
        <Card key={id}>
          <Box className="row">
            <div>
              <Typography>{title}</Typography>
            </div>
            <div>
              <CheckBox isChecked={completed} />
            </div>
          </Box>
        </Card>
      ))}
    </Box>
  );
};
export default TodoPages;

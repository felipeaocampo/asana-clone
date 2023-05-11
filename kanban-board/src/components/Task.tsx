import { Box, IconButton, Textarea } from "@chakra-ui/react";
import { TaskModel } from "../utils/models";
import { DeleteIcon } from "@chakra-ui/icons";

type TaskProps = {
  index: number;
  task: TaskModel;
  onDelete: (id: TaskModel["id"]) => void;
  onUpdate: (
    id: TaskModel["id"],
    updatedTask: Omit<Partial<TaskModel>, "id">
  ) => void;
};

const Task = ({
  index,
  task,
  onDelete: handleDelete,
  onUpdate: handleUpdate,
}: TaskProps) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    handleUpdate(task.id, { ...task, title: newTitle });
  };

  const handleDeleteClick = () => {
    handleDelete(task.id);
  };

  return (
    <Box
      as="div"
      role="group"
      position="relative"
      rounded="lg"
      w={200}
      pl={3}
      pr={7}
      pt={3}
      pb={1}
      boxShadow="xl"
      cursor="grab"
      bgColor={task.color}
    >
      <IconButton
        position="absolute"
        top={0}
        right={0}
        zIndex={100}
        aria-label="delete-task"
        size="md"
        colorScheme="solid"
        color="gray.700"
        icon={<DeleteIcon />}
        opacity={0}
        _groupHover={{
          opacity: 1,
        }}
        onClick={handleDeleteClick}
      />
      <Textarea
        value={task.title}
        fontWeight="semibold"
        cursor="inherit"
        border="none"
        p={0}
        resize="none"
        minH={70}
        maxH={200}
        focusBorderColor="transparent"
        color="gray.700"
        onChange={handleTitleChange}
      />
    </Box>
  );
};

export default Task;

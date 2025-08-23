export type TaskElement = {
  id: string;
  content: string;
};

export type GoalElement = {
  id: string;
  content: string;
  type: "money" | "steps";
  moneyQty: number | null;
  steps: number | null;
};

export type TaskProp = {
  setTasks: React.Dispatch<React.SetStateAction<TaskElement[]>>;
  tasks: TaskElement[];
};

export type GoalProp = {
  setGoals: React.Dispatch<React.SetStateAction<GoalElement[]>>;
  goals: GoalElement[];
};

export type AddTaskPopupProp = {
  setTaskInput: React.Dispatch<React.SetStateAction<TaskElement>>;
  taskInput: TaskElement;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  popup: boolean;
  handleClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export type AddGoalPopupProp = {
  setGoalInput: React.Dispatch<React.SetStateAction<GoalElement>>;
  goalInput: GoalElement;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  popup: boolean;
  handleClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

/*
export type PopupsProp = {
  setElementInput: React.Dispatch<
    React.SetStateAction<{
      id: string;
      content: string;
    }>
  >;
  elementInput: {
    id: string;
    content: string;
  };
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  popup: boolean;
  handleClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};*/

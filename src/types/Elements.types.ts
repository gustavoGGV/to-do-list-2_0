export type TaskElement = {
  id: string;
  content: string;
};

export type GoalElement = {
  id: string;
  content: string;
};

// This type is needed so ElementList and AddButton can receive props properly.
export type Prop = {
  listType: string;
  setElements: React.Dispatch<React.SetStateAction<TaskElement[] | GoalElement[]>>;
  elements: TaskElement[] | GoalElement[]
}
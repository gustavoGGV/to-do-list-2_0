import AddButton from "./AddButton";
import "bootstrap-icons/font/bootstrap-icons.css";
import { deleteElement } from "../utils/elements.utils";
import type { Prop } from "../types/Elements.types";

const ElementList = ({ listType, setElements, elements }: Prop) => {
  return (
    <div className="component p-3 rounded-4">
      <div className="d-flex">
        <h2 className="ms-2 w-100">Goal list:</h2>
        <AddButton listType={listType} setElements={setElements} elements={elements} />
      </div>
      <br />

      {elements.map(element => (
        <div className={element.id + " d-flex"} key={element.id}>
          <input className="ms-2" type="checkbox" onClick={deleteElement(element.id, setElements)} />
          <h3 className="ms-2">{element.content}</h3>
        </div>
      ))}
    </div>
  );
};

export default ElementList;

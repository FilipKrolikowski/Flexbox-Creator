import { HiOutlineDuplicate } from "react-icons/hi";
import { IoAddOutline } from "react-icons/io5";
import { LuRedo, LuTrash2, LuUndo } from "react-icons/lu";
import { VscDebugRestart } from "react-icons/vsc";
import { useFlexbox } from "../../../../hooks/useFlexbox";
import Toolbar, { ToolbarDivider } from "../../../Playground/Toolbar/Toolbar";
import ToolbarBtn from "../../../Playground/Toolbar/ToolbarBtn/ToolbarBtn";

export default function FlexboxToolbar() {
  const { addItem, duplicateItem, removeItem, resetContainer, selectedItems, undo, redo, canUndo, canRedo } =
    useFlexbox();

  const emptySelected = selectedItems.length === 0;

  return (
    <Toolbar>
      <ToolbarBtn value="Add" onClick={addItem}>
        <IoAddOutline />
      </ToolbarBtn>

      <ToolbarDivider />

      <ToolbarBtn value="Duplicate" onClick={duplicateItem} disabled={emptySelected} alert={true}>
        <HiOutlineDuplicate />
      </ToolbarBtn>

      <ToolbarBtn value="Delete" onClick={removeItem} disabled={emptySelected} alert={true} type="delete">
        <LuTrash2 />
      </ToolbarBtn>

      <ToolbarBtn value="Reset" onClick={resetContainer}>
        <VscDebugRestart />
      </ToolbarBtn>

      <ToolbarDivider />

      <ToolbarBtn value="Undo" onClick={undo} disabled={!canUndo}>
        <LuUndo />
      </ToolbarBtn>

      <ToolbarBtn value="Redo" onClick={redo} disabled={!canRedo}>
        <LuRedo />
      </ToolbarBtn>
    </Toolbar>
  );
}

import { IoAddOutline } from "react-icons/io5";
import { LuRedo, LuTrash2, LuUndo } from "react-icons/lu";
import { VscDebugRestart } from "react-icons/vsc";
import Toolbar, { ToolbarDivider } from "../../../Playground/Toolbar/Toolbar";
import ToolbarBtn from "../../../Playground/Toolbar/ToolbarBtn/ToolbarBtn";
import { useGrid } from "../../../../hooks/useGrid";
import { MdGrid3X3 } from "react-icons/md";

export default function FlexboxToolbar() {
  const {
    addItem,
    removeItem,
    resetContainer,
    selectedItems,
    toggleGridLines,
    gridLines,
    undo,
    redo,
    canUndo,
    canRedo,
  } = useGrid();

  const emptySelected = selectedItems.length === 0;

  return (
    <Toolbar>
      <ToolbarBtn value="Add" onClick={addItem}>
        <IoAddOutline />
      </ToolbarBtn>

      <ToolbarDivider />

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

      <ToolbarDivider />

      <ToolbarBtn value="Grid Lines" onClick={toggleGridLines} inActive={!gridLines}>
        <MdGrid3X3 />
      </ToolbarBtn>
    </Toolbar>
  );
}

import { useFlexbox } from "../../../../hooks/useFlexbox";
import Snackbar from "../../../Playground/Snackbar/Snackbar";

export default function FlexboxSnackbar() {
  const { selectedItems, toggleAllSelected, clearSelected } = useFlexbox();

  return <Snackbar selectedItems={selectedItems} toggleAllSelected={toggleAllSelected} clearSelected={clearSelected} />;
}

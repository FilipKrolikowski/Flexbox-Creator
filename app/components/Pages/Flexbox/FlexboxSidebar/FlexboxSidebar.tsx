import { containerConfig } from "../../../../data/flexbox/containerConfig";
import { itemsConfig } from "../../../../data/flexbox/itemsConfig";
import { layouts } from "../../../../data/flexbox/layouts";
import { useFlexbox } from "../../../../hooks/useFlexbox";
import { Flexbox } from "../../../../../lib/types/flexbox";
import { State } from "../../../../types";
import { FaFloppyDisk } from "react-icons/fa6";
import { LuSettings2 } from "react-icons/lu";
import { MdOutlineEdit } from "react-icons/md";
import { TbLayoutGrid } from "react-icons/tb";
import Edit from "../../../Sidebar/Edit/Edit";
import Layout from "../../../Sidebar/Layout/Layout";
import Save from "../../../Sidebar/Save/Save";
// import Settings from "../../../SideBar/Settings/Settings";
import SideBar from "../../../Sidebar/SideBar";

export default function FlexboxSidebar() {
  const { items, container, selectedItems, flexbox, setFlexbox, editContainer, editItemStyle, clearSelected } =
    useFlexbox();

  const lastSelectedItem = selectedItems[selectedItems.length - 1];

  const selectedItemStyles = items.find((item) => item.id === lastSelectedItem)?.styles;

  const tabs = [
    {
      name: "Edit",
      component: (
        <Edit
          selectedItems={selectedItems}
          editContainer={editContainer}
          container={container}
          containerConfig={containerConfig}
          itemsConfig={itemsConfig}
          selectedItemStyles={selectedItemStyles}
          editItemStyle={editItemStyle}
        />
      ),
      icon: <MdOutlineEdit />,
    },
    {
      name: "Save",
      component: (
        <Save storageKey="flexbox" state={flexbox} setState={(state: State) => setFlexbox(state as Flexbox)} />
      ),
      icon: <FaFloppyDisk />,
    },
    {
      name: "Layout",
      component: (
        <Layout
          layouts={layouts}
          setState={(state: State) => setFlexbox(state as Flexbox)}
          clearSelected={clearSelected}
        />
      ),
      icon: <TbLayoutGrid />,
    },
    //  { name: "Settings", component: <Settings />, icon: <LuSettings2 /> },
  ];

  return <SideBar tabs={tabs} state={flexbox} />;
}

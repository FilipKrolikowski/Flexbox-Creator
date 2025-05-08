import { Flexbox, FlexboxContainer, FlexboxItem, FlexboxItemStyle } from "../lib/types/flexbox";

import { Grid, GridContainer, GridItem, GridItemStyle } from "../lib/types/grid";

export type State = Flexbox | Grid;
export type Item = FlexboxItem | GridItem;
export type ItemStyle = FlexboxItemStyle | GridItemStyle;
export type Container = FlexboxContainer | GridContainer;

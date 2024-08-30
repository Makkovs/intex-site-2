import Catalog from "./compontents/Catalog/Catalog";
import CommodityPage from "./compontents/CommodityPage/CommodityPage";

import { COMMODITY_ROUTE, HOME_ROUTE, } from "./utils/paths";
import { IRoute } from "./types/route";

export const router: IRoute[] = [
    {
        path: HOME_ROUTE,
        Component: Catalog
    },
    {
        path: COMMODITY_ROUTE + "/:id",
        Component: CommodityPage
    },
];
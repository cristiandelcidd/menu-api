import { Router } from "express";
import {
  addMenu,
  deleteMenu,
  getMenus,
  retrieveMenu,
  updateMenu,
} from "../controllers/menus";

const menuRoutes: Router = Router();

menuRoutes.get("/menu", getMenus);
menuRoutes.get("/menu/:id", retrieveMenu);
menuRoutes.post("/menu", addMenu);
menuRoutes.put("/menu/:id", updateMenu);
menuRoutes.delete("/menu/:id", deleteMenu);

export default menuRoutes;

import { Request, Response } from "express";

import { IMenu } from "../../types/menu";
import Menu from "../../models/menu";

const getMenus = async (_: Request, res: Response): Promise<void> => {
  try {
    const menus: IMenu[] = await Menu.find();
    res.status(200).json({ menus });
  } catch (error) {
    throw error;
  }
};

const addMenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, price } = req.body as Pick<
      IMenu,
      "name" | "description" | "price"
    >;
    const menu: IMenu = new Menu({
      name,
      description,
      price,
    });

    const newMenu = await menu.save();

    res.status(201).json(newMenu);
  } catch (error) {
    throw error;
  }
};

const retrieveMenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;

    const menu: IMenu | null = await Menu.findById({ _id: id });

    res.status(menu ? 200 : 400).json({ menu });
  } catch (error) {
    throw error;
  }
};

const updateMenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    let updateMenu: IMenu | null = await Menu.findByIdAndUpdate(
      { _id: id },
      body
    );

    if (updateMenu) {
      delete updateMenu._id;
      updateMenu = {
        id,
        ...body,
      };

      console.log(updateMenu);
    }

    res.status(updateMenu ? 200 : 400).json({ menu: updateMenu });
  } catch (error) {
    throw error;
  }
};

const deleteMenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;

    const deletedMenu: IMenu | null = await Menu.findByIdAndRemove({ _id: id });

    res.status(204).json({ menu: deletedMenu });
  } catch (error) {
    throw error;
  }
};

export { getMenus, addMenu, retrieveMenu, updateMenu, deleteMenu };

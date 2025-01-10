import { atom } from "nanostores";
//import { persistentAtom } from "@nanostores/persistent";

export const isNavOpen = atom(false);

export const cmds = atom([]);

export const addCmds = (newValues) => {
    var oldValues = cmds.get();
    cmds.set([...oldValues, newValues]);
};

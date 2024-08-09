import { atom } from "nanostores";
//import { persistentAtom } from "@nanostores/persistent";

export const isNavOpen = atom(false);

export const cmds = atom(["test"]);

export const addCmds = (newValues) => {
    var oldValues = cmds.get();
    console.log(oldValues, newValues);
    cmds.set([...oldValues, newValues]);
};

import React from "react";

const choice = (items) => {
    let rdmIdx = Math.floor(Math.random()(items.length));
    return items[rdmIdx];
}

const remove = (items, item) => {
    const foundItem = items.find(item => item === item);
    const removeItem = foundItem ? items.splice(items.indexOf(item)) : undefined;
    return foundItem;
}


export {choice, remove};

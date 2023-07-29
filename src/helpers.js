const choice = (items) => {
    let rdmIdx = Math.floor(Math.random()*(items.length));
    return items[rdmIdx];
}

const remove = (items, item) => {
    const foundItem = items.find(item => item === item);
    const removeItem = (foundItem) ? items.splice(items.indexOf(item)) : undefined;
    return foundItem;
}

const length = (items) =>{
    return items.length;
}


export {choice, remove, length};

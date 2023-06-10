const bag1 = {
    toys: ["car", "cat", "dog", "lego", "puzzle"]
};

const bag2 = {
    toys: ["dog", "lego", "puzzle"]
};

const bag3 = {
    toys: ["phone", "box"],
    bags: [bag1, bag2]
};

const bag4 = {
    toys: ["car"],
    bags: [bag3]
}

const bag5 = {
    toys: ["golf"],
    bags: [bag4]
}

function countBagToys(bag) {
    let toysCount = bag.toys.length;

    if (bag.bags) {
        bag.bags.forEach(element => {
            toysCount = element.toys.length + toysCount;
        });
    }

    return toysCount;
};

function countBagToysRecursive(bag) {
    let toysCount = bag.toys.length;

    if (!bag.bags) {
        return bag.toys.length;
    };

    bag.bags.forEach(element => {
        toysCount = countBagToysRecursive(element) + toysCount;
    });

    return toysCount;
};

console.log(countBagToys(bag5));
console.log(countBagToysRecursive(bag5));

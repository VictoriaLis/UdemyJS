// Task 1

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {

        },
        exp: '1 month'
    },

    showAgeAndLangs: function (plan) {
        const userLangs = plan.skills.languages.join(" ").toUpperCase();
        return `Мне ${plan.age} и я владею языками: ${userLangs}`;
    }
};

function showExperience(plan) {
    const {
        skills: {
            exp
        }
    } = plan;
    return exp;
};

function showProgrammingLangs(plan) {
    const {
        programmingLangs
    } = plan.skills;

    const arrLangs = [];
    for (const key in programmingLangs) {
        arrLangs.push(`Язык ${key} изучен на ${programmingLangs[key]}\n`);
    }

    return arrLangs.join('');
};


// Task 2

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(family) {
    if (!family.length) {
        return "Семья пуста"
    }
    return `Семья состоит из: ${family.join(" ")}`;
}

// Task 3

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(favoriteCities) {
    favoriteCities.forEach((city) => console.log(city.toLowerCase()));
}

// Task 4

function reverse(str) {
    return str.split("").reverse().join("");
}


// Task 5

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// let allCurr = baseCurrencies.concat(additionalCurrencies);

function availableCurr(allCurr, missingCurr) {
    if (allCurr.length === 0) {
        return 'Нет доступных валют';
    }
    const availableCurr = allCurr.filter((curr) => curr !== missingCurr);
    return `Доступные валюты:\n${availableCurr.join('\n')}`

}
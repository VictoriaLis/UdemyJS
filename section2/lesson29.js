//TASK 1

// S = 6 a^2 - площадь поверхности куба
//V=a^3 - объем куба

function cubeSurfaceAreaCalc(cubeEdge) {

    if (!Number.isInteger(cubeEdge) || cubeEdge < 0) {
        return ('При вычислении произошла ошибка');
    }

    const cubeSurfaceArea = 6 * Math.pow(cubeEdge, 2);
    const cubeVolume = Math.pow(cubeEdge, 3);

    return (`Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeSurfaceArea}`);
};


//TASK 2

function getCoupeNumber(seatNum) {
    if (!Number.isInteger(seatNum) || seatNum < 0) {
        return ('Ошибка. Проверьте правильность введенного номера места')
    }
    if (seatNum == 0 || seatNum >= 36) {
        return ('Таких мест в вагоне не существует')
    }

    return Math.ceil(seatNum / 4);

};

//TASK 3


function getTimeFromMinutes(minutesNumber) {
    if (!Number.isInteger(minutesNumber) || minutesNumber < 0) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesNumber / 60);
    const minutes = minutesNumber - (hours * 60);

    const hourLastNum = hours % 10;
    const minLastNum = minutes % 10;

    let hourEnding = "часов";


    if (hours >= 11 && hours <= 14) {
        hourEnding = "часов";
    } else {
        switch (hourLastNum) {
            case 1:
                hourEnding = "час";
                break;
            case 2:
            case 3:
            case 4:
                hourEnding = "часа";
                break;
            default:
                hourEnding = "часов";
        }
    }

    let minutesEnding = "минут";

    if (hours >= 11 && hours <= 14) {
        minutesEnding = "минут";
    } else {
        switch (minLastNum) {
            case 1:
                minutesEnding = "минута";
                break;
            case 2:
            case 3:
            case 4:
                minutesEnding = "минуты";
                break;
            default:
                minutesEnding = "минут";
        }
    }


    return `Это ${hours} ${hourEnding} и ${minutes} ${minutesEnding}`;
};


//TASK 4

function findMaxNumber(a, b, c, d) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') {
        return 0;
    }
    return Math.max(a, b, c, d);
}

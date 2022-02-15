let data = ['Delta', 'Sierra', 'Zulu', 'Echo', 'Victor', 'India', 'Quebec', 'Tango', 'Juliett', 'Bravo', 'Foxtrot', 'X-ray', 'Papa', 'Kilo', 'Mike', 'Golf', 'November', 'Whiskey', 'Charlie', 'Yankee', 'Uniform', 'Alfa', 'Lima', 'Romeo', 'Hotel', 'Oscar'];


function buildList(dataArray) {
    let list = '';
    for (let i = 0; i < dataArray.length; i++) {
        list += `<li>${ dataArray[i] }</li>`;
    }

    return list;
}


function sortList(dataList) {
    // Sorteer de array en return hem
    return buildList(dataList);
}

function removeLongerThanFive(dataList) {
    // verwijder de woorden langer dan 5 letter uit de array en return hem
    return buildList(dataList)
}

function getWhereIncludesA(dataList) {
    // Filter alle woorden die een a bevatten uit de array en return hem
    return buildList(dataList)
}


document.getElementById('alphabetisch').innerHTML = sortList(data);
document.getElementById('korter-dan-5').innerHTML = removeLongerThanFive(data);
document.getElementById('alleen-met-a').innerHTML = getWhereIncludesA(data);
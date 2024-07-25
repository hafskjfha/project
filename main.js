function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function censorCheck(sentence, censorList) {
    const patterns = censorList.map(word => {
        const escapedWord = escapeRegExp(word);
        return escapedWord.split('').join('[^\\w]*');
    });

    const regex = new RegExp(patterns.join('|'), 'gi');

    if (regex.test(sentence)) {
        console.log("검열됨");
    } else {
        console.log("통과");
    }
}

// 예제 검열 리스트와 문장
const censorList = [];
const sentences = [

];

// 각 문장을 검열 검사
sentences.forEach(sentence => {
    censorCheck(sentence, censorList);
});

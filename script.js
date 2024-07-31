document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    const wordsDB = {
        "example": [["명사", "동사"], ["사례", "예시", "dhjjdjkhdkjhjkdhkj"]],
        "hover": [["동사"], ["마우스를 위에 올리다"]],
        "box": [["명사"], ["상자", "박스"]],
        "m": [["명사"], ["상자", "박스"]],
        "bsox": [["명사"], ["상자", "박스"]],
        "bosdx": [["명사"], ["상자", "박스"]],
        "boxf": [["명사"], ["상자", "박스"]],
        "boxy": [["명사"], ["상자", "박스"]],
        "boxd": [["명사"], ["상자", "박스"]],
        // 추가 단어를 여기에 입력
    };

    Object.keys(wordsDB).forEach(word => {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.fontSize = '10px'; // 단어의 글자 크기를 10px로 설정

        const wordSpan = document.createElement('span');
        wordSpan.textContent = word.length > 11 ? word.slice(0, 11) + '...' : word;

        const posSpan = document.createElement('span');
        posSpan.classList.add('pos');
        posSpan.style.fontSize = '5px'; // 품사의 글자 크기를 8px로 설정
        posSpan.textContent = wordsDB[word][0].map(pos => (pos === "명사" ? "명" : "동")).join('/');

        const meaningSpan = document.createElement('span');
        meaningSpan.classList.add('meaning');
        meaningSpan.style.fontSize = '8px'; // 뜻의 글자 크기를 8px로 설정
        const Meaning = wordsDB[word][1];
        const formattedString = Meaning.map((item, index) => `${index + 1}. ${item}`).join('\n');
        meaningSpan.textContent = formattedString.length > 19 ? formattedString.slice(0, 19) + '...' : formattedString;

        const wordContainer = document.createElement('div');
        wordContainer.style.display = 'flex';
        wordContainer.style.alignItems = 'center';
        wordContainer.appendChild(wordSpan);
        wordContainer.appendChild(posSpan);

        box.appendChild(wordContainer);
        box.appendChild(meaningSpan);

        const additionalBox = document.createElement('div');
        additionalBox.classList.add('additional-box');

        const detailedWord = document.createElement('div');
        detailedWord.textContent = `단어: ${word}`;

        const detailedPos = document.createElement('div');
        detailedPos.textContent = `품사: ${wordsDB[word][0].join(', ')}`;

        const detailedMeaning = document.createElement('div');
        detailedMeaning.textContent = `뜻: ${wordsDB[word][1].join(', ')}`;

        additionalBox.appendChild(detailedWord);
        additionalBox.appendChild(detailedPos);
        additionalBox.appendChild(detailedMeaning);

        box.appendChild(additionalBox);
        container.appendChild(box);

        box.addEventListener('mousemove', (event) => {
            const containerRect = container.getBoundingClientRect();
            const additionalBoxRect = additionalBox.getBoundingClientRect();

            let mouseX = event.clientX - containerRect.left;
            let mouseY = event.clientY - containerRect.top;

            let left = mouseX - additionalBoxRect.width / 2;
            let top = mouseY - additionalBoxRect.height + 30;

            // Prevent additionalBox from going outside of container boundaries
            if (left < 0) {
                left = 0;
            } else if (left + additionalBoxRect.width > containerRect.width) {
                left = containerRect.width - additionalBoxRect.width;
            }

            if (top < 0) {
                top = 0;
            } else if (top + additionalBoxRect.height > containerRect.height) {
                top = containerRect.height - additionalBoxRect.height;
            }

            additionalBox.style.left = `${left}px`;
            additionalBox.style.top = `${top}px`;
            additionalBox.style.display = 'block';
        });

        box.addEventListener('mouseleave', () => {
            additionalBox.style.display = 'none';
        });
    });
});

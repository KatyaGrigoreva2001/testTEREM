let userData = []

const $addForm = document.getElementById('addForm'),
    $selectFive = document.getElementById('selectFive'),
    $text = document.getElementById('inputText'),
    $message = document.getElementById('inputMessage'),
    $btn = document.getElementById('btn'),
    $tableBody = document.getElementById('tableBody');

let selectObj = {};

for (let i = 1; i <= 5; i++) {
    selectObj[i] = document.createElement('select');
    selectObj[i].classList.add('form-select', 'form-select-lg', 'mb-3', 'mt-3');


    const defaultOption = document.createElement('option');
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.textContent = 'Выпадающий список';
    selectObj[i].appendChild(defaultOption);

    for (let j = 1; j <= 5; j++) {
        const option = document.createElement('option');
        option.value = j;
        option.textContent = j;
        selectObj[i].appendChild(option);
    }

    $selectFive.append(selectObj[i]);
}


function createUserTr(oneUser) {
    const $userTr = document.createElement('tr'),
        $userListJSON = document.createElement('td');

    console.log(oneUser)

    $userListJSON.textContent = JSON.stringify(oneUser, null, 2);;
    $userTr.style.backgroundColor = '#fff3cd';
    $userListJSON.style.border = '1px solid #ffc107';
    $userListJSON.style.width = '100%'


    $userTr.append($userListJSON)

    return $userTr
}

//рендер
function render(arrData) {
    $tableBody.innerHTML = '';
    let copyListData = [...arrData]

    //отрисовка
    for (const oneUser of copyListData) {
        const $newTr = createUserTr(oneUser)
        $tableBody.append($newTr)
    }
}

render(userData);

//добавление 
$addForm.addEventListener('submit', function (event) {
    event.preventDefault()

    let selectList = []
    for (let i = 1; i <= 5; i++) {
        if (selectObj[i].value != 'Выпадающий список') {
            selectList.push({ value: selectObj[i].value })
        }
    }

    let userDataObj = {
        selects: selectList,
        text: $text.value.trim(),
        message: $message.value.trim(),
    }

    const queryString = new URLSearchParams({
        selects: JSON.stringify(userDataObj.selects),
        text: userDataObj.text,
        message: userDataObj.message
    }).toString();

    const url = `structure.php?${queryString}`;

    fetch(url)
        .then(response => {
            response.json()
            let status = response.status;
            alert(`Статус ответа: ${status}`);
        })
        .then(data => {
            console.log(data);
            /*alert(JSON.stringify(data));*/
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });


    userData.push(userDataObj)
    render(userData)


    for (let i = 1; i <= 5; i++) {
        selectObj[i].value = 'Выпадающий список'
    }
    $text.value = ''
    $message.value = ''
})




document.addEventListener("DOMContentLoaded", function () {

})
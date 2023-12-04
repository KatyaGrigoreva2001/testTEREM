<?php

// Проверяем, что параметры переданы в запросе
if(isset($_GET['selects']) && isset($_GET['text']) && isset($_GET['message'])) {
    
    // Получаем значения параметров
    $selects = json_decode($_GET['selects'], true); // Декодируем данные из JSON
    $text = $_GET['text'];
    $message = $_GET['message'];

    // Выполняем необходимую обработку данных
    // Например, можно сохранить данные в базу данных, отправить по электронной почте и т.д.

    // Возвращаем JSON-ответ
    $result = ['success' => true, 'message' => 'Ok', 'selects' => $selects, 'text' => $text, 'message' => $message];
    echo json_encode($result);
} else {
    // Если параметры не переданы, возвращаем ошибку
    $result = ['success' => false, 'message' => 'No value'];
    echo json_encode($result);
}

var_dump($result);

?>

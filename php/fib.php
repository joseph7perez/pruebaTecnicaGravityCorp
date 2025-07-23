<?php

function fibonacci($n) {
    if ($n <= 1) return $n;

    $a = 0;
    $b = 1;

    for ($i = 2; $i <= $n; $i++) {
        $temp = $a + $b;
        $a = $b;
        $b = $temp;
    }

    return $b;
}

function fibList(array $numbers) : array {
    return array_map('fibonacci', $numbers);
}

// Ejemplo
// $input = [0, 1, 2 , 3, 4, 5, 6, 7,8,9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29, 30];
// $result = fibList($input);
// print_r($result);


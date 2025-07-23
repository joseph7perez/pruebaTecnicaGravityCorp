<?php
use PHPUnit\Framework\TestCase;
require_once __DIR__ . '/../fib.php';

class FibTest extends TestCase
{
    public function testFibList()
    {
        $input = [0, 1, 5, 10, 30];
        $expected = [0, 1, 5, 55, 832040];
        $this->assertEquals($expected, fibList($input));
    }
}

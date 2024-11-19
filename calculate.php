<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $formula = $_POST['formula'];

    switch ($formula) {
        case "kinetic_energy":
            $m = $_POST['m'];
            $v = $_POST['v'];
            $result = 0.5 * $m * pow($v, 2);
            echo "Kinetic Energy: $result J";
            break;

        case "force":
            $m = $_POST['m'];
            $a = $_POST['a'];
            $result = $m * $a;
            echo "Force: $result N";
            break;

        case "momentum":
            $m = $_POST['m'];
            $v = $_POST['v'];
            $result = $m * $v;
            echo "Momentum: $result kg·m/s";
            break;

        case "work":
            $f = $_POST['f'];
            $d = $_POST['d'];
            $theta = deg2rad($_POST['theta']); // Convert degrees to radians
            $result = $f * $d * cos($theta);
            echo "Work: $result J";
            break;

        case "wave_speed":
            $f = $_POST['f'];
            $lambda = $_POST['lambda'];
            $result = $f * $lambda;
            echo "Wave Speed: $result m/s";
            break;

        case "ohms_law":
            $i = $_POST['i'];
            $r = $_POST['r'];
            $result = $i * $r;
            echo "Voltage: $result V";
            break;

        default:
            echo "Invalid formula selected.";
    }
}
?>

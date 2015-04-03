<?php
/**
 * Step 1: Require the Slim Framework
 *
 * If you are not using Composer, you need to require the
 * Slim Framework and register its PSR-0 autoloader.
 *
 * If you are using Composer, you can skip this step.
 */
require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

/**
 * Step 2: Instantiate a Slim application
 *
 * This example instantiates a Slim application using
 * its default settings. However, you will usually configure
 * your Slim application now by passing an associative array
 * of setting names and values into the application constructor.
 */
$app = new \Slim\Slim();

/**
 * Step 3: Define the Slim application routes
 *
 * Here we define several Slim application routes that respond
 * to appropriate HTTP request methods. In this example, the second
 * argument for `Slim::get`, `Slim::post`, `Slim::put`, `Slim::patch`, and `Slim::delete`
 * is an anonymous function.
 */

// GET route
$app->get('/:var','selectData');
function selectData($var)
{
    // $url = "SELECT age,bisphenol,bloodLead,cotinine,diethylthiophosphate,hexylphthalate,pcb153 FROM medianAge";
    switch ($var){

        case 1:
            $qur = "SELECT country as name, bloodLead as size FROM medianCountry";
            getData($qur,"country","bloodLead");
            break;
        case 2:
            $qur = "SELECT country as name, bisphenol as size FROM medianCountry";
            getData($qur,"country","bisphenol");
            break;
        case 3:
            $qur = "SELECT country as name, cotinine as size FROM medianCountry";
            getData($qur,"country","cotinine");
            break;
        case 4:
            $qur = "SELECT country as name, diethylthiophosphate as size FROM medianCountry";
            getData($qur,"country","diethylthiophosphate");
            break;
        case 5:
            $qur = "SELECT country as name, mercury as size FROM medianCountry";
            getData($qur,"country","mercury");
            break;
        case 6:
            $qur = "SELECT country as name, hexylphthalate as size FROM medianCountry";
            getData($qur,"country","hexylphthalate");
            break;
        case 7:
            $qur = "SELECT country as name, pcb153 as size FROM medianCountry";
            getData($qur,"country","pcb153");
            break;
        case 8:
            $qur = "SELECT age as name, bloodLead as size FROM medianAge";
            getData($qur,"age","bloodLead");
            break;
        case 9:
            $qur = "SELECT age as name, bisphenol as size FROM medianAge";
            getData($qur,"age","bisphenol");
            break;
        case 10:
            $qur = "SELECT age as name, cotinine as size FROM medianAge";
            getData($qur,"age","cotinine");
            break;
        case 11:
            $qur = "SELECT age as name, diethylthiophosphate as size FROM medianAge";
            getData($qur,"age","diethylthiophosphate");
            break;
        case 12:
            $qur = "SELECT age as name, mercury as size FROM medianAge";
            getData($qur,"age","mercury");
            break;
        case 13:
            $qur = "SELECT age as name, hexylphthalate as size FROM medianAge";
            getData($qur,"age","hexylphthalate");
            break;
        case 14:
            $qur = "SELECT age as name, pcb153 as size FROM medianAge";
            getData($qur,"age","pcb153");
            break;
        case 15:
            $qur = "SELECT gender as name, bloodLead as size FROM medianGender";
            getData($qur,"gender","bloodLead");
            break;
        case 16:
            $qur = "SELECT gender as name, bisphenol as size FROM medianGender";
            getData($qur,"gender","bisphenol");
            break;
        case 17:
            $qur = "SELECT gender as name, cotinine as size FROM medianGender";
            getData($qur,"gender","cotinine");
            break;
        case 18:
            $qur = "SELECT gender as name, diethylthiophosphate as size FROM medianGender";
            getData($qur,"gender","diethylthiophosphate");
            break;
        case 19:
            $qur = "SELECT gender as name, mercury as size FROM medianGender";
            getData($qur,"gender","mercury");
            break;
        case 20:
            $qur = "SELECT gender as name, hexylphthalate as size FROM medianGender";
            getData($qur,"gender","hexylphthalate");
            break;
        case 21:
            $qur = "SELECT gender as name, pcb153 as size FROM medianGender";
            getData($qur,"gender","pcb153");
            break;
        case 22:
            $qur = "SELECT income as name, bloodLead as size FROM medianIncome";
            getData($qur,"income","bloodLead");
            break;
        case 23:
            $qur = "SELECT income as name, bisphenol as size FROM medianIncome";
            getData($qur,"income","bisphenol");
            break;
        case 24:
            $qur = "SELECT income as name, cotinine as size FROM medianIncome";
            getData($qur,"income","cotinine");
            break;
        case 25:
            $qur = "SELECT income as name, diethylthiophosphate as size FROM medianIncome";
            getData($qur,"income","diethylthiophosphate");
            break;
        case 26:
            $qur = "SELECT income as name, mercury as size FROM medianIncome";
            getData($qur,"income","mercury");
            break;
        case 27:
            $qur = "SELECT income as name, hexylphthalate as size FROM medianIncome";
            getData($qur,"income","hexylphthalate");
            break;
        case 28:
            $qur = "SELECT income as name, pcb153 as size FROM medianIncome";
            getData($qur,"income","pcb153");
            break;
        case 29:
            $qur = "SELECT education as name, bloodLead as size FROM medianEducation";
            getData($qur,"education","bloodLead");
            break;
        case 30:
            $qur = "SELECT education as name, bisphenol as size FROM medianEducation";
            getData($qur,"education","bisphenol");
            break;
        case 31:
            $qur = "SELECT education as name, cotinine as size FROM medianEducation";
            getData($qur,"education","cotinine");
            break;
        case 32:
            $qur = "SELECT education as name, diethylthiophosphate as size FROM medianEducation";
            getData($qur,"education","diethylthiophosphate");
            break;
        case 33:
            $qur = "SELECT education as name, mercury as size FROM medianEducation";
            getData($qur,"education","mercury");
            break;
        case 34:
            $qur = "SELECT education as name, hexylphthalate as size FROM medianEducation";
            getData($qur,"education","hexylphthalate");
            break;
        case 35:
            $qur = "SELECT education as name, pcb153 as size FROM medianEducation";
            getData($qur,"education","pcb153");
            break;
        case 36:
            $qur = "SELECT race as name, bloodLead as size FROM medianRace";
            getData($qur,"race","bloodLead");
            break;
        case 37:
            $qur = "SELECT race as name, bisphenol as size FROM medianRace";
            getData($qur,"race","bisphenol");
            break;
        case 38:
            $qur = "SELECT race as name, cotinine as size FROM medianRace";
            getData($qur,"race","cotinine");
            break;
        case 39:
            $qur = "SELECT race as name, diethylthiophosphate as size FROM medianRace";
            getData($qur,"race","diethylthiophosphate");
            break;
        case 40:
            $qur = "SELECT race as name, mercury as size FROM medianRace";
            getData($qur,"race","mercury");
            break;
        case 41:
            $qur = "SELECT race as name, hexylphthalate as size FROM medianRace";
            getData($qur,"race","hexylphthalate");
            break;
        case 42:
            $qur = "SELECT race as name, pcb153 as size FROM medianRace";
            getData($qur,"race","pcb153");
            break;
        case 43:
            $qur = "SELECT smoking as name, bisphenol as size FROM medianSmoking";
            getData($qur,"smoking","bisphenol");
            break;
        case 44:
            $qur = "SELECT smoking as name, cotinine as size FROM medianSmoking";
            getData($qur,"smoking","cotinine");
            break;
        case 45:
            $qur = "SELECT smoking as name, diethylthiophosphate as size FROM medianSmoking";
            getData($qur,"smoking","diethylthiophosphate");
            break;
        case 46:
            $qur = "SELECT smoking as name, hexylphthalate as size FROM medianSmoking";
            getData($qur,"smoking","hexylphthalate");
            break;
    }
}

function getData($var,$type1,$type2){
    $db = getDB();
    $rows = $db->query($var);
    $data = $rows->fetchAll(PDO::FETCH_OBJ);
    echo '{"name":"'.$type1.'","children":[{"name":"'.$type2.'","children":'.json_encode($data).'}]}';
}

function getDB(){
    $dsn = "mysql:dbname=pollutionDB;host=173.194.255.252";
    $username = "dbuser";
    $password = "passw0rd123";
    $dbConnection = new PDO($dsn, $username, $password);
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbConnection;
}
// POST route
$app->post(
    '/post',
    function () {
        echo 'This is a POST route';
    }
);

// PUT route
$app->put(
    '/put',
    function () {
        echo 'This is a PUT route';
    }
);

// PATCH route
$app->patch('/patch', function () {
    echo 'This is a PATCH route';
});

// DELETE route
$app->delete(
    '/delete',
    function () {
        echo 'This is a DELETE route';
    }
);
/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();

<?php
require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->get ( '/:category/:chemical', 'getDetailsFromDB' );

$app->run ();

/**
 * Function Name: getDetailsFromDB()
 * Desc: This is used to form the Query from the parameters passed in the URL
 * @param unknown $param1
 * @param unknown $param2
 */
function getDetailsFromDB($param1, $param2) {
	$query = "";
	
	//Conditions for Age
	if ($param1 == 'age' && $param2 == 'bisphenol') {
		$query = "SELECT age,bisphenol FROM medianAge;";
	} elseif ($param1 == 'age' && $param2 == 'lead') {
		$query = "SELECT age,bloodLead FROM medianAge;";
	} elseif ($param1 == 'age' && $param2 == 'mercury') {
		$query = "SELECT age,mercury FROM medianAge;";
	} elseif ($param1 == 'age' && $param2 == 'cotinine') {
		$query = "SELECT age,cotinine FROM medianAge;";
	} elseif ($param1 == 'age' && $param2 == 'dde') {
		$query = "SELECT age,dde FROM medianAge;";
	} elseif ($param1 == 'age' && $param2 == 'pcb') {
		$query = "SELECT age,pcb153 FROM medianAge;";
	} elseif ($param1 == 'age' && $param2 == 'pde') {
		$query = "SELECT age,pde FROM medianAge;";
	} elseif ($param1 == 'age' && $param2 == 'insesticides') {
		$query = "SELECT age,diethylthiophosphate FROM medianAge;";
	} elseif ($param1 == 'age' && $param2 == 'dehp') {
		$query = "SELECT age,hexylphthalate FROM medianAge;";
	}	
	
	// Conditions for Country
	elseif ($param1 == 'country' && $param2 == 'bisphenol') {
		$query = "SELECT country,bisphenol FROM medianCountry;";
	} elseif ($param1 == 'country' && $param2 == 'lead') {
		$query = "SELECT country,bloodLead FROM medianCountry;";
	} elseif ($param1 == 'country' && $param2 == 'mercury') {
		$query = "SELECT country,mercury FROM medianCountry;";
	} elseif ($param1 == 'country' && $param2 == 'cotinine') {
		$query = "SELECT country,cotinine FROM medianCountry;";
	} elseif ($param1 == 'country' && $param2 == 'dde') {
		$query = "SELECT country,dde FROM medianCountry;";
	} elseif ($param1 == 'country' && $param2 == 'pcb') {
		$query = "SELECT country,pcb153 FROM medianCountry;";
	} elseif ($param1 == 'country' && $param2 == 'pde') {
		$query = "SELECT country,pde FROM medianCountry;";
	} elseif ($param1 == 'country' && $param2 == 'insesticides') {
		$query = "SELECT country,diethylthiophosphate FROM medianCountry;";
	} elseif ($param1 == 'country' && $param2 == 'dehp') {
		$query = "SELECT country,hexylphthalate FROM medianCountry;";
	}	

	// Conditions for Gender
	elseif ($param1 == 'gender' && $param2 == 'bisphenol') {
		$query = "SELECT gender,bisphenol FROM medianGender;";
	} elseif ($param1 == 'gender' && $param2 == 'lead') {
		$query = "SELECT gender,bloodLead FROM medianGender;";
	} elseif ($param1 == 'gender' && $param2 == 'mercury') {
		$query = "SELECT gender,mercury FROM medianGender;";
	} elseif ($param1 == 'gender' && $param2 == 'cotinine') {
		$query = "SELECT gender,cotinine FROM medianGender;";
	} elseif ($param1 == 'gender' && $param2 == 'dde') {
		$query = "SELECT gender,dde FROM medianGender;";
	} elseif ($param1 == 'gender' && $param2 == 'pcb') {
		$query = "SELECT gender,pcb153 FROM medianGender;";
	} elseif ($param1 == 'gender' && $param2 == 'pde') {
		$query = "SELECT gender,pde FROM medianGender;";
	} elseif ($param1 == 'gender' && $param2 == 'insesticides') {
		$query = "SELECT gender,diethylthiophosphate FROM medianGender;";
	} elseif ($param1 == 'gender' && $param2 == 'dehp') {
		$query = "SELECT gender,hexylphthalate FROM medianGender;";
	}	

	// Conditions for Income
	elseif ($param1 == 'income' && $param2 == 'bisphenol') {
		$query = "SELECT income,bisphenol FROM medianIncome;";
	} elseif ($param1 == 'income' && $param2 == 'lead') {
		$query = "SELECT income,bloodLead FROM medianIncome;";
	} elseif ($param1 == 'income' && $param2 == 'mercury') {
		$query = "SELECT income,mercury FROM medianIncome;";
	} elseif ($param1 == 'income' && $param2 == 'cotinine') {
		$query = "SELECT income,cotinine FROM medianIncome;";
	} elseif ($param1 == 'income' && $param2 == 'dde') {
		$query = "SELECT income,dde FROM medianIncome;";
	} elseif ($param1 == 'income' && $param2 == 'pcb') {
		$query = "SELECT income,pcb153 FROM medianIncome;";
	} elseif ($param1 == 'income' && $param2 == 'pde') {
		$query = "SELECT income,pde FROM medianIncome;";
	} elseif ($param1 == 'income' && $param2 == 'insesticides') {
		$query = "SELECT income,diethylthiophosphate FROM medianIncome;";
	} elseif ($param1 == 'income' && $param2 == 'dehp') {
		$query = "SELECT income,hexylphthalate FROM medianIncome;";
	}	

	// Conditions for Education
	elseif ($param1 == 'education' && $param2 == 'bisphenol') {
		$query = "SELECT education,bisphenol FROM medianEducation;";
	} elseif ($param1 == 'education' && $param2 == 'lead') {
		$query = "SELECT education,bloodLead FROM medianEducation;";
	} elseif ($param1 == 'education' && $param2 == 'mercury') {
		$query = "SELECT education,mercury FROM medianEducation;";
	} elseif ($param1 == 'education' && $param2 == 'cotinine') {
		$query = "SELECT education,cotinine FROM medianEducation;";
	} elseif ($param1 == 'education' && $param2 == 'dde') {
		$query = "SELECT education,dde FROM medianEducation;";
	} elseif ($param1 == 'education' && $param2 == 'pcb') {
		$query = "SELECT education,pcb153 FROM medianEducation;";
	} elseif ($param1 == 'education' && $param2 == 'pde') {
		$query = "SELECT education,pde FROM medianEducation;";
	} elseif ($param1 == 'education' && $param2 == 'insesticides') {
		$query = "SELECT education,diethylthiophosphate FROM medianEducation;";
	} elseif ($param1 == 'education' && $param2 == 'dehp') {
		$query = "SELECT education,hexylphthalate FROM medianEducation;";
	}	

	// Conditions for Smoking
	elseif ($param1 == 'smoking' && $param2 == 'bisphenol') {
		$query = "SELECT smoking,bisphenol FROM medianSmoking;";
	} elseif ($param1 == 'smoking' && $param2 == 'lead') {
		$query = "SELECT smoking,bloodLead FROM medianSmoking;";
	} elseif ($param1 == 'smoking' && $param2 == 'mercury') {
		$query = "SELECT smoking,mercury FROM medianSmoking;";
	} elseif ($param1 == 'smoking' && $param2 == 'cotinine') {
		$query = "SELECT smoking,cotinine FROM medianSmoking;";
	} elseif ($param1 == 'smoking' && $param2 == 'dde') {
		$query = "SELECT smoking,dde FROM medianSmoking;";
	} elseif ($param1 == 'smoking' && $param2 == 'pcb') {
		$query = "SELECT smoking,pcb153 FROM medianSmoking;";
	} elseif ($param1 == 'smoking' && $param2 == 'pde') {
		$query = "SELECT smoking,pde FROM medianSmoking;";
	} elseif ($param1 == 'smoking' && $param2 == 'insesticides') {
		$query = "SELECT smoking,diethylthiophosphate FROM medianSmoking;";
	} elseif ($param1 == 'smoking' && $param2 == 'dehp') {
		$query = "SELECT smoking,hexylphthalate FROM medianSmoking;";
	}	

	// Conditions for Race
	elseif ($param1 == 'race' && $param2 == 'bisphenol') {
		$query = "SELECT race,bisphenol FROM medianRace;";
	} elseif ($param1 == 'race' && $param2 == 'lead') {
		$query = "SELECT race,bloodLead FROM medianRace;";
	} elseif ($param1 == 'race' && $param2 == 'mercury') {
		$query = "SELECT race,mercury FROM medianRace;";
	} elseif ($param1 == 'race' && $param2 == 'cotinine') {
		$query = "SELECT race,cotinine FROM medianRace;";
	} elseif ($param1 == 'race' && $param2 == 'dde') {
		$query = "SELECT race,dde FROM medianRace;";
	} elseif ($param1 == 'race' && $param2 == 'pcb') {
		$query = "SELECT race,pcb153 FROM medianRace;";
	} elseif ($param1 == 'race' && $param2 == 'pde') {
		$query = "SELECT race,pde FROM medianRace;";
	} elseif ($param1 == 'race' && $param2 == 'insesticides') {
		$query = "SELECT race,diethylthiophosphate FROM medianRace;";
	} elseif ($param1 == 'race' && $param2 == 'dehp') {
		$query = "SELECT race,hexylphthalate FROM medianRace;";
	}	

	// Conditions for LengthInUS
	elseif ($param1 == 'stayus' && $param2 == 'bisphenol') {
		$query = "SELECT lengthInUS,bisphenol FROM medianLenthInUS;";
	} elseif ($param1 == 'stayus' && $param2 == 'lead') {
		$query = "SELECT lengthInUS,bloodLead FROM medianLenthInUS;";
	} elseif ($param1 == 'stayus' && $param2 == 'mercury') {
		$query = "SELECT lengthInUS,mercury FROM medianLenthInUS;";
	} elseif ($param1 == 'stayus' && $param2 == 'cotinine') {
		$query = "SELECT lengthInUS,cotinine FROM medianLenthInUS;";
	} elseif ($param1 == 'stayus' && $param2 == 'dde') {
		$query = "SELECT lengthInUS,dde FROM medianLenthInUS;";
	} elseif ($param1 == 'stayus' && $param2 == 'pcb') {
		$query = "SELECT lengthInUS,pcb153 FROM medianLenthInUS;";
	} elseif ($param1 == 'stayus' && $param2 == 'pde') {
		$query = "SELECT lengthInUS,pde FROM medianLenthInUS;";
	} elseif ($param1 == 'stayus' && $param2 == 'insesticides') {
		$query = "SELECT lengthInUS,diethylthiophosphate FROM medianLenthInUS;";
	} elseif ($param1 == 'stayus' && $param2 == 'dehp') {
		$query = "SELECT lengthInUS,hexylphthalate FROM medianLenthInUS;";
	}
	
	//Call the GetData Function with the Query formed
	getData ( $query );
	
}
/**
 * Function Name:getData()
 * Desc: This is used to Fetch the DB using the given Query
 * Creates the JSON Object here.
 * @param unknown $query
 */
function getData($query) {
	$db = getDB ();
	$rows = $db->query ( $query );
	$data = $rows->fetchAll ( PDO::FETCH_OBJ );
	echo '{"name":"result","children":' . json_encode ( $data ) . '}';
}
/**
 * Function Name: getDB()
 * Desc: This is used to return the PDO object using the DB Connection Details
 * @return PDO
 */
function getDB() {
	$dsn = "mysql:dbname=pollutionDB;host=173.194.255.252";
	$username = "dbuser";
	$password = "passw0rd123";
	$dbConnection = new PDO ( $dsn, $username, $password );
	$dbConnection->setAttribute ( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	return $dbConnection;
}

?>
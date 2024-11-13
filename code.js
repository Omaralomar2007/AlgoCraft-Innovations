setText("CollegeSelection", "");
var AdminEmail, AdminPass;
var UserName, PassWord, UserCheck, PassCheck;


 UserName = getKeyValue("Username", function (UserNameKey) {
      UserName = UserNameKey;
}); 

PassWord = getKeyValue("Password",  function (PassWordKey) {
      PassWord = PassWordKey;
}); 




  



// if the user deleted all the subjects, then if he would add a subject the array grade takes two 
// inputs

var Mode;

onEvent("OldUserName", "input", function () {


  if (getText("OldUserName") === UserName) {
    UserCheck = true;
  } else {
    UserCheck = false;
  }
  
});

var Max5UnitTest, Min5UnitTest, Max4UnitTest, Min4UnitTest,
Max3UnitTest, Min3UnitTest, Max2UnitTest, Min2UnitTest,
Max1UnitTest, Min1UnitTest;

var Score5Unit, Score4Unit, Score3Unit, Score2Unit, Score1Unit;

onEvent("APUnitTestAdmin", "click", function () {
  setScreen("UnitTestAdmin");
});


onEvent("APPortfolioAdmin", "click", function () {
  setScreen("AdminPortfolio");
   
});


onEvent("HomeAdminPortfolio", "click", function () {
  setScreen("AdminPreference");
});

var MockResult5, MockResult4, MockResult3, MockResult2, MockResult1;
onEvent("Save60", "click", function () {
      showElement("LoadGif6");
  
  setTimeout(function () {
  hideElement("LoadGif6");
  setScreen("AdminPreference");
  }, 3000);
  
  MockResult5 = getNumber("Result5");
  MockResult4 = getNumber("Result4");
  MockResult3 = getNumber("Result3");
  MockResult2 = getNumber("Result2");
  MockResult1 = getNumber("Result1");
  
  setTimeout(function(){ setKeyValue("MockResult5", MockResult5, function () {});}, 500);
  setTimeout(function(){ setKeyValue("MockResult4", MockResult4, function () {});}, 1000);
  setTimeout(function(){ setKeyValue("MockResult3", MockResult3, function () {});}, 1500);
  setTimeout(function(){ setKeyValue("MockResult2", MockResult2, function () {});}, 2000);
  setTimeout(function(){ setKeyValue("MockResult1", MockResult1, function () {});}, 2500);
});




onEvent("SaveUnitTest", "click", function () {
  
    showElement("LoadGif4");
  
  setTimeout(function () {
  hideElement("LoadGif4");
  setScreen("AdminPreference");
  }, 7500);
  
  Max5UnitTest = getNumber("5MaxUnit");
  Min5UnitTest = getNumber("5MinUnit");
  Max4UnitTest = getNumber("4MaxUnit");
  Min4UnitTest = getNumber("4MinUnit");
  Max3UnitTest = getNumber("3MaxUnit");
  Min3UnitTest = getNumber("3MinUnit");
  Max2UnitTest = getNumber("2MaxUnit");
  Min2UnitTest = getNumber("2MinUnit");
  Max1UnitTest = getNumber("1MaxUnit");
  Min1UnitTest = getNumber("1MinUnit");
  Score5Unit = getNumber("5Score");
  Score4Unit = getNumber("4Score");
  Score3Unit = getNumber("3Score");
  Score2Unit = getNumber("2Score");
  Score1Unit = getNumber("1Score");
  
  
  
  setTimeout(function(){ setKeyValue("Max5UnitTest", Max5UnitTest, function () {});}, 500);
  setTimeout(function(){ setKeyValue("Min5UnitTest", Min5UnitTest, function () {}); }, 1000);
  setTimeout(function(){ setKeyValue("Max4UnitTest", Max4UnitTest, function () {}); }, 1500);
  setTimeout(function(){setKeyValue("Min4UnitTest", Min4UnitTest, function () {}); }, 2000);
  setTimeout(function(){setKeyValue("Max3UnitTest", Max3UnitTest, function () {}); }, 2500);
  setTimeout(function(){setKeyValue("Min3UnitTest", Min3UnitTest, function () {}); }, 3000);
  setTimeout(function(){setKeyValue("Max2UnitTest", Max2UnitTest, function () {}); }, 3500);
  setTimeout(function(){setKeyValue("Min2UnitTest", Min2UnitTest, function () {}); }, 4000);
  setTimeout(function(){setKeyValue("Max1UnitTest", Max1UnitTest, function () {}); }, 4500);
  setTimeout(function(){setKeyValue("Min1UnitTest", Min1UnitTest, function () {}); }, 5000);
  setTimeout(function(){setKeyValue("Score5Unit", Score5Unit, function () {}); }, 5500);
  setTimeout(function(){setKeyValue("Score4Unit", Score4Unit, function () {}); }, 6000);
  setTimeout(function(){setKeyValue("Score3Unit", Score3Unit, function () {}); }, 6500);
  setTimeout(function(){setKeyValue("Score2Unit", Score2Unit, function () {}); }, 7000);
  setTimeout(function(){setKeyValue("Score1Unit", Score1Unit, function () {}); }, 7500);
  
  
});


onEvent("BackAdminPage", "click", function () {
  setScreen("Settings2");
});

onEvent("Skip", "click", function () {
  setScreen("Services");
});

onEvent("AdminProgram", "click", function () {
  setScreen("AdminPreference");  
});

onEvent("Subscribe", "click", function () {
  var i;
  var foundEmptyKey = false;
  for (i = 1; i < Infinity; i++) {
    if (getKeyValue("Emails" + i) === undefined) {
      setKeyValue("Emails" + i, getText("PersonalEmail"), function () {
        console.log("Email stored successfully");
      });
      foundEmptyKey = true;
      break;
    }
  }
  if (!foundEmptyKey) {
    console.log("No available key found to store the email.");
    // Handle the case where no available key was found
  }
});

onEvent("BackSubscribe", "click", function () {
  setScreen("HomeWelcome");
});




onEvent("OldPassWord", "input", function () {

  if (getText("OldPassWord") === PassWord) {
    PassCheck = true;
  } else {
    PassCheck = false;
  }
  
});

onEvent("OldUserName", "click", function () {
hideElement("ERROR2");  
});

onEvent("OldPassWord", "click", function () {
hideElement("ERROR2");  
});

onEvent("NewUserName", "input", function () {
   UserName = getKeyValue("Username", function (UserNameKey) {
      UserName = UserNameKey;
}); 
});

onEvent("NewPassWord", "input", function () {
  
PassWord = getKeyValue("Password",  function (PassWordKey) {
      PassWord = PassWordKey;
}); 
});
onEvent("Verify", "click", function () {
  
  if(PassCheck === true && UserCheck === true) {
    setTimeout(function () {
    hideElement("OldPassWord");
    hideElement("OldUserName");
    hideElement("Verify");
    showElement("NewUserName");
    showElement("NewPassWord");
    showElement("UpdateBoth"); 
    }, 700);
  } else {
    showElement("ERROR2");
  }
});


onEvent("UpdateBoth", "click", function () {
  if (getText("NewUserName") != "" && getText("NewPassWord") != ""){
    var NewUsers = getText("NewUserName");
    var NewPasses = getText("NewPassWord");
setKeyValue("Username", NewUsers, function () {});
setKeyValue("Password", NewPasses, function () {});
hideElement("NewUserName");
hideElement("NewPassWord");
hideElement("UpdateBoth");
showElement("OldPassWord");
showElement("OldUserName");
showElement("Verify");
setScreen("Settings2");

setTimeout(function() {
  

 UserName = getKeyValue("Username", function (UserNameKey) {
      UserName = UserNameKey;
}); 

PassWord = getKeyValue("Password",  function (PassWordKey) {
      PassWord = PassWordKey;
}); 

}, 3000);
  }
setText("NewUserName", "");
setText("NewPassWord", "");
setText("OldPassWord", "");
setText("OldUserName", "");
});

onEvent("BackSettings", "click", function () {
hideElement("NewUserName");
hideElement("NewPassWord");
hideElement("UpdateBoth");
showElement("OldPassWord");
showElement("OldUserName");
showElement("Verify");
setScreen("Settings2");
setText("NewUserName", "");
setText("NewPassWord", "");
setText("OldPassWord", "");
setText("OldUserName", "");
});

function PropertySet (Icon, Value, Value2) {
  setProperty(Icon, "border-color", "white");
  setProperty(Icon, "border-radius", 15);
  setProperty(Icon, "width", 90);
  setProperty(Icon, "height", 90);
  setProperty(Icon, "x", Value);
  setProperty(Icon, "y", Value2);
}

function PropertySet3 (Icon, Value, Value2) {
  setProperty(Icon, "border-color", "white");
  setProperty(Icon, "border-radius", 15);
  setProperty(Icon, "width", 80);
  setProperty(Icon, "height", 80);
  setProperty(Icon, "x", Value);
  setProperty(Icon, "y", Value2);
}

function PropertySet2 (Icon, Value, Value2) {
  setProperty(Icon, "border-color", rgb(1, 156, 222));
  setProperty(Icon, "border-radius", 0);
  setProperty(Icon, "width", 60);
  setProperty(Icon, "height", 60);
  setProperty(Icon, "x", Value);
  setProperty(Icon, "y", Value2);
}

onEvent("SettingsIcon2", "click", function () {
  setScreen("Settings2");
});

onEvent("SettingsIcon3", "click", function () {
  setScreen("Settings2");
});

onEvent("HideAPPDetails", "click", function () {
  Mode = 1;
  hideElement("SettingsIcon2");
  showElement("SettingsIcon3");
  showElement("S1");
  showElement("S2");
  showElement("SmallSizeIcon");
  showElement("LargeSizeIcon");
  hideElement("Services1Next");
  hideElement("HideAPPDetails");
  showElement("ShowAPPDetails");
  hideElement("A1");
  hideElement("A2");
  hideElement("A3");
  hideElement("B1");
  hideElement("B2");
  hideElement("B3");
  hideElement("CC1");
  hideElement("CC2");
  hideElement("CC3");
  hideElement("D1");
  hideElement("D2");
  hideElement("D3");
  hideElement("E1");
  hideElement("E2");
  hideElement("E3");
  hideElement("FF1");
  hideElement("FF2");
  hideElement("FF3");
  hideElement("G1");
  hideElement("G2");
  hideElement("G3");
  setParent("GPACumuAPP", "Services");
  setParent("PreAPcalcPortfolio", "Services");
  
  PropertySet("GPARSS", 15, 41);
  PropertySet("GPANormal", 115, 41);
  PropertySet("APcalc", 215, 41);
  PropertySet("APcalcPortfolio", 15, 141);
  PropertySet("KUGPA", 115, 141);
  PropertySet("GPACumuAPP", 215, 141);
  PropertySet("PreAPcalcPortfolio", 15, 241);
  setProperty("SettingsIcon3", "width", 90);
  setProperty("SettingsIcon3", "height", 90);
  setProperty("SettingsIcon3", "x", 115);
  setProperty("SettingsIcon3", "y", 241);
});


onEvent("SmallSizeIcon", "click", function () {
  hideElement("SmallSizeIcon");
  showElement("LargeSizeIcon");
  PropertySet3("GPARSS", 20, 41);
  PropertySet3("GPANormal", 120, 41);
  PropertySet3("APcalc", 220, 41);
  PropertySet3("APcalcPortfolio", 20, 141);
  PropertySet3("KUGPA", 120, 141);
  PropertySet3("GPACumuAPP", 220, 141);
  PropertySet3("PreAPcalcPortfolio", 20, 241);
  setProperty("SettingsIcon3", "x", 120);
  setProperty("SettingsIcon3", "y", 241);
  setProperty("SettingsIcon3", "width", 80);
  setProperty("SettingsIcon3", "height", 80);
});

onEvent("LargeSizeIcon", "click", function () {
  showElement("SmallSizeIcon");
  hideElement("LargeSizeIcon");
  PropertySet("GPARSS", 15, 41);
  PropertySet("GPANormal", 115, 41);
  PropertySet("APcalc", 215, 41);
  PropertySet("APcalcPortfolio", 15, 141);
  PropertySet("KUGPA", 115, 141);
  PropertySet("GPACumuAPP", 215, 141);
  PropertySet("PreAPcalcPortfolio", 15, 241);
  setProperty("SettingsIcon3", "x", 115);
  setProperty("SettingsIcon3", "y", 241);
  setProperty("SettingsIcon3", "width", 90);
  setProperty("SettingsIcon3", "height", 90);
});

onEvent("ShowAPPDetails", "click", function () {
  Mode = 2;
  showElement("SettingsIcon2");
  hideElement("SettingsIcon3");
  showElement("Services1Next");
  showElement("HideAPPDetails");
  hideElement("ShowAPPDetails");
  hideElement("S1");
  hideElement("S2");
  hideElement("SmallSizeIcon");
  hideElement("LargeSizeIcon");
  showElement("A1");
  showElement("A2");
  showElement("A3");
  showElement("B1");
  showElement("B2");
  showElement("B3");
  showElement("CC1");
  showElement("CC2");
  showElement("CC3");
  showElement("D1");
  showElement("D2");
  showElement("D3");
  showElement("E1");
  showElement("E2");
  showElement("E3");
  showElement("FF1");
  showElement("FF2");
  showElement("FF3");
  showElement("G1");
  showElement("G2");
  showElement("G3");
  setParent("GPACumuAPP", "Services2");
  setParent("PreAPcalcPortfolio", "Services2");
  
  PropertySet2("GPARSS", 230, 39);
  PropertySet2("GPANormal", 230, 114);
  PropertySet2("APcalc", 230, 189);
  PropertySet2("APcalcPortfolio", 230, 264);
  PropertySet2("KUGPA", 230, 339);
  PropertySet2("GPACumuAPP", 230, 39);
  PropertySet2("PreAPcalcPortfolio", 230, 114);
});

onEvent("BackSettings2", "click", function () {
  setScreen("Services");
});

var   
    APMax5Memory2 = 0,
    APMax4Memory2 = 0,
    APMax3Memory2 = 0,
    APMax2Memory2 = 0,
    APMax1Memory2 = 0;
    
    
var 
    APMin5Memory2 = 0,
    APMin4Memory2 = 0,
    APMin3Memory2 = 0,
    APMin2Memory2 = 0,
    APMin1Memory2 = 0;
    
    
var   
    APMax5Memory = 0,
    APMax4Memory = 0,
    APMax3Memory = 0,
    APMax2Memory = 0,
    APMax1Memory = 0;
    
var 
    APMin5Memory = 0,
    APMin4Memory = 0,
    APMin3Memory = 0,
    APMin2Memory = 0,
    APMin1Memory = 0;



var factorValue, NamesBefore, currentIndex;
function handleFactorInput(factorId) {
  var factorInput = getText(factorId).trim(); // Trim whitespace from input
  if (factorInput === "" || isNaN(Number(factorInput))) {
    // If input is empty or not a number, set the variable and input field to 0
    setNumber(factorId, "");
    // Set the variable to 0
  } else {
    // If input is a valid number, convert it to a number
     factorValue = parseFloat(factorInput);
    // Perform further processing or calculations with the factorValue
  }
}

// Usage:
onEvent("Factor1", "input", function () {
  handleFactorInput("Factor1");
});

onEvent("Factor2", "input", function () {
  handleFactorInput("Factor2");
});

onEvent("Factor3", "input", function () {
  handleFactorInput("Factor3");
});

onEvent("Factor4", "input", function () {
  handleFactorInput("Factor4");
});

onEvent("Factor5", "input", function () {
  handleFactorInput("Factor5");
});

onEvent("Factor6", "input", function () {
  handleFactorInput("Factor6");
});

onEvent("Factor7", "input", function () {
  handleFactorInput("Factor7");
});

onEvent("Max1", "input", function () {
  handleFactorInput("Max1");
});

onEvent("Max2", "input", function () {
  handleFactorInput("Max2");
});

onEvent("Max3", "input", function () {
  handleFactorInput("Max3");
});

onEvent("Max4", "input", function () {
  handleFactorInput("Max4");
});

onEvent("Max5", "input", function () {
  handleFactorInput("Max5");
});

onEvent("Max6", "input", function () {
  handleFactorInput("Max6");
});

onEvent("Max7", "input", function () {
  handleFactorInput("Max7");
});






setText("SubjectChoosePreAPPortfolio", "");

var DeleteClicksFRQ = 1;

function DeleteFRQ(FRQ) {
  onEvent(FRQ + "FRQAdmin", "click", function () {
    if (DeleteClicksFRQ % 2 === 0) {
    hideElement(FRQ + "FRQAdmin");
    hideElement("Factor" + (FRQ+1));
    hideElement("Max" + (FRQ+1));
    setNumber("Factor" + (FRQ+1) , 0);
    setNumber("Max" + (FRQ+1) , 0);
    
    
  } 
  });
}

for(var i =1; i <= 6; i++) {
DeleteFRQ(i); }

onEvent("DeleteFRQ", "click", function () {
  DeleteClicksFRQ ++;
  
  if (DeleteClicksFRQ % 2 === 0) {
    setProperty("DeleteFRQ", "icon-color", "red");
  } else {
    setProperty("DeleteFRQ", "icon-color", "black");
  }
});


    
setText("CalculationAnswer", "");

  setText("AdminDropSubject", "");
  showElement("Login");
  showElement("LoginArrow");

//var UserName;

//for (var i = 0; i < Infinity; i++) {
//UserName = getKeyValue(UserName + i,
//function (UserNameX) {
  //    UserName = UserNameX;
//}); } 

var CurveDisplay =0;





setTimeout(function () {
  
  onEvent("HomeGPACumu", "click", function () {
    if (Mode ===1) {
    setScreen("Services"); 
    } else {
    setScreen("Services2");   
    }
    hideElement("BackGPACumu");
  });
  
   onEvent("HomePortfolioAP", "click", function( ) {
  setScreen("Services");
  setNumber("PortfolioAssignment", "");
  setNumber("PortfolioAttendance", "");
  setNumber("PortfolioParticipation", "");
  setNumber("PortfolioUnitTest", "");
    });
    
  onEvent("GPACumu", "click", function () {
    setScreen("GPACumuScreen");
  });
  
  onEvent("BackGPACumu", "click", function () {
    setScreen("Final");
  });
  
  onEvent("TypeInfoButton", "click", function () {
    setScreen("TypeInfo");
  });
  
  onEvent("CreditInfoButton", "click", function () {
    setScreen("CreditInfo");
  });
  
  onEvent("BackCredit", "click", function () {
    setScreen("InfoScreen");
  });
  
  onEvent("BackType", "click", function () {
    setScreen("InfoScreen");
  });
  
  onEvent("BackInfo", "click", function () {
    setScreen("Subject");
  });
  
  onEvent("Question", "click", function () {
     console.log(Grade);
  console.log(Type);
  console.log(Weight);
  console.log(SubjectName);
    setScreen("InfoScreen");
  });
  
  
  
var GPAAPPDefine;
var DeleteTarget2;
var MCQT2, FRQ1T2, FRQ2T2, FRQ3T2, FRQ4T2, FRQ5T2, FRQ6T2;

var MCQTMax2, FRQ1TMax2, FRQ2TMax2, FRQ3TMax2, FRQ4TMax2, FRQ5TMax2, FRQ6TMax2;
var AdminDropSubject, MockCurveT;
 
onEvent("Home2", "click", function( ) {
   setScreen("Services"); 
    });

onEvent("APcalcPortfolio", "click", function () {
  setScreen("APPortfolioCalc");
  
AssignmentsGeneral2 = getKeyValue("AssignmentsGeneral", function (AssignmentsGenerals2) {
    AssignmentsGeneral2 = AssignmentsGenerals2;
});

AttendanceGeneral2 = getKeyValue("AttendanceGeneral", function (AttendanceGenerals2) {
    AttendanceGeneral2 = AttendanceGenerals2;
});

ParticipationGeneral2 = getKeyValue("ParticipationGeneral", function (ParticipationGenerals2) {
    ParticipationGeneral2 = ParticipationGenerals2;
});

UnitTestGeneral2 = getKeyValue("UnitTestGeneral", function (UnitTestGenerals2) {
    UnitTestGeneral2 = UnitTestGenerals2;
});

AssignmentsSeminar2 = getKeyValue("AssignmentsSeminar", function (AssignmentSeminar2) {
    AssignmentsSeminar2 = AssignmentSeminar2;
});

AttendanceSeminar2 = getKeyValue("AttendanceSeminar", function (AttendancesSeminar2) {
    AttendanceSeminar2 = AttendancesSeminar2;
});

ParticipationSeminar2 = getKeyValue("ParticipationSeminar", function (ParticipationsSeminar2) {
    ParticipationSeminar2 = ParticipationsSeminar2;
});

UnitTestSeminar2 = getKeyValue("UnitTestSeminar", function (UnitTestsSeminar2) {
    UnitTestSeminar2 = UnitTestsSeminar2;
});
});

onEvent("D1", "click", function () {
  setScreen("APPortfolioCalc");
});

onEvent("D2", "click", function () {
  setScreen("APPortfolioCalc");
});

onEvent("D3", "click", function () {
  setScreen("APPortfolioCalc");
});

onEvent("PreAPcalcPortfolio", "click", function () {
  setScreen("PreAPPortfolioCalc");
});

onEvent("G1", "click", function () {
  setScreen("PreAPPortfolioCalc");
});

onEvent("G2", "click", function () {
  setScreen("PreAPPortfolioCalc");
});

onEvent("G3", "click", function () {
  setScreen("PreAPPortfolioCalc");
});
    
onEvent("Services1Next", "click", function () {
  setScreen("Services2");
});

onEvent("Services2Back", "click", function () {
  setScreen("Services");
});

onEvent("GPACumuAPP", "click", function () {
  setScreen("GPACumuScreen");
  hideElement("BackGPACumu");
});

onEvent("FF1", "click", function () {
  setScreen("GPACumuScreen");
  hideElement("BackGPACumu");
});

onEvent("FF2", "click", function () {
  setScreen("GPACumuScreen");
  hideElement("BackGPACumu");
});

onEvent("FF3", "click", function () {
  setScreen("GPACumuScreen");
  hideElement("BackGPACumu");
});


onEvent("AdminDropSubject", "change", function () {

    for (var i =1; i <= 7; i++) {
    setText("Factor" + i, "");
    setText("Max" + i, "");
    showElement("Factor" + i);
    showElement("Max" + i);
    showElement(i + "FRQAdmin");
  }
  showElement("MCQAdmin");
  showElement("Curveinput");
  showElement("SaveAdmin");
  showElement("DeleteAdmin");
  showElement("DeleteFRQ");
  showElement("Latest");
  showElement("NextAdmin");
  showElement("AdminDesign");
  showElement("Curve");
   
  
    for (var E =1; E <= 5; E++) {
    setText(E + "Max", "");
    setText(E + "Min", "");
    }
  setText("Curveinput", "");
    HideAdminShows ();
});

onEvent("DeleteAdmin", "click", function () {
    for (var i =1; i <= 7; i++) {
    setText("Factor" + i, "");
    setText("Max" + i, "");
  }
  setText("Curveinput", "");
});


onEvent("DeleteAdmin2", "click", function () {
    for (var i =1; i <= 5; i++) {
    setText(i + "Max", "");
    setText(i + "Min", "");
    }
});





onEvent("Latest", "click", function () {
  
AdminDropSubject = getText("AdminDropSubject"); AdminCheck;
   
for (var id=1; id<=5; id++) {
  
AdminMemory ("Biology", "Exam " + id + ": ", "Biology", "Exam " + id); 
AdminMemory ("Macroeconomics", "Exam " + id + ": ", "Macroeconomics", "Exam " + id); 
AdminMemory ("Psychology", "Exam " + id + ": ", "Psychology", "Exam " + id); 
AdminMemory ("Chemistry", "Exam " + id + ": ", "Chemistry", "Exam " + id);
AdminMemory ("Physics 1", "Exam " + id + ": ", "Physics 1", "Exam " + id);
AdminMemory ("Environmental Science", "Exam " + id + ": ", "Environmental", "Exam " + id); 
AdminMemory ("English Language and Composition", "Exam " + id + ": ", "English Lang", "Exam " + id); 
AdminMemory ("Computer Science Principles", "Exam " + id + ": ", "CSP", "Exam " + id); 
AdminMemory ("Computer Science A", "Exam " + id + ": ", "CSA", "Exam " + id); 
AdminMemory ("Precalculus", "Exam " + id + ": ", "Precalculus", "Exam " + id);
AdminMemory ("Statistics", "Exam " + id + ": ", "Statistics", "Exam " + id); 
AdminMemory ("Calculus AB", "Exam " + id + ": ", "Calculus AB", "Exam " + id);
AdminMemory ("Calculus BC", "Exam " + id + ": ", "Calculus BC", "Exam " + id);
AdminMemory ("Microeconomics", "Exam " + id + ": ", "Microeconomics", "Exam " + id);
AdminMemory ("Seminar", "Exam " + id + ": ", "Seminar", "Exam " + id);
AdminMemory ("Comparative Government and Politics", "Exam " + id + ": ", "Comparative Government and Politics", "Exam " + id);
AdminMemory ("European History", "Exam " + id + ": ", "European History", "Exam " + id);
AdminMemory ("Human Geography", "Exam " + id + ": ", "Human Geography", "Exam " + id);
AdminMemory ("United States Government and Politics", "Exam " + id + ": ", "United States Government and Politics", "Exam " + id);
AdminMemory ("United States History", "Exam " + id + ": ", "United States History", "Exam " + id);
AdminMemory ("World History: Modern", "Exam " + id + ": ", "World History: Modern", "Exam " + id);
AdminMemory ("2-D Art and Design", "Exam " + id + ": ", "2-D Art and Design", "Exam " + id);
AdminMemory ("3-D Art and Design", "Exam " + id + ": ", "3-D Art and Design", "Exam " + id);
AdminMemory ("Drawing", "Exam " + id + ": ", "Drawing", "Exam " + id);
AdminMemory ("Art History", "Exam " + id + ": ", "Art History", "Exam " + id);
AdminMemory ("Music Theory", "Exam " + id + ": ", "Music Theory", "Exam " + id);
AdminMemory ("English Literature and Composition", "Exam " + id + ": ", "English Literature and Composition", "Exam " + id);
AdminMemory ("Physics 2: Algebra-Based", "Exam " + id + ": ", "Physics 2: Algebra-Based", "Exam " + id);
AdminMemory ("Physics C: Electricity and Magnetism", "Exam " + id + ": ", "Physics C: Electricity and Magnetism", "Exam " + id);
AdminMemory ("Physics C: Mechanics", "Exam " + id + ": ", "Physics C: Mechanics", "Exam " + id);
AdminMemory ("Chinese Language and Culture", "Exam " + id + ": ", "Chinese Language and Culture", "Exam " + id);
AdminMemory ("French Language and Culture", "Exam " + id + ": ", "French Language and Culture", "Exam " + id);
AdminMemory ("German Language and Culture", "Exam " + id + ": ", "German Language and Culture", "Exam " + id);
AdminMemory ("Italian Language and Culture", "Exam " + id + ": ", "Italian Language and Culture", "Exam " + id);
AdminMemory ("Japanese Language and Culture", "Exam " + id + ": ", "Japanese Language and Culture", "Exam " + id);
AdminMemory ("Latin", "Exam " + id + ": ", "Latin", "Exam " + id);
AdminMemory ("Spanish Language and Culture", "Exam " + id + ": ", "Spanish Language and Culture", "Exam " + id);
AdminMemory ("Spanish Literature and Culture", "Exam " + id + ": ", "Spanish Literature and Culture", "Exam " + id);

  
  
  
  
}
  
  
  
  AdminCheck;
  
});
// dikdikdokdokdokdodkod


function AdminCheck () {
  setNumber("Max1", parseFloat(MCQTMax2));
  setNumber("Max2", parseFloat(FRQ1TMax2));
  setNumber("Max3", parseFloat(FRQ2TMax2));
  setNumber("Max4", parseFloat(FRQ3TMax2));
  setNumber("Max5", parseFloat(FRQ4TMax2));
  setNumber("Max6", parseFloat(FRQ5TMax2));
  setNumber("Max7", parseFloat(FRQ6TMax2));
  setNumber("Factor1", parseFloat(MCQT2));
  setNumber("Factor2", parseFloat(FRQ1T2));
  setNumber("Factor3", parseFloat(FRQ2T2));
  setNumber("Factor4", parseFloat(FRQ3T2));
  setNumber("Factor5", parseFloat(FRQ4T2));
  setNumber("Factor6", parseFloat(FRQ5T2));
  setNumber("Factor7", parseFloat(FRQ6T2)); 
  setText("Curveinput", MockCurveT);
  
  if (MCQTMax2 === 0 ) {
    setNumber("Max1", 0);
  }
  
  
  
  if (FRQ1TMax2 === 0 ) {
    setNumber("Max2", 0);
  }
  
    if (FRQ2TMax2 === 0 ) {
    setNumber("Max3", 0);
  }
  
   if (FRQ3TMax2 === 0 ) {
    setNumber("Max4", 0);
  }
  
   if (FRQ4TMax2 === 0 ) {
    setNumber("Max5", 0);
  }
  
  if (FRQ5TMax2 === 0 ) {
    setNumber("Max6", 0);
  }
  
   if (FRQ6TMax2 === 0 ) {
    setNumber("Max7", 0);
  }
  
  
  if (MCQT2 === 0 ) {
    setNumber("Factor1", 0);
  }
  
  if (FRQ1T2 === 0 ) {
    setNumber("Factor2", 0);
  }
  
    if (FRQ2T2 === 0 ) {
    setNumber("Factor3", 0);
  }
  
   if (FRQ3T2 === 0 ) {
    setNumber("Factor4", 0);
  }
  
   if (FRQ4T2 === 0 ) {
    setNumber("Factor5", 0);
  }
  
  if (FRQ5T2 === 0 ) {
    setNumber("Factor6", 0);
  }
  
   if (FRQ6T2 === 0 ) {
    setNumber("Factor7", 0);
  }
  
  
} 

var HideAdminShow;
HideAdminShows ();



function HideAdminShows () {
  onEvent("AdminDropSubject", "change", function () {
    HideAdminShow = getText("AdminDropSubject");
    

      
      for (var S =1; S <= 7; S++) {
        showElement("Factor" + S);
        showElement("Max" + S);
      }
    
    for (var D =1; D <= 6; D++) {
        showElement(D+ "FRQAdmin");
      }
  });
}





function AdminMemory (Subject, Curve, Subject2, Curve2) {


if (AdminDropSubject === Curve2 + ": " + "AP " + Subject) {
  console.log(Curve + ": " + "AP " + Subject);
   
   AdminCheck();
    
  MCQTMax2 = getKeyValue(Curve  + "AP " + Subject2 + ": MCQ Max", function (MCQNMax2) {
      MCQTMax2 = MCQNMax2;
      
      AdminCheck ();
    }); 
  FRQ1TMax2 = getKeyValue(Curve +  "AP " + Subject2 + ": FRQ 1 Max", function (FRQ1NMax2) {
      FRQ1TMax2 = FRQ1NMax2;
      console.log(FRQ1TMax2);
      AdminCheck ();
    }); 
    
   MockCurveT =  getKeyValue(Curve + "AP " + Subject2 + ": Mock", function (MockCurve) {
     MockCurveT = MockCurve;
    console.log(MockCurve);
    AdminCheck();
});
    
    
   FRQ2TMax2 = getKeyValue(Curve +  "AP " + Subject2 + ": FRQ 2 Max", function (FRQ2NMax2) {
      FRQ2TMax2 = FRQ2NMax2;
      console.log(FRQ2TMax2);
      AdminCheck ();
    });
    
    
   FRQ3TMax2 = getKeyValue(Curve + "AP " + Subject2 + ": FRQ 3 Max", function (FRQ3NMax2) {
      FRQ3TMax2 = FRQ3NMax2;
      console.log(FRQ3TMax2);
      AdminCheck ();
    }); 
     
  FRQ4TMax2 = getKeyValue(Curve +  "AP " + Subject2 + ": FRQ 4 Max", function (FRQ4NMax2) {
      FRQ4TMax2 = FRQ4NMax2;
      console.log(FRQ4TMax2);
      AdminCheck ();
    }); 
    
  FRQ5TMax2 = getKeyValue(Curve +  "AP " + Subject2 + ": FRQ 5 Max", function (FRQ5NMax2) {
FRQ5TMax2 = FRQ5NMax2;
      console.log(FRQ5TMax2);
      AdminCheck ();
    }); 
    
    
  FRQ6TMax2 = getKeyValue(Curve +  "AP " + Subject2 + ": FRQ 6 Max", function (FRQ6NMax2) {
      FRQ6TMax2 = FRQ6NMax2;
      AdminCheck ();
      console.log(FRQ6TMax2);
    });
    
    
  MCQT2 = getKeyValue(Curve +  "AP " + Subject2 + ": MCQ", function (MCQN2) {
      MCQT2 = MCQN2;
      console.log(Curve +  "AP " + Subject2 + ":  MCQ" + "NJDK#N");
      AdminCheck ();
    }); 
    
  FRQ1T2 = getKeyValue(Curve  +  "AP " + Subject2 + ": FRQ 1", function (FRQ1N2) {
      FRQ1T2 = FRQ1N2;
      console.log(FRQ1T2);
      AdminCheck ();
    }); 
    
    
   FRQ2T2 = getKeyValue(Curve  + "AP " + Subject2 + ": FRQ 2", function (FRQ2N2) {
      FRQ2T2 = FRQ2N2;
      console.log(FRQ2T2);
      AdminCheck ();
    }); 
    
    
   FRQ3T2 = getKeyValue(Curve  +  "AP " + Subject2 + ": FRQ 3", function (FRQ3N2) {
      FRQ3T2 = FRQ3N2;
      console.log(FRQ3T2);
      AdminCheck ();
    });
    
  FRQ4T2 = getKeyValue(Curve  + "AP " + Subject2 + ": FRQ 4", function (FRQ4N2) {
      FRQ4T2 = FRQ4N2;
      console.log(FRQ4T2);
      AdminCheck ();
    }); 
    
 FRQ5T2 = getKeyValue(Curve  + "AP " + Subject2 + ": FRQ 5", function (FRQ5N2) {
FRQ5T2 = FRQ5N2;
      console.log(FRQ5T2);
      AdminCheck ();
    }); 
    
    
    
  FRQ6T2 = getKeyValue(Curve  + "AP " + Subject2 + ": FRQ 6", function (FRQ6N2) {
      FRQ6T2 = FRQ6N2;
      console.log(FRQ6T2);
      AdminCheck ();
    }); 
  
} 
  
} 

   
function AdminCheckRange () { // dokdodko
setNumber("5Max", APMax5Memory);
setNumber("4Max", APMax4Memory);
setNumber("3Max", APMax3Memory);
setNumber("2Max", APMax2Memory);
setNumber("1Max", APMax1Memory);

setNumber("5Min", APMin5Memory);
setNumber("4Min", APMin4Memory);
setNumber("3Min", APMin3Memory);
setNumber("2Min", APMin2Memory);
setNumber("1Min", APMin1Memory);

}



Theme = 4;


setStyle("Welcome", "font-family: Arial, Helvetica, sans-serif; font-size: 19px; font-weight: bold; color: #000;");
//setStyle("Sub2Home", "font-family: Courier, monospace; font-size: 22px; font-weight: bold; color: #fff;");


onEvent("Login", "click", function () {
  setScreen("HomePagesign");
     UserName = getKeyValue("Username", function (UserNameKey) {
       UserName = UserNameKey;  });   
       PassWord = getKeyValue("Password",  function (PassWordKey) {
         PassWord = PassWordKey; });
});

onEvent("Backlogin", "click", function () {
  setScreen("HomeWelcome");
});

onEvent("BackPromptUser", "click", function () {
  setScreen("ScreenChooseField");
});

onEvent("StartHome", "click", function() {
  setScreen("Services");
});

 onEvent("Email", "input", function () {
//   UserName = getKeyValue("Username", function (UserNameKey) {
  //    UserName = UserNameKey; 
//}); 

  hideElement("ERROR");
});

 


onEvent("Pass", "input", function () {
  //PassWord = getKeyValue("Password",  function (PassWordKey) {
    //  PassWord = PassWordKey;
//}); 
  hideElement("ERROR");
});

onEvent("HomePageGo", "click", function () {
     
      
AdminEmail = getText("Email");
AdminPass = getText("Pass");

if (AdminPass === PassWord && AdminEmail === UserName ) {
setScreen("Services");
showElement("AdminProgram"); 
showElement("ChangeButton"); 
showElement("SignOut");
//hideElement("Forget");
} else if (AdminEmail === "Teachers@RSSswitchon@1" && AdminPass === "TeachersSwitchon@RSS") {
  setScreen("Services");
  showElement("SignOut");
} else if (AdminEmail === UserName && AdminPass != PassWord) {
  showElement("ERROR"); 
  hideElement("SignOut");
  //showElement("Forget");
} else {
  showElement("ERROR"); 
  hideElement("SignOut");
}

});

onEvent("HomePagesign", "keydown", function(event) {
    if (event.key === "Enter") {
   
AdminEmail = getText("Email");
AdminPass = getText("Pass");

if (AdminPass === PassWord && AdminEmail === UserName ) {
setScreen("Services");
showElement("AdminProgram"); 
showElement("ChangeButton"); 
showElement("SignOut");
//hideElement("Forget");
} else if (AdminEmail === "Teachers@RSSswitchon@1" && AdminPass === "TeachersSwitchon@RSS") {
  setScreen("Services");
  showElement("SignOut");
} else if (AdminEmail === UserName && AdminPass != PassWord) {
  showElement("ERROR"); 
  hideElement("SignOut");
  //showElement("Forget");
} else {
  showElement("ERROR"); 
  hideElement("SignOut");
}   
    
      
    }
    });

function Notes(Button, Note) {
onEvent(Button, "mouseover", function () {
  showElement(Note);
    setTimeout(function () {
  hideElement(Note);
  }, 2000);
  
});

onEvent(Button, "mouseout", function () {
  hideElement(Note);
});

}

//Notes ("DownloadInputUnitTest", "NoteDownloadUnitTest");
//Notes ("RemoveInputUnitTest", "NoteRemoveInputUnitTest");



onEvent("ChangeButton", "click", function  () {
  setScreen("Change");
  
    PassWord = getKeyValue("Password",  function (PassWordKey) {
      PassWord = PassWordKey;
}); 

   UserName = getKeyValue("Username", function (UserNameKey) {
      UserName = UserNameKey;
}); 


});

setText("MockAP", "" );
var Factor1, Factor2, Factor3, Factor4, Factor5, Factor6, Factor7;
var Max1, Max2, Max3, Max4, Max5, Max6, Max7, AdminDropSubject;
var Mock1, Mock2, Mock3, Mock4, Mock5;
var APMax5, APMin5, APMax4, APMin4, APMax3, APMin3, APMax2, APMin2, APMax1, APMin1;
onEvent("SaveAdmin", "click", function () {
  showElement("LoadGif1");
  
  setTimeout(function () {
  hideElement("LoadGif1");
  }, 8000);
  Factor1 = getNumber("Factor1");
  Factor2 = getNumber("Factor2");
  Factor3 = getNumber("Factor3");
  Factor4 = getNumber("Factor4");
  Factor5 = getNumber("Factor5");
  Factor6 = getNumber("Factor6");
  Factor7 = getNumber("Factor7");
  Max1 = getNumber("Max1");
  Max2 = getNumber("Max2");
  Max3 = getNumber("Max3");
  Max4 = getNumber("Max4");
  Max5 = getNumber("Max5");
  Max6 = getNumber("Max6");
  Max7 = getNumber("Max7");
  

  AdminDropSubject = getText("AdminDropSubject");
  
  
if (AdminDropSubject === "Exam 1: AP Biology"
  || AdminDropSubject === "Exam 1: AP Macroeconomics"
  || AdminDropSubject === "Exam 1: AP Chemistry"
  || AdminDropSubject === "Exam 1: AP Environmental Science"
  || AdminDropSubject === "Exam 1: AP Physics 1"
  || AdminDropSubject === "Exam 1: AP English Language and Composition"
  || AdminDropSubject === "Exam 1: AP Computer Science Principles"
  || AdminDropSubject === "Exam 1: AP Computer Science A"
  || AdminDropSubject === "Exam 1: AP Precalculus"
  || AdminDropSubject === "Exam 1: AP Statistics"
  || AdminDropSubject === "Exam 1: AP Calculus AB"
  || AdminDropSubject === "Exam 1: AP Calculus BC"
  || AdminDropSubject === "Exam 1: AP Microeconomics"
  || AdminDropSubject === "Exam 1: AP Psychology"
  || AdminDropSubject === "Exam 1: AP Music Theory"
  || AdminDropSubject === "Exam 1: AP Art History"
  || AdminDropSubject === "Exam 1: AP Drawing"
  || AdminDropSubject === "Exam 1: AP 3-D Art and Design"
  || AdminDropSubject === "Exam 1: AP 2-D Art and Design"
  || AdminDropSubject === "Exam 1: AP World History: Modern"
  || AdminDropSubject === "Exam 1: AP United States History"
  || AdminDropSubject === "Exam 1: AP United States Government and Politics"
  || AdminDropSubject === "Exam 1: AP Human Geography"
  || AdminDropSubject === "Exam 1: AP European History"
  || AdminDropSubject === "Exam 1: AP Comparative Government and Politics"
  || AdminDropSubject === "Exam 1: AP Seminar"
  || AdminDropSubject === "Exam 1: AP Research"
  || AdminDropSubject === "Exam 1: AP Physics C: Mechanics"
  || AdminDropSubject === "Exam 1: AP Physics C: Electricity and Magnetism"
  || AdminDropSubject === "Exam 1: AP Physics 2: Algebra-Based"
  || AdminDropSubject === "Exam 1: AP French Language and Culture"
  || AdminDropSubject === "Exam 1: AP German Language and Culture"
  || AdminDropSubject === "Exam 1: AP Italian Language and Culture"
  || AdminDropSubject === "Exam 1: AP Japanese Language and Culture"
  || AdminDropSubject === "Exam 1: AP Latin"
  || AdminDropSubject === "Exam 1: AP Spanish Language and Culture"
  || AdminDropSubject === "Exam 1: AP Spanish Literature and Culture"
  || AdminDropSubject === "Exam 1: AP Chinese Language and Culture"
  ) { Mock1 = getText("Curveinput"); }
  
  else  if (AdminDropSubject === "Exam 2: AP Biology"
  || AdminDropSubject === "Exam 2: AP Macroeconomics"
  || AdminDropSubject === "Exam 2: AP Chemistry"
  || AdminDropSubject === "Exam 2: AP Environmental Science"
  || AdminDropSubject === "Exam 2: AP Physics 1"
  || AdminDropSubject === "Exam 2: AP English Language and Composition"
  || AdminDropSubject === "Exam 2: AP Computer Science Principles"
  || AdminDropSubject === "Exam 2: AP Computer Science A"
  || AdminDropSubject === "Exam 2: AP Precalculus"
  || AdminDropSubject === "Exam 2: AP Statistics"
  || AdminDropSubject === "Exam 2: AP Calculus AB"
  || AdminDropSubject === "Exam 2: AP Calculus BC"
  || AdminDropSubject === "Exam 2: AP Microeconomics"
  || AdminDropSubject === "Exam 2: AP Psychology"
  || AdminDropSubject === "Exam 2: AP Music Theory"
  || AdminDropSubject === "Exam 2: AP Art History"
  || AdminDropSubject === "Exam 2: AP Drawing"
  || AdminDropSubject === "Exam 2: AP 3-D Art and Design"
  || AdminDropSubject === "Exam 2: AP 2-D Art and Design"
  || AdminDropSubject === "Exam 2: AP World History: Modern"
  || AdminDropSubject === "Exam 2: AP United States History"
  || AdminDropSubject === "Exam 2: AP United States Government and Politics"
  || AdminDropSubject === "Exam 2: AP Human Geography"
  || AdminDropSubject === "Exam 2: AP European History"
  || AdminDropSubject === "Exam 2: AP Comparative Government and Politics"
  || AdminDropSubject === "Exam 2: AP Seminar"
  || AdminDropSubject === "Exam 2: AP Research"
  || AdminDropSubject === "Exam 2: AP Physics C: Mechanics"
  || AdminDropSubject === "Exam 2: AP Physics C: Electricity and Magnetism"
  || AdminDropSubject === "Exam 2: AP Physics 2: Algebra-Based"
  || AdminDropSubject === "Exam 2: AP French Language and Culture"
  || AdminDropSubject === "Exam 2: AP German Language and Culture"
  || AdminDropSubject === "Exam 2: AP Italian Language and Culture"
  || AdminDropSubject === "Exam 2: AP Japanese Language and Culture"
  || AdminDropSubject === "Exam 2: AP Latin"
  || AdminDropSubject === "Exam 2: AP Spanish Language and Culture"
  || AdminDropSubject === "Exam 2: AP Spanish Literature and Culture"
  || AdminDropSubject === "Exam 2: AP Chinese Language and Culture"
  ) { Mock2 = getText("Curveinput"); }
  
   else   if (AdminDropSubject === "Exam 3: AP Biology"
  || AdminDropSubject === "Exam 3: AP Macroeconomics"
  || AdminDropSubject === "Exam 3: AP Chemistry"
  || AdminDropSubject === "Exam 3: AP Environmental Science"
  || AdminDropSubject === "Exam 3: AP Physics 1"
  || AdminDropSubject === "Exam 3: AP English Language and Composition"
  || AdminDropSubject === "Exam 3: AP Computer Science Principles"
  || AdminDropSubject === "Exam 3: AP Computer Science A"
  || AdminDropSubject === "Exam 3: AP Precalculus"
  || AdminDropSubject === "Exam 3: AP Statistics"
  || AdminDropSubject === "Exam 3: AP Calculus AB"
  || AdminDropSubject === "Exam 3: AP Calculus BC"
  || AdminDropSubject === "Exam 3: AP Microeconomics"
  || AdminDropSubject === "Exam 3: AP Psychology"
  || AdminDropSubject === "Exam 3: AP Music Theory"
  || AdminDropSubject === "Exam 3: AP Art History"
  || AdminDropSubject === "Exam 3: AP Drawing"
  || AdminDropSubject === "Exam 3: AP 3-D Art and Design"
  || AdminDropSubject === "Exam 3: AP 2-D Art and Design"
  || AdminDropSubject === "Exam 3: AP World History: Modern"
  || AdminDropSubject === "Exam 3: AP United States History"
  || AdminDropSubject === "Exam 3: AP United States Government and Politics"
  || AdminDropSubject === "Exam 3: AP Human Geography"
  || AdminDropSubject === "Exam 3: AP European History"
  || AdminDropSubject === "Exam 3: AP Comparative Government and Politics"
  || AdminDropSubject === "Exam 3: AP Seminar"
  || AdminDropSubject === "Exam 3: AP Research"
  || AdminDropSubject === "Exam 3: AP Physics C: Mechanics"
  || AdminDropSubject === "Exam 3: AP Physics C: Electricity and Magnetism"
  || AdminDropSubject === "Exam 3: AP Physics 2: Algebra-Based"
  || AdminDropSubject === "Exam 3: AP French Language and Culture"
  || AdminDropSubject === "Exam 3: AP German Language and Culture"
  || AdminDropSubject === "Exam 3: AP Italian Language and Culture"
  || AdminDropSubject === "Exam 3: AP Japanese Language and Culture"
  || AdminDropSubject === "Exam 3: AP Latin"
  || AdminDropSubject === "Exam 3: AP Spanish Language and Culture"
  || AdminDropSubject === "Exam 3: AP Spanish Literature and Culture"
  || AdminDropSubject === "Exam 3: AP Chinese Language and Culture"
  ) { Mock3 = getText("Curveinput"); }
  
  
   else  if (AdminDropSubject === "Exam 4: AP Biology"
  || AdminDropSubject === "Exam 4: AP Macroeconomics"
  || AdminDropSubject === "Exam 4: AP Chemistry"
  || AdminDropSubject === "Exam 4: AP Environmental Science"
  || AdminDropSubject === "Exam 4: AP Physics 1"
  || AdminDropSubject === "Exam 4: AP English Language and Composition"
  || AdminDropSubject === "Exam 4: AP Computer Science Principles"
  || AdminDropSubject === "Exam 4: AP Computer Science A"
  || AdminDropSubject === "Exam 4: AP Precalculus"
  || AdminDropSubject === "Exam 4: AP Statistics"
  || AdminDropSubject === "Exam 4: AP Calculus AB"
  || AdminDropSubject === "Exam 4: AP Calculus BC"
  || AdminDropSubject === "Exam 4: AP Microeconomics"
  || AdminDropSubject === "Exam 4: AP Psychology"
  || AdminDropSubject === "Exam 4: AP Music Theory"
  || AdminDropSubject === "Exam 4: AP Art History"
  || AdminDropSubject === "Exam 4: AP Drawing"
  || AdminDropSubject === "Exam 4: AP 3-D Art and Design"
  || AdminDropSubject === "Exam 4: AP 2-D Art and Design"
  || AdminDropSubject === "Exam 4: AP World History: Modern"
  || AdminDropSubject === "Exam 4: AP United States History"
  || AdminDropSubject === "Exam 4: AP United States Government and Politics"
  || AdminDropSubject === "Exam 4: AP Human Geography"
  || AdminDropSubject === "Exam 4: AP European History"
  || AdminDropSubject === "Exam 4: AP Comparative Government and Politics"
  || AdminDropSubject === "Exam 4: AP Seminar"
  || AdminDropSubject === "Exam 4: AP Research"
  || AdminDropSubject === "Exam 4: AP Physics C: Mechanics"
  || AdminDropSubject === "Exam 4: AP Physics C: Electricity and Magnetism"
  || AdminDropSubject === "Exam 4: AP Physics 2: Algebra-Based"
  || AdminDropSubject === "Exam 4: AP French Language and Culture"
  || AdminDropSubject === "Exam 4: AP German Language and Culture"
  || AdminDropSubject === "Exam 4: AP Italian Language and Culture"
  || AdminDropSubject === "Exam 4: AP Japanese Language and Culture"
  || AdminDropSubject === "Exam 4: AP Latin"
  || AdminDropSubject === "Exam 4: AP Spanish Language and Culture"
  || AdminDropSubject === "Exam 4: AP Spanish Literature and Culture"
  || AdminDropSubject === "Exam 4: AP Chinese Language and Culture"
  ) { Mock4 = getText("Curveinput"); }
  
    
else if (AdminDropSubject === "Exam 5: AP Biology"
  || AdminDropSubject === "Exam 5: AP Macroeconomics"
  || AdminDropSubject === "Exam 5: AP Chemistry"
  || AdminDropSubject === "Exam 5: AP Environmental Science"
  || AdminDropSubject === "Exam 5: AP Physics 1"
  || AdminDropSubject === "Exam 5: AP English Language and Composition"
  || AdminDropSubject === "Exam 5: AP Computer Science Principles"
  || AdminDropSubject === "Exam 5: AP Computer Science A"
  || AdminDropSubject === "Exam 5: AP Precalculus"
  || AdminDropSubject === "Exam 5: AP Statistics"
  || AdminDropSubject === "Exam 5: AP Calculus AB"
  || AdminDropSubject === "Exam 5: AP Calculus BC"
  || AdminDropSubject === "Exam 5: AP Microeconomics"
  || AdminDropSubject === "Exam 5: AP Psychology"
  || AdminDropSubject === "Exam 5: AP Music Theory"
  || AdminDropSubject === "Exam 5: AP Art History"
  || AdminDropSubject === "Exam 5: AP Drawing"
  || AdminDropSubject === "Exam 5: AP 3-D Art and Design"
  || AdminDropSubject === "Exam 5: AP 2-D Art and Design"
  || AdminDropSubject === "Exam 5: AP World History: Modern"
  || AdminDropSubject === "Exam 5: AP United States History"
  || AdminDropSubject === "Exam 5: AP United States Government and Politics"
  || AdminDropSubject === "Exam 5: AP Human Geography"
  || AdminDropSubject === "Exam 5: AP European History"
  || AdminDropSubject === "Exam 5: AP Comparative Government and Politics"
  || AdminDropSubject === "Exam 5: AP Seminar"
  || AdminDropSubject === "Exam 5: AP Research"
  || AdminDropSubject === "Exam 5: AP Physics C: Mechanics"
  || AdminDropSubject === "Exam 5: AP Physics C: Electricity and Magnetism"
  || AdminDropSubject === "Exam 5: AP Physics 2: Algebra-Based"
  || AdminDropSubject === "Exam 5: AP French Language and Culture"
  || AdminDropSubject === "Exam 5: AP German Language and Culture"
  || AdminDropSubject === "Exam 5: AP Italian Language and Culture"
  || AdminDropSubject === "Exam 5: AP Japanese Language and Culture"
  || AdminDropSubject === "Exam 5: AP Latin"
  || AdminDropSubject === "Exam 5: AP Spanish Language and Culture"
  || AdminDropSubject === "Exam 5: AP Spanish Literature and Culture"
  || AdminDropSubject === "Exam 5: AP Chinese Language and Culture"
  ) { Mock5 = getText("Curveinput"); }
  
  

  
SaveFactor ("Exam 1: ", "", Mock1, "Comparative Government and Politics", "Comparative Government and Politics" );
SaveFactor ("Exam 2: ", "", Mock2, "Comparative Government and Politics", "Comparative Government and Politics" );
SaveFactor ("Exam 3: ", "", Mock3, "Comparative Government and Politics", "Comparative Government and Politics" );
SaveFactor ("Exam 4: ", "", Mock4, "Comparative Government and Politics", "Comparative Government and Politics" );
SaveFactor ("Exam 5: ", "", Mock5, "Comparative Government and Politics", "Comparative Government and Politics" );



SaveFactor ("Exam 1: ", "", Mock1, "European History", "European History" );
SaveFactor ("Exam 2: ", "", Mock2, "European History", "European History" );
SaveFactor ("Exam 3: ", "", Mock3, "European History", "European History" );
SaveFactor ("Exam 4: ", "", Mock4, "European History", "European History" );
SaveFactor ("Exam 5: ", "", Mock5, "European History", "European History" );



SaveFactor ("Exam 1: ", "", Mock1, "Human Geography", "Human Geography" );
SaveFactor ("Exam 2: ", "", Mock2, "Human Geography", "Human Geography" );
SaveFactor ("Exam 3: ", "", Mock3, "Human Geography", "Human Geography" );
SaveFactor ("Exam 4: ", "", Mock4, "Human Geography", "Human Geography" );
SaveFactor ("Exam 5: ", "", Mock5, "Human Geography", "Human Geography" );




SaveFactor ("Exam 1: ", "", Mock1, "United States Government and Politics", "United States Government and Politics" );
SaveFactor ("Exam 2: ", "", Mock2, "United States Government and Politics", "United States Government and Politics" );
SaveFactor ("Exam 3: ", "", Mock3, "United States Government and Politics", "United States Government and Politics" );
SaveFactor ("Exam 4: ", "", Mock4, "United States Government and Politics", "United States Government and Politics" );
SaveFactor ("Exam 5: ", "", Mock5, "United States Government and Politics", "United States Government and Politics" );


SaveFactor ("Exam 1: ", "", Mock1, "United States History", "United States History" );
SaveFactor ("Exam 2: ", "", Mock2, "United States History", "United States History" );
SaveFactor ("Exam 3: ", "", Mock3, "United States History", "United States History" );
SaveFactor ("Exam 4: ", "", Mock4, "United States History", "United States History" );
SaveFactor ("Exam 5: ", "", Mock5, "United States History", "United States History" );


SaveFactor ("Exam 1: ", "", Mock1, "World History: Modern", "World History: Modern" );
SaveFactor ("Exam 2: ", "", Mock2, "World History: Modern", "World History: Modern" );
SaveFactor ("Exam 3: ", "", Mock3, "World History: Modern", "World History: Modern" );
SaveFactor ("Exam 4: ", "", Mock4, "World History: Modern", "World History: Modern" );
SaveFactor ("Exam 5: ", "", Mock5, "World History: Modern", "World History: Modern" );





SaveFactor ("Exam 1: ", "", Mock1, "2-D Art and Design", "2-D Art and Design" );
SaveFactor ("Exam 2: ", "", Mock2, "2-D Art and Design", "2-D Art and Design" );
SaveFactor ("Exam 3: ", "", Mock3, "2-D Art and Design", "2-D Art and Design" );
SaveFactor ("Exam 4: ", "", Mock4, "2-D Art and Design", "2-D Art and Design" );
SaveFactor ("Exam 5: ", "", Mock5, "2-D Art and Design", "2-D Art and Design" );



SaveFactor ("Exam 1: ", "", Mock1, "3-D Art and Design", "3-D Art and Design" );
SaveFactor ("Exam 2: ", "", Mock2, "3-D Art and Design", "3-D Art and Design" );
SaveFactor ("Exam 3: ", "", Mock3, "3-D Art and Design", "3-D Art and Design" );
SaveFactor ("Exam 4: ", "", Mock4, "3-D Art and Design", "3-D Art and Design" );
SaveFactor ("Exam 5: ", "", Mock5, "3-D Art and Design", "3-D Art and Design" );



SaveFactor ("Exam 1: ", "", Mock1, "Drawing", "Drawing" );
SaveFactor ("Exam 2: ", "", Mock2, "Drawing", "Drawing" );
SaveFactor ("Exam 3: ", "", Mock3, "Drawing", "Drawing" );
SaveFactor ("Exam 4: ", "", Mock4, "Drawing", "Drawing" );
SaveFactor ("Exam 5: ", "", Mock5, "Drawing", "Drawing" );



SaveFactor ("Exam 1: ", "", Mock1, "Art History", "Art History" );
SaveFactor ("Exam 2: ", "", Mock2, "Art History", "Art History" );
SaveFactor ("Exam 3: ", "", Mock3, "Art History", "Art History" );
SaveFactor ("Exam 4: ", "", Mock4, "Art History", "Art History" );
SaveFactor ("Exam 5: ", "", Mock5, "Art History", "Art History" );



SaveFactor ("Exam 1: ", "", Mock1, "Music Theory", "Music Theory" );
SaveFactor ("Exam 2: ", "", Mock2, "Music Theory", "Music Theory" );
SaveFactor ("Exam 3: ", "", Mock3, "Music Theory", "Music Theory" );
SaveFactor ("Exam 4: ", "", Mock4, "Music Theory", "Music Theory" );
SaveFactor ("Exam 5: ", "", Mock5, "Music Theory", "Music Theory" );



SaveFactor ("Exam 1: ", "", Mock1, "English Literature and Composition", "English Literature and Composition" );
SaveFactor ("Exam 2: ", "", Mock2, "English Literature and Composition", "English Literature and Composition" );
SaveFactor ("Exam 3: ", "", Mock3, "English Literature and Composition", "English Literature and Composition" );
SaveFactor ("Exam 4: ", "", Mock4, "English Literature and Composition", "English Literature and Composition" );
SaveFactor ("Exam 5: ", "", Mock5, "English Literature and Composition", "English Literature and Composition" );




SaveFactor ("Exam 1: ", "", Mock1, "Physics 2: Algebra-Based", "Physics 2: Algebra-Based" );
SaveFactor ("Exam 2: ", "", Mock2, "Physics 2: Algebra-Based", "Physics 2: Algebra-Based" );
SaveFactor ("Exam 3: ", "", Mock3, "Physics 2: Algebra-Based", "Physics 2: Algebra-Based" );
SaveFactor ("Exam 4: ", "", Mock4, "Physics 2: Algebra-Based", "Physics 2: Algebra-Based" );
SaveFactor ("Exam 5: ", "", Mock5, "Physics 2: Algebra-Based", "Physics 2: Algebra-Based" );





SaveFactor ("Exam 1: ", "", Mock1, "Physics C: Electricity and Magnetism", "Physics C: Electricity and Magnetism" );
SaveFactor ("Exam 2: ", "", Mock2, "Physics C: Electricity and Magnetism", "Physics C: Electricity and Magnetism" );
SaveFactor ("Exam 3: ", "", Mock3, "Physics C: Electricity and Magnetism", "Physics C: Electricity and Magnetism" );
SaveFactor ("Exam 4: ", "", Mock4, "Physics C: Electricity and Magnetism", "Physics C: Electricity and Magnetism" );
SaveFactor ("Exam 5: ", "", Mock5, "Physics C: Electricity and Magnetism", "Physics C: Electricity and Magnetism" );


SaveFactor ("Exam 1: ", "", Mock1, "Physics C: Mechanics", "Physics C: Mechanics" );
SaveFactor ("Exam 2: ", "", Mock2, "Physics C: Mechanics", "Physics C: Mechanics" );
SaveFactor ("Exam 3: ", "", Mock3, "Physics C: Mechanics", "Physics C: Mechanics" );
SaveFactor ("Exam 4: ", "", Mock4, "Physics C: Mechanics", "Physics C: Mechanics" );
SaveFactor ("Exam 5: ", "", Mock5, "Physics C: Mechanics", "Physics C: Mechanics" );


SaveFactor ("Exam 1: ", "", Mock1, "Chinese Language and Culture", "Chinese Language and Culture" );
SaveFactor ("Exam 2: ", "", Mock2, "Chinese Language and Culture", "Chinese Language and Culture" );
SaveFactor ("Exam 3: ", "", Mock3, "Chinese Language and Culture", "Chinese Language and Culture" );
SaveFactor ("Exam 4: ", "", Mock4, "Chinese Language and Culture", "Chinese Language and Culture" );
SaveFactor ("Exam 5: ", "", Mock5, "Chinese Language and Culture", "Chinese Language and Culture" );



SaveFactor ("Exam 1: ", "", Mock1, "French Language and Culture", "French Language and Culture" );
SaveFactor ("Exam 2: ", "", Mock2, "French Language and Culture", "French Language and Culture" );
SaveFactor ("Exam 3: ", "", Mock3, "French Language and Culture", "French Language and Culture" );
SaveFactor ("Exam 4: ", "", Mock4, "French Language and Culture", "French Language and Culture" );
SaveFactor ("Exam 5: ", "", Mock5, "French Language and Culture", "French Language and Culture" );


SaveFactor ("Exam 1: ", "", Mock1, "German Language and Culture", "German Language and Culture" );
SaveFactor ("Exam 2: ", "", Mock2, "German Language and Culture", "German Language and Culture" );
SaveFactor ("Exam 3: ", "", Mock3, "German Language and Culture", "German Language and Culture" );
SaveFactor ("Exam 4: ", "", Mock4, "German Language and Culture", "German Language and Culture" );
SaveFactor ("Exam 5: ", "", Mock5, "German Language and Culture", "German Language and Culture" );


SaveFactor ("Exam 1: ", "", Mock1, "Italian Language and Culture", "Italian Language and Culture" );
SaveFactor ("Exam 2: ", "", Mock2, "Italian Language and Culture", "Italian Language and Culture" );
SaveFactor ("Exam 3: ", "", Mock3, "Italian Language and Culture", "Italian Language and Culture" );
SaveFactor ("Exam 4: ", "", Mock4, "Italian Language and Culture", "Italian Language and Culture" );
SaveFactor ("Exam 5: ", "", Mock5, "Italian Language and Culture", "Italian Language and Culture" );


SaveFactor ("Exam 1: ", "", Mock1, "Japanese Language and Culture", "Japanese Language and Culture" );
SaveFactor ("Exam 2: ", "", Mock2, "Japanese Language and Culture", "Japanese Language and Culture" );
SaveFactor ("Exam 3: ", "", Mock3, "Japanese Language and Culture", "Japanese Language and Culture" );
SaveFactor ("Exam 4: ", "", Mock4, "Japanese Language and Culture", "Japanese Language and Culture" );
SaveFactor ("Exam 5: ", "", Mock5, "Japanese Language and Culture", "Japanese Language and Culture" );


SaveFactor ("Exam 1: ", "", Mock1, "Latin", "Latin" );
SaveFactor ("Exam 2: ", "", Mock2, "Latin", "Latin" );
SaveFactor ("Exam 3: ", "", Mock3, "Latin", "Latin" );
SaveFactor ("Exam 4: ", "", Mock4, "Latin", "Latin" );
SaveFactor ("Exam 5: ", "", Mock5, "Latin", "Latin" );


SaveFactor ("Exam 1: ", "", Mock1, "Spanish Language and Culture", "Spanish Language and Culture" );
SaveFactor ("Exam 2: ", "", Mock2, "Spanish Language and Culture", "Spanish Language and Culture" );
SaveFactor ("Exam 3: ", "", Mock3, "Spanish Language and Culture", "Spanish Language and Culture" );
SaveFactor ("Exam 4: ", "", Mock4, "Spanish Language and Culture", "Spanish Language and Culture" );
SaveFactor ("Exam 5: ", "", Mock5, "Spanish Language and Culture", "Spanish Language and Culture" );


SaveFactor ("Exam 1: ", "", Mock1, "Spanish Literature and Culture", "Spanish Literature and Culture" );
SaveFactor ("Exam 2: ", "", Mock2, "Spanish Literature and Culture", "Spanish Literature and Culture" );
SaveFactor ("Exam 3: ", "", Mock3, "Spanish Literature and Culture", "Spanish Literature and Culture" );
SaveFactor ("Exam 4: ", "", Mock4, "Spanish Literature and Culture", "Spanish Literature and Culture" );
SaveFactor ("Exam 5: ", "", Mock5, "Spanish Literature and Culture", "Spanish Literature and Culture" );


SaveFactor ("Exam 1: ", "", Mock1, "Precalculus", "Precalculus" );
SaveFactor ("Exam 2: ", "", Mock2, "Precalculus", "Precalculus" );
SaveFactor ("Exam 3: ", "", Mock3, "Precalculus", "Precalculus" );
SaveFactor ("Exam 4: ", "", Mock4, "Precalculus", "Precalculus" ); 
SaveFactor ("Exam 5: ", "", Mock5, "Precalculus", "Precalculus" );

SaveFactor ("Exam 1: ", "", Mock1, "Statistics", "Statistics" );
SaveFactor ("Exam 2: ", "", Mock2, "Statistics", "Statistics" );
SaveFactor ("Exam 3: ", "", Mock3, "Statistics", "Statistics" );
SaveFactor ("Exam 4: ", "", Mock4, "Statistics", "Statistics" ); 
SaveFactor ("Exam 5: ", "", Mock5, "Statistics", "Statistics" );


SaveFactor ("Exam 1: ", "", Mock1, "Physics 1", "Physics 1" );
SaveFactor ("Exam 2: ", "", Mock2, "Physics 1", "Physics 1" );
SaveFactor ("Exam 3: ", "", Mock3, "Physics 1", "Physics 1" );
SaveFactor ("Exam 4: ", "", Mock4, "Physics 1", "Physics 1" ); 
SaveFactor ("Exam 5: ", "", Mock5, "Physics 1", "Physics 1" );


SaveFactor ("Exam 1: ", "", Mock1, "Macroeconomics", "Macroeconomics" );
SaveFactor ("Exam 2: ", "", Mock2, "Macroeconomics", "Macroeconomics" );
SaveFactor ("Exam 3: ", "", Mock3, "Macroeconomics", "Macroeconomics" );
SaveFactor ("Exam 4: ", "", Mock4, "Macroeconomics", "Macroeconomics" ); 
SaveFactor ("Exam 5: ", "", Mock5, "Macroeconomics", "Macroeconomics" );

SaveFactor ("Exam 1: ", "", Mock1, "Microeconomics", "Microeconomics" );
SaveFactor ("Exam 2: ", "", Mock2, "Microeconomics", "Microeconomics" );
SaveFactor ("Exam 3: ", "", Mock3, "Microeconomics", "Microeconomics" );
SaveFactor ("Exam 4: ", "", Mock4, "Microeconomics", "Microeconomics" ); 
SaveFactor ("Exam 5: ", "", Mock5, "Microeconomics", "Microeconomics" );


SaveFactor ("Exam 1: ", "", Mock1, "Environmental", "Environmental" );
SaveFactor ("Exam 2: ", "", Mock2, "Environmental", "Environmental" );
SaveFactor ("Exam 3: ", "", Mock3, "Environmental", "Environmental" );
SaveFactor ("Exam 4: ", "", Mock4, "Environmental", "Environmental" ); 
SaveFactor ("Exam 5: ", "", Mock5, "Environmental", "Environmental" );

SaveFactor ("Exam 1: ", "", Mock1, "English Lang", "English Language" );
SaveFactor ("Exam 2: ", "", Mock2, "English Lang", "English Language" );
SaveFactor ("Exam 3: ", "", Mock3, "English Lang", "English Language" );
SaveFactor ("Exam 4: ", "", Mock4, "English Lang", "English Language" ); 
SaveFactor ("Exam 5: ", "", Mock5, "English Lang", "English Language" );  

SaveFactor ("Exam 1: ", "", Mock1, "Chemistry", "Chemistry" );
SaveFactor ("Exam 2: ", "", Mock2, "Chemistry", "Chemistry" );
SaveFactor ("Exam 3: ", "", Mock3, "Chemistry", "Chemistry" );
SaveFactor ("Exam 4: ", "", Mock4, "Chemistry", "Chemistry" ); 
SaveFactor ("Exam 5: ", "", Mock5, "Chemistry", "Chemistry" );   
  
SaveFactor ("Exam 1: ", "", Mock1, "Psychology", "Psychology" );
SaveFactor ("Exam 2: ", "", Mock2, "Psychology", "Psychology" );
SaveFactor ("Exam 3: ", "", Mock3, "Psychology", "Psychology" );
SaveFactor ("Exam 4: ", "", Mock4, "Psychology", "Psychology" ); 
SaveFactor ("Exam 5: ", "", Mock5, "Psychology", "Psychology" ); 

SaveFactor ("Exam 1: ", "", Mock1, "CSA", "Computer Science A" );
SaveFactor ("Exam 2: ", "", Mock2, "CSA", "Computer Science A" );
SaveFactor ("Exam 3: ", "", Mock3, "CSA", "Computer Science A" );
SaveFactor ("Exam 4: ", "", Mock4, "CSA", "Computer Science A" ); 
SaveFactor ("Exam 5: ", "", Mock5, "CSA", "Computer Science A" ); 

SaveFactor ("Exam 1: ", "", Mock1, "CSP", "Computer Science Principles" );
SaveFactor ("Exam 2: ", "", Mock2, "CSP", "Computer Science Principles" );
SaveFactor ("Exam 3: ", "", Mock3, "CSP", "Computer Science Principles" );
SaveFactor ("Exam 4: ", "", Mock4, "CSP", "Computer Science Principles" ); 
SaveFactor ("Exam 5: ", "", Mock5, "CSP", "Computer Science Principles" );

SaveFactor ("Exam 1: ", "", Mock1, "Calculus AB", "Calculus AB" );
SaveFactor ("Exam 2: ", "", Mock2, "Calculus AB", "Calculus AB" );
SaveFactor ("Exam 3: ", "", Mock3, "Calculus AB", "Calculus AB" );
SaveFactor ("Exam 4: ", "", Mock4, "Calculus AB", "Calculus AB" ); 
SaveFactor ("Exam 5: ", "", Mock5, "Calculus AB", "Calculus AB" );

SaveFactor ("Exam 1: ", "", Mock1, "Calculus BC", "Calculus BC" );
SaveFactor ("Exam 2: ", "", Mock2, "Calculus BC", "Calculus BC" );
SaveFactor ("Exam 3: ", "", Mock3, "Calculus BC", "Calculus BC" );
SaveFactor ("Exam 4: ", "", Mock4, "Calculus BC", "Calculus BC" ); 
SaveFactor ("Exam 5: ", "", Mock5, "Calculus BC", "Calculus BC" );



  console.log("AdminDropSubject: " + AdminDropSubject); // Debug statement


});

onEvent("NextAdmin", "click", function () { 
  AdminDropSubject = getText("AdminDropSubject");
  for (var id=1; id<=5; id++) {
RangeMemory(id, "Seminar");
RangeMemory(id, "Comparative Government and Politics");
RangeMemory(id, "European History");
RangeMemory(id, "Human Geography");
RangeMemory(id, "United States Government and Politics");
RangeMemory(id, "United States History");
RangeMemory(id, "World History: Modern");
RangeMemory(id, "2-D Art and Design");
RangeMemory(id, "3-D Art and Design");
RangeMemory(id, "Drawing");
RangeMemory(id, "Art History");
RangeMemory(id, "Music Theory");
RangeMemory(id, "English Literature and Composition");
RangeMemory(id, "Physics 2: Algebra-Based");
RangeMemory(id, "Physics C: Electricity and Magnetism");
RangeMemory(id, "Physics C: Mechanics");
RangeMemory(id, "Chinese Language and Culture");
RangeMemory(id, "French Language and Culture");
RangeMemory(id, "German Language and Culture");
RangeMemory(id, "Italian Language and Culture");
RangeMemory(id, "Japanese Language and Culture");
RangeMemory(id, "Latin");
RangeMemory(id, "Spanish Language and Culture");
RangeMemory(id, "Spanish Literature and Culture");
RangeMemory(id, "Psychology");
RangeMemory(id, "English Language and Composition");
RangeMemory(id, "Macroeconomics");
RangeMemory(id, "Microeconomics");
RangeMemory(id, "Calculus AB");
RangeMemory(id, "Calculus BC");
RangeMemory(id, "Computer Science A");
RangeMemory(id, "Computer Science Principles");
RangeMemory(id, "Precalculus");
RangeMemory(id, "Statistics");
RangeMemory(id, "Physics 1");
RangeMemory(id, "Environmental Science");
RangeMemory(id, "Chemistry");
RangeMemory(id, "Biology");
}
  setScreen("Admin2");
});

onEvent("BackAdmin", "click", function (){
  setScreen("Admin");
});



onEvent("SaveAdmin2", "click", function () {
   showElement("LoadGif2");
  setTimeout(function () {
  hideElement("LoadGif2");
  setScreen("Admin");
  }, 6000);
AdminDropSubject = getText("AdminDropSubject");

  APMax5 = getNumber("5Max");
  APMax4 = getNumber("4Max");
  APMax3 = getNumber("3Max");
  APMax2 = getNumber("2Max");
  APMax1 = getNumber("1Max");
  
  APMin5 = getNumber("5Min");
  APMin4 = getNumber("4Min");
  APMin3 = getNumber("3Min");
  APMin2 = getNumber("2Min");
  APMin1 = getNumber("1Min");
  
  for(var i =1; i<= 5; i++) {
SaveRangeScore(i, "Seminar");
SaveRangeScore(i, "Comparative Government and Politics");
SaveRangeScore(i, "European History");
SaveRangeScore(i, "Human Geography");
SaveRangeScore(i, "United States Government and Politics");
SaveRangeScore(i, "United States History");
SaveRangeScore(i, "World History: Modern");
SaveRangeScore(i, "2-D Art and Design");
SaveRangeScore(i, "3-D Art and Design");
SaveRangeScore(i, "Drawing");
SaveRangeScore(i, "Art History");
SaveRangeScore(i, "Music Theory");
SaveRangeScore(i, "English Literature and Composition");
SaveRangeScore(i, "Physics 2: Algebra-Based");
SaveRangeScore(i, "Physics C: Electricity and Magnetism");
SaveRangeScore(i, "Physics C: Mechanics");
SaveRangeScore(i, "Chinese Language and Culture");
SaveRangeScore(i, "French Language and Culture");
SaveRangeScore(i, "German Language and Culture");
SaveRangeScore(i, "Italian Language and Culture");
SaveRangeScore(i, "Japanese Language and Culture");
SaveRangeScore(i, "Latin");
SaveRangeScore(i, "Spanish Language and Culture");
SaveRangeScore(i, "Spanish Literature and Culture");
SaveRangeScore(i, "Psychology");
SaveRangeScore(i, "English Language and Composition");
SaveRangeScore(i, "Macroeconomics");
SaveRangeScore(i, "Microeconomics");
SaveRangeScore(i, "Calculus AB");
SaveRangeScore(i, "Calculus BC");
SaveRangeScore(i, "Computer Science A");
SaveRangeScore(i, "Computer Science Principles");
SaveRangeScore(i, "Precalculus");
SaveRangeScore(i, "Statistics");
SaveRangeScore(i, "Physics 1");
SaveRangeScore(i, "Environmental Science");
SaveRangeScore(i, "Chemistry");
SaveRangeScore(i, "Biology");
  }


});

function SaveRangeScore (Curve, Subject) {
   if (AdminDropSubject === "Exam " + Curve + ": " +  "AP " + Subject) {

setTimeout(function(){setKeyValue("Exam: " + Curve + ": AP " + Subject + ": 5 Max", APMax5, function () {});}, 500);
setTimeout(function(){setKeyValue("Exam: " + Curve + ": AP " + Subject + ": 5 Min", APMin5, function () {});}, 1000);
setTimeout(function(){setKeyValue("Exam: " + Curve + ": AP " + Subject + ": 4 Max", APMax4, function () {});}, 1500);
setTimeout(function(){setKeyValue("Exam: " + Curve + ": AP " + Subject + ": 4 Min", APMin4, function () {});}, 2000);
setTimeout(function(){setKeyValue("Exam: " + Curve + ": AP " + Subject + ": 3 Max", APMax3, function () {});}, 2500);
setTimeout(function(){setKeyValue("Exam: " + Curve + ": AP " + Subject + ": 3 Min", APMin3, function () {});}, 3000);
setTimeout(function(){setKeyValue("Exam: " + Curve + ": AP " + Subject + ": 2 Max", APMax2, function () {});}, 3500);
setTimeout(function(){setKeyValue("Exam: " + Curve + ": AP " + Subject + ": 2 Min", APMin2, function () {});}, 4000);
setTimeout(function(){setKeyValue("Exam: " + Curve + ": AP " + Subject + ": 1 Max", APMax1, function () {});}, 4500);
setTimeout(function(){setKeyValue("Exam: " + Curve + ": AP " + Subject + ": 1 Min", APMin1, function () {});}, 5000);

}}




function RangeMemory(Curve, Subject) {
 if (AdminDropSubject === "Exam " + Curve + ": " +  "AP " + Subject) {
   console.log("Exam " + Curve + ": " +  "AP " + Subject);

APMax5Memory = getKeyValue("Exam: " + Curve + ": AP " + Subject + ": 5 Max", function (XAPMax5Memory) {
      APMax5Memory = XAPMax5Memory;
      console.log("Exam: " + Curve + ": AP " + Subject + ": 5 Max");
      console.log(APMax5Memory + "It is a pizza");
      
    }); 
    
APMax4Memory = getKeyValue("Exam: " + Curve + ": AP " + Subject + ": 4 Max", function (XAPMax4Memory) {
      APMax4Memory = XAPMax4Memory;
    }); 
    
APMax3Memory = getKeyValue("Exam: " + Curve + ": AP " + Subject + ": 3 Max", function (XAPMax3Memory) {
      APMax3Memory = XAPMax3Memory;
    }); 
    
APMax2Memory = getKeyValue("Exam: " + Curve + ": AP " + Subject + ": 4 Max", function (XAPMax2Memory) {
      APMax2Memory = XAPMax2Memory;
    }); 

APMax1Memory = getKeyValue("Exam: " + Curve + ": AP " + Subject + ": 1 Max", function (XAPMax1Memory) {
      APMax1Memory = XAPMax1Memory;
    }); 

APMin5Memory = getKeyValue("Exam: " + Curve + ": AP " + Subject + ": 5 Min", function (XAPMin5Memory) {
      APMin5Memory = XAPMin5Memory;
    }); 
    
APMin4Memory = getKeyValue("Exam: " + Curve + ": AP " + Subject + ": 4 Min", function (XAPMin4Memory) {
      APMin4Memory = XAPMin4Memory;
    }); 
    
APMin3Memory = getKeyValue("Exam: " + Curve + ": AP " + Subject + ": 3 Min", function (XAPMin3Memory) {
      APMin3Memory = XAPMin3Memory;
    }); 
    
APMin2Memory = getKeyValue("Exam: " + Curve + ": AP " + Subject + ": 2 Min", function (XAPMin2Memory) {
      APMin2Memory = XAPMin2Memory;
    }); 
    
APMin1Memory = getKeyValue("Exam: " + Curve + ": AP " + Subject + ": 1 Min", function (XAPMin1Memory) {
      APMin1Memory = XAPMin1Memory;
    }); 


}

  
}

onEvent("Latest2", "click", function () {

 AdminCheckRange();

}); 


function SaveFactor (Curve, Oldest, MockExam, Subject, Subject2) {
   if (AdminDropSubject === Curve +  Oldest + "AP " + Subject2) {

setTimeout(function(){setKeyValue(Curve + "AP " + Subject +  ": MCQ", Factor1, function () {});}, 500);
setTimeout(function(){setKeyValue(Curve + "AP " + Subject + ": FRQ 1", Factor2, function () {});}, 1000);
setTimeout(function(){setKeyValue(Curve + "AP " + Subject +  ": FRQ 2", Factor3, function () {});}, 1500);
setTimeout(function(){setKeyValue(Curve + "AP " + Subject + ": FRQ 3", Factor4, function () {});}, 2000);
setTimeout(function(){setKeyValue(Curve + "AP " + Subject + ": FRQ 4", Factor5, function () {});}, 2500);
setTimeout(function(){setKeyValue(Curve + "AP " + Subject + ": FRQ 5", Factor6, function () {});},3000);
setTimeout(function(){setKeyValue(Curve + "AP " + Subject + ": FRQ 6", Factor7, function () {});}, 3500);
setTimeout(function(){setKeyValue(Curve + "AP " + Subject + ": MCQ Max", Max1, function () {});}, 4000);
setTimeout(function(){setKeyValue(Curve + "AP " + Subject + ": FRQ 1 Max", Max2, function () {});}, 4500);
setTimeout(function(){setKeyValue(Curve + "AP " + Subject + ": FRQ 2 Max", Max3, function () {});}, 5000);
setTimeout(function(){setKeyValue(Curve + "AP " + Subject + ": FRQ 3 Max", Max4, function () {});}, 5500);
setTimeout(function(){setKeyValue(Curve + "AP " + Subject + ": FRQ 4 Max", Max5, function () {});}, 6000);
setTimeout(function(){setKeyValue(Curve + "AP " + Subject + ": FRQ 5 Max", Max6, function () {});}, 6500);
setTimeout(function(){setKeyValue(Curve + "AP " + Subject + ": FRQ 6 Max", Max7, function () {});}, 7000);
setTimeout(function(){setKeyValue(Curve + "AP " + Subject + ": Mock", MockExam, function () {});}, 7500);

} }

onEvent("BackServices", "click", function () {
  setScreen("HomeWelcome");
});

onEvent("SignOut", "click", function () {
  setScreen("HomeWelcome");
  hideElement("AdminProgram");
  hideElement("ChangeButton");
  hideElement("SignOut");
  setText("Email", "");
  setText("Pass", "");
     UserName = getKeyValue("Username", function (UserNameKey) {
       UserName = UserNameKey;  });   
       PassWord = getKeyValue("Password",  function (PassWordKey) {
         PassWord = PassWordKey; });
});

onEvent("AdminPage", "click", function () {
 
  setScreen("MockASK");
});


onEvent("EditMockValues", "click", function () {
  setText("AdminDropSubject", "");
  for (var i =1; i <= 7; i++) {
    setText("Factor" + i, "");
    setText("Max" + i, "");
  }
  setText("Curveinput", "");
  setScreen("Admin");
});

onEvent("ScalingSystem", "click", function () {
  setScreen("MOCK60");
  MocksResults5 = getKeyValue("MockResult5", function (MOCKResults5) {
    MocksResults5 = MOCKResults5;
});
MocksResults4 = getKeyValue("MockResult4", function (MOCKResults4) {
    MocksResults4 = MOCKResults4;
});
MocksResults3 = getKeyValue("MockResult3", function (MOCKResults3) {
    MocksResults3 = MOCKResults3;
});
MocksResults2 = getKeyValue("MockResult2", function (MOCKResults2) {
    MocksResults2 = MOCKResults2;
});
MocksResults1 = getKeyValue("MockResult1", function (MOCKResults1) {
    MocksResults1 = MOCKResults1;
});
  
});

onEvent("Download60", "click", function () {
  setNumber("Result5", MocksResults5);
  setNumber("Result4", MocksResults4);
  setNumber("Result3", MocksResults3);
  setNumber("Result2", MocksResults2);
  setNumber("Result1", MocksResults1);
});

onEvent("Home60", "click", function () {
  setScreen("MockASK");
});

onEvent("Remove60", "click", function () {
  setText("Result5", "");
  setText("Result4", "");
  setText("Result3", "");
  setText("Result2", "");
  setText("Result1", "");
});

var Theme;
  
onEvent("SettingsBack", "click", function () {
  setScreen("Services");
  
});

onEvent("Demo", "click", function () {
  open("https://files.fm/f/jpxhqyxhh7");
  
});
  
  
onEvent("HomeMain", "click", function () {
  setScreen("Services");
} ); 
  
  

var SubjectNumber;







onEvent("ResetNORMAL", "click", function () {

  setScreen("Services");

  });

onEvent("APcalc", "click", function () {
  setScreen("APUnitTestCalc");
  Max5UnitTest2 = getKeyValue("Max5UnitTest", function (Max5UnitTests) {
    Max5UnitTest2 = Max5UnitTests;
});
Min5UnitTest2 = getKeyValue("Min5UnitTest", function (Min5UnitTests) {
    Min5UnitTest2 = Min5UnitTests;
});
Max4UnitTest2 = getKeyValue("Max4UnitTest", function (Max4UnitTests) {
    Max4UnitTest2 = Max4UnitTests;
});
Min4UnitTest2 = getKeyValue("Min4UnitTest", function (Min4UnitTests) {
    Min4UnitTest2 = Min4UnitTests;
});
Max3UnitTest2 = getKeyValue("Max3UnitTest", function (Max3UnitTests) {
    Max3UnitTest2 = Max3UnitTests;
});
Min3UnitTest2 = getKeyValue("Min3UnitTest", function (Min3UnitTests) {
    Min3UnitTest2 = Min3UnitTests;
});
Max2UnitTest2 = getKeyValue("Max2UnitTest", function (Max2UnitTests) {
    Max2UnitTest2 = Max2UnitTests;
});
Min2UnitTest2 = getKeyValue("Min2UnitTest", function (Min2UnitTests) {
    Min2UnitTest2 = Min2UnitTests;
});
Max1UnitTest2 = getKeyValue("Max1UnitTest", function (Max1UnitTests) {
    Max1UnitTest2 = Max1UnitTests;
});
Min1UnitTest2 = getKeyValue("Min1UnitTest", function (Min1UnitTests) {
    Min1UnitTest2 = Min1UnitTests;
});

Score5Unit2 = getKeyValue("Score5Unit", function (Score5Units2) {
    Score5Unit2 = Score5Units2;
});

Score5Unit2 = getKeyValue("Score5Unit", function (Score5Units2) {
    Score5Unit2 = Score5Units2;
});
Score4Unit2 = getKeyValue("Score4Unit", function (Score4Units2) {
    Score4Unit2 = Score4Units2;
});
Score3Unit2 = getKeyValue("Score3Unit", function (Score3Units2) {
    Score3Unit2 = Score3Units2;
});
Score2Unit2 = getKeyValue("Score2Unit", function (Score2Units2) {
    Score2Unit2 = Score2Units2;
});
Score1Unit2 = getKeyValue("Score1Unit", function (Score1Units2) {
    Score1Unit2 = Score1Units2;
});
});

onEvent("CC1", "click", function () {
  setScreen("APUnitTestCalc");
});

onEvent("CC2", "click", function () {
  setScreen("APUnitTestCalc");
});

onEvent("CC3", "click", function () {
  setScreen("APUnitTestCalc");
});


// --------------------------------Service 1 GPA -----------\\
setStyle("Start", "font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: bold; color: #fff;");
setText("PGrade", "");
setText("SubjectChoose", "");
setText("SubjectChooseAPPortfolio", "");



//Arrays
var SubjectName = [];
var Weight = [];
var Type = [];
var GradeNum = [];
var Grade = [];

onEvent("Data1", "keyup", function(event) {
    if (event.key === "Right" && SubjectName.length > 8) {
        setScreen("Data2");
        setParent("CalculateData1", "Data2");
        setParent("DeleteButton", "Data2");
     
    }
});

onEvent("Data2", "keyup", function(event) {
    if (event.key === "Right" && SubjectName.length > 16) {
        setScreen("Data3");
        setParent("CalculateData1", "Data3");
        setParent("DeleteButton", "Data3");
        
    }
});

onEvent("Data3", "keyup", function(event) {
    if (event.key === "Right" && SubjectName.length > 24) {
        setScreen("Data4");
        setParent("CalculateData1", "Data4");
        setParent("DeleteButton", "Data4");
        
    }
});

onEvent("Main", "keyup", function(event) {
    if (event.key === "Right" && getText("PGrade") != "") {
        
    var PGrade = getText("PGrade");
  if (PGrade === "Grade 9: Freshmen"){
    setScreen("9Main");
    StudentGrade = 9;
  }
  if (PGrade === "Grade 10: Sophomore"){
    setScreen("10Main");
    StudentGrade = 10;
  }
  if (PGrade === "Grade 11: Juniors"){
    setScreen("11Main");
    StudentGrade = 11;
  }
  if (PGrade === "Grade 12: Seniors"){
    setScreen("12Main");
    StudentGrade = 12;
  }
    }
});

onEvent("Data1", "keyup", function(event) {
    if (event.key === "Left" && GPAAPPDefine ===1) {
        setScreen("ScreenChooseField");
        setParent("CalculateData1", "Data1");
        setParent("DeleteButton", "Data1");
     
    }
});

onEvent("Data4", "keyup", function(event) {
    if (event.key === "Left") {
        setScreen("Data3");
        setParent("CalculateData1", "Data3");
        setParent("DeleteButton", "Data3");
        
    }
});

onEvent("Data3", "keyup", function(event) {
    if (event.key === "Left") {
        setScreen("Data2");
        setParent("CalculateData1", "Data2");
        setParent("DeleteButton", "Data2");
        
    }
});

onEvent("ScreenChooseField", "keydown", function(event) {
    if (event.key === "Right") {
        
        setParent("CalculateData1", "Data1");
        setParent("DeleteButton", "Data1");
for(var DL =0; DL < SubjectName.length; DL ++) {
setText("Score" + (DL +1), Grade[DL]);
setText("Scores" + (DL +1), GradeNum[DL]);
}  
  setScreen("PromptUser");
  displayDataOnData1();
  setText("PromptUserA", "");
  if (SubjectName.length > 8) {
   showElement("NextData1"); 
   hideElement("CalculateData1"); 
   console.log(Weight);
  } else if (SubjectName.length > 16) {
   showElement("NextData2"); 
   
   console.log(Weight);
  }
    }
});

onEvent("ScreenChooseField", "keyup", function(event) {
  if (event.key === "Left") {
	if (StudentGrade === 9) {
   setScreen("9Main");
	}
	if (StudentGrade === 10) {
   setScreen("10Main");
	}
	if (StudentGrade === 11) {
   setScreen("11Main");
	}
	if (StudentGrade === 12) {
   setScreen("12Main");
	} } });

onEvent("PromptUser", "keyup", function(event) {
    if (event.key === "Left") {
        setScreen("ScreenChooseField");
        setParent("CalculateData1", "Data1");
        setParent("DeleteButton", "Data1");
    }
});

onEvent("Data2", "keyup", function(event) {
    if (event.key === "Left") {
        setScreen("Data1");
        setParent("CalculateData1", "Data1");
        setParent("DeleteButton", "Data1");
    }
});

// Variables
var 
    AddSubjectClick = 0,
    SubInfo = 1,
    Check1 = 0,
    Check2 = 0,
    Check3 = 0,
    Check4 = 0,
    finalScore = 0,
    totalWeights = 0,
    totalFinalScores = 0,
    ScoresDefine,
    Names,
    currentSubjectID;
    
  

// Calling Functions 

 setTimeout (function()  {
  setColumnText("Science", 17);
  setColumnText("English", 13);
  setColumnText("Math", 9);
  setColumnText("Performance", 4);
  setColumnText("Economic", 3);
  setColumnText("Arabic", 10);
  setColumnText("Computer", 5);
}, 1000); 

  SUpdate(1);
  SUpdate(2);
  SUpdate(3);
  SUpdate(4);
  SUpdate(5);
  SUpdate(6);
  SUpdate(7);
  SUpdate(8);
  SUpdate(9);
  SUpdate(10);
  SUpdate(11);
  SUpdate(12);
  SUpdate(13);
  SUpdate(14);
  SUpdate(15);
  SUpdate(16); 
  SUpdate(17);
  SUpdate(18);
  SUpdate(19);
  SUpdate(20); 
  SUpdate(21);
  SUpdate(22); 
  SUpdate(23); 
  SUpdate(24); 
  SUpdate(25); 
  SUpdate(26); 
  SUpdate(27);
  SUpdate(28);
  SUpdate(29);
  SUpdate(30);
  SUpdate(31);
  SUpdate(32); 
  
  ED(1);
  ED(2);
  ED(3);
  ED(4);
  ED(5);
  ED(6);
  ED(7);
  ED(8);
  ED(9);
  ED(10);
  ED(11);
  ED(12);
  ED(13);
  ED(14);
  ED(15);
  ED(16); 
  ED(17);
  ED(18);
  ED(19);
  ED(20);
  ED(21); 
  ED(22);
  ED(23);
  ED(24); 
  ED(25); 
  ED(26); 
  ED(27);
  ED(28);
  ED(29);
  ED(30);
  ED(31);
  ED(32); 
  

  hideBegin ();
  
  BackMain(9, "Main");
  BackMain(10, "Main");
  BackMain(11, "Main");
  BackMain(12, "Main");
  
  BackMain("English", "ScreenChooseField");
  BackMain("Arabic", "ScreenChooseField");
  BackMain("Math", "ScreenChooseField");
  BackMain("Economic", "ScreenChooseField");
  BackMain("Science", "ScreenChooseField");
  //BackMain("Computer", "ScreenChooseField");
  
  Shared(9);
  Shared(10);
  Shared(11);
  Shared(12);
  
  SharedLook("English");
  SharedLook("Arabic");
  SharedLook("Economic");
  SharedLook("Computer");
  SharedLook("Science");
  SharedLook("Math");
  

  
  Log ("English1", 1, "Pre-AP Course");
  Log ("English2", 1, "Pre-AP Course"); 
  Log ("English3", 1, "AP/IB Course");
  Log ("English4", 1, "Regular Course Offered By School");
  Log ("English5", 1, "Regular Course Offered By School");
  Log ("English6", 1, "Regular Course Offered By School");
  Log ("English7", 1, "Regular Course Offered By School");
  Log ("English8", 1, "Regular Course Offered By School");
  Log ("English9", 1, "Regular Course Offered By School"); 
  Log ("English10", 1, "Regular Course Offered By School"); 
  Log ("English11", 1, "Regular Course Offered By School"); 
  Log ("English12", 1, "AP/IB Course"); 
  Log ("English13", 1, "AP/IB Course"); 
  
  Log ("Arabic1", 0.5, "Regular Course Offered By School");
  Log ("Arabic2", 1, "Regular Course Offered By School");
  Log ("Arabic3", 0.5, "Regular Course Offered By School");
  Log ("Arabic4", 0.5, "Regular Course Offered By School");
  Log ("Arabic5", 0.5, "Regular Course Offered By School");
  Log ("Arabic6", 0.5, "Regular Course Offered By School");
  Log ("Arabic7", 0.5, "Regular Course Offered By School");
  Log ("Arabic8", 0.5, "Regular Course Offered By School");
  Log ("Arabic9", 0.5, "Regular Course Offered By School");
  Log ("Arabic10", 0.5, "Regular Course Offered By School");
  
  Log ("Math1", 1, "Pre-AP Course");
  Log ("Math2", 1, "Pre-AP Course");
  Log ("Math3", 1, "Pre-AP Course");
  Log ("Math4", 1, "AP/IB Course");
  Log ("Math5", 1, "AP/IB Course");
  Log ("Math6", 1, "AP/IB Course");
  Log ("Math7", 1, "Regular Course Offered By School");
  Log ("Math8", 1, "Regular Course Offered By School");
  Log ("Math9", 1, "Regular Course Offered By School");
  
  Log ("Performance1", 1, "AP/IB Course");
  Log ("Performance2", 1, "AP/IB Course");
  Log ("Performance3", 1, "Pre-AP Course"); 
  Log ("Performance4", 1, "Regular Course Offered By School");
  
  Log ("Economic1", 1, "AP/IB Course");
  Log ("Economic2", 1, "Regular Course Offered By School");
  Log ("Economic3", 1, "AP/IB Course");
  
  Log ("Science1", 1, "Pre-AP Course"); 
  Log ("Science2", 1, "Pre-AP Course");
  Log ("Science3", 1, "Regular Course Offered By School");
  Log ("Science4", 1, "Regular Course Offered By School");
  Log ("Science5", 1, "Regular Course Offered By School");
  Log ("Science6", 1, "Regular Course Offered By School");
  Log ("Science7", 1, "Regular Course Offered By School");
  Log ("Science8", 1, "Regular Course Offered By School");
  Log ("Science9", 1, "AP/IB Course");
  Log ("Science10", 1, "AP/IB Course");
  Log ("Science11", 1, "AP/IB Course");
  Log ("Science12", 1, "Regular Course Offered By School");
  Log ("Science13", 1, "Regular Course Offered By School");
  Log ("Science14", 1, "AP/IB Course");
  Log ("Science15", 1, "Regular Course Offered By School");
  Log ("Science16", 1, "AP/IB Course");
  Log ("Science17", 1, "Regular Course Offered By School");
  
  Log ("Computer1", 1, "AP/IB Course");
  Log ("Computer2", 1, "AP/IB Course");
  Log ("Computer3", 1, "Regular Course Offered By School");
  Log ("Computer4", 1, "Regular Course Offered By School"); 
  Log ("Computer5", 1, "Regular Course Offered By School");
  
  Log ("09PSubject1", 0.5, "Regular Course Offered By School");
  Log ("09PSubject2", 0.25, "Regular Course Offered By School");
  Log ("09PSubject3", 0.25, "Regular Course Offered By School");
  Log ("09PSubject4", 0.25, "Regular Course Offered By School");
  Log ("09PSubject5", 1, "Regular Course Offered By School");
  Log ("09PSubject6", 0.25, "Regular Course Offered By School");
  Log ("09PSubject7", 0.25, "Regular Course Offered By School");
  Log ("09PSubject8", 0.5, "Regular Course Offered By School");
  Log ("09PSubject9", 0.5, "Regular Course Offered By School");
  
  Log ("10PSubject1", 0.5, "Regular Course Offered By School");
  Log ("10PSubject2", 0.25, "Regular Course Offered By School");
  Log ("10PSubject3", 0.25, "Regular Course Offered By School");
  Log ("10PSubject4", 0.25, "Regular Course Offered By School");
  Log ("10PSubject5", 1, "Regular Course Offered By School");
  Log ("10PSubject6", 0.25, "Regular Course Offered By School");
  Log ("10PSubject7", 0.5, "Regular Course Offered By School");
  Log ("10PSubject8", 0.5, "Regular Course Offered By School"); 
  
  Log ("11PSubject1", 0.5, "Regular Course Offered By School");
  Log ("11PSubject2", 0.25, "Regular Course Offered By School");
  Log ("11PSubject3", 0.25, "Regular Course Offered By School");
  Log ("11PSubject4", 0.25, "Regular Course Offered By School");
  Log ("11PSubject5", 1, "Regular Course Offered By School");
  
  Log ("12PSubject1", 0.5, "Regular Course Offered By School");
  Log ("12PSubject2", 0.25, "Regular Course Offered By School");
  Log ("12PSubject3", 0.25, "Regular Course Offered By School");
  Log ("12PSubject4", 0.25, "Regular Course Offered By School");
  Log ("12PSubject5", 1, "Regular Course Offered By School");
  Log ("12PSubject6", 0.25, "Regular Course Offered By School");
  

// Loops
for (var i = 1; i <= 32; i++) {
    ScoreUpdate(i);
    ScoresUpdate(i);
    Scoring(i);
    //setText("Score" + i, "");
}


for (var Q = 1; Q <= 32; Q++) {
  hideElement("Subject" + Q);
  hideElement("Score" + Q); 
  hideElement("Scores" + Q); 
  
   (function (subjectID) {
    onEvent("Subject" + subjectID, "click", function () {

      ED(subjectID);
      currentSubjectID = subjectID;
      showElement("Type");
      showElement("Weight");
    });
  })(Q);
}



// Events

onEvent("BackMainScreenChooseField", "click", function( ) {
	if (StudentGrade === 9) {
   setScreen("9Main");
	}
	if (StudentGrade === 10) {
   setScreen("10Main");
	}
	if (StudentGrade === 11) {
   setScreen("11Main");
	}
	if (StudentGrade === 12) {
   setScreen("12Main");
	}
});


onEvent("PromptUserA", "change", function (){
  var Prompt = getText("PromptUserA"); 
  if (Prompt === "No, I found all my subjects") {
    setScreen("Data1");
  } else if (Prompt === "Yes, I need to add subjects") {
    hideElement("Delete");
    hideElement("AddSubject");
    SubjectManual();
  }Organizer(); });

onEvent("Weight", "change", function () {
  if (Check3 === 0) {
    Check3 = 1;
    showElement("Grade");
    showElement("Grade100");
    showElement("GradeQ");
    } Organizer();
      });

onEvent("Grade", "change", function () {
  setText("Grade100", "");
    if (Check3 === 0) {
        Check3 = 1;
        showElement("AddSubject");
        if (currentSubjectID) {
            //Grade[currentSubjectID - 1] = getText("Grade");
    }
      } Organizer();
         if(getText("Grade") === "") {
          hideElement("AddSubject");
        }
   });


onEvent("DoneLog", "click", function () {

for(var DL =0; DL < SubjectName.length; DL ++) {
setText("Score" + (DL +1), Grade[DL]);
setText("Scores" + (DL +1), GradeNum[DL]);
}  
  setScreen("PromptUser");
  displayDataOnData1();
  setText("PromptUserA", "");
  if (SubjectName.length > 8) {
   showElement("NextData1"); 
   hideElement("CalculateData1"); 
   console.log(Weight);
  } else if (SubjectName.length > 16) {
   showElement("NextData2"); 
   
   console.log(Weight);
  } Organizer();
    });
var StudentGrade;

onEvent("PGrade", "change", function () {
  showElement("Instructions");
  showElement("Start");
});

onEvent("Start","click", function () {
  var PGrade = getText("PGrade");
  if (PGrade === "Grade 9: Freshmen"){
    setScreen("9Main");
    StudentGrade = 9;
  }
  if (PGrade === "Grade 10: Sophomore"){
    setScreen("10Main");
    StudentGrade = 10;
  }
  if (PGrade === "Grade 11: Juniors"){
    setScreen("11Main");
    StudentGrade = 11;
  }
  if (PGrade === "Grade 12: Seniors"){
    setScreen("12Main");
    StudentGrade = 12;
  }
    });
    
  onEvent("EnglishNext", "click", function( ) {
      setScreen("EnglishSub2"); Organizer();
    });
    
    onEvent("BackEnglishSub2", "click", function( ) {
      setScreen("English"); Organizer();
    });
    
  onEvent("ScienceNext1", "click", function( ) {
      setScreen("ScienceSub2"); Organizer();
    }); 
    
  onEvent("BackScienceSub2", "click", function( ) {
      setScreen("Science"); Organizer();
    }); 
    
  onEvent("BackComputer", "click", function( ) {
      setScreen("ScreenChooseField"); Organizer();
    }); 
    
  onEvent("BackFromData1", "click", function( ) {
      setScreen("ScreenChooseField"); Organizer();
    }); 
    

onEvent("NameofSubject", "input", function () {
  if (Check1 === 0) {
    showElement("TypeQ");
    showElement("Type");
    Check1 = 1;
  }
  
  if (Theme === 1) {
  setProperty("AddSubject", "background-color", rgb(71, 71, 193));  
  setProperty("Save", "background-color", rgb(71, 71, 193));  
  } else if (Theme === 2) {
    setProperty("AddSubject", "background-color", rgb(71, 71, 193));
  } else if (Theme === 3) {
    setProperty("AddSubject", "background-color", rgb(92, 92, 92));
  } else {
    setProperty("AddSubject", "background-color", "#000");
    setProperty("AddSubject", "text-color", "#fff");
    setProperty("Save", "text-color", "#fff");
    setProperty("Save", "background-color", "#000");
  }
  
  setText("AddSubject", "Add Subject");
  setText("Save", "Save");
    });


onEvent("Delete", "click", function (){
   setParent("DeleteButton", "Data1");
 setParent("CalculateData1", "Data1");
  Organizer();
  SubInfo = SubjectName.length;
  
  if(SubInfo === 0) {
    SubInfo =1;
   
  }
 
  AddSubjectClick--;

 for (var i = 0; i < SubjectName.length; i++) {
   if(NamesBefore === SubjectName [i]) {
     removeItem(SubjectName, i);
     removeItem(Grade, i);
     removeItem(Type, i);
     removeItem(Weight, i);
     removeItem(GradeNum, i);
      setText("Score" + (i+1), "A+" );
     setScreen("Data1");
     
     
     for (var D = 0; D < SubjectName.length; D++) {
       setText("Subject" + (D + 1), SubjectName [D]);
       setText("Score" + (D + 1), Grade [D]);
       setText("Scores" + (D + 1), GradeNum [D]);
       hideElement("Subject" + (SubjectName.length + 1));
       hideElement("Score" + (SubjectName.length + 1));
       hideElement("Scores" + (SubjectName.length + 1));
     }
    console.log(Grade);
    console.log(Type);
    console.log(Weight);
    console.log(SubjectName);
   }
    if (SubjectName.length === 0){
         hideElement("Subject1");
         hideElement("Score1");
         hideElement("Scores1");
         SubjectManual(); Organizer ();
  hideElement("AddSubject");
       }
  }
  if (SubjectName.length < 9) {
   
   hideElement("NextData1");
   showElement("CalculateData1");
   console.log(Weight);
  } else if (SubjectName.length < 17) {
   showElement("NextData2"); 
   
   console.log(Weight);
  }
   Organizer();
   Organizer();
});

onEvent("Type", "change", function () {
  if (Check2 === 0) {
    showElement("WeightQ");
    showElement("Weight");
    Check2 = 1;
  }
    });

onEvent("Weight", "change", function () {
  if (Check3 === 0) {
    Check3 = 1;
    showElement("Grade");
    showElement("Grade100");
    showElement("GradeQ");
    }
      });

onEvent("Grade", "change", function () {
  setText("Grade100", "");
    if (Check3 === 0) {
        Check3 = 1;
        showElement("AddSubject");
        if (currentSubjectID) {
            //Grade[currentSubjectID - 1] = getText("Grade");
    }
      }  if(getText("Grade") === "") {
          hideElement("AddSubject");
        }
        });

onEvent("AddSubject", "click", function () {
  
  setTimeout(function() {
  //setScreen("Data1");
  Organizer();
  var nameCheck = getText("NameofSubject").trim();
  var nameAlreadyUsed = false;

  for (var i = 0; i < SubjectName.length && !nameAlreadyUsed; i++) {
    if (nameCheck === SubjectName[i].trim()) {
      nameAlreadyUsed = true;
  setText("AddSubject", "Subject name already taken!");
      setProperty("AddSubject", "background-color", "yellow");
      setProperty("AddSubject", "text-color", "#000");
  
    }
  }

  if (!nameAlreadyUsed && getText("Grade") != "" ) {
    
    hideElement("AddSubject");
    AddSubjectClick++;
    SubInfo++;
    
    Check1 = 0;
    Check2 = 0;
    Check3 = 0;
    Check4 = 0;
    appendItem(SubjectName, getText("NameofSubject"));
    appendItem(Weight, getNumber("Weight"));
    appendItem(Type, getText("Type"));
    appendItem(Grade, getText("Grade"));
    
    
    if(getText("Grade100") != "") {
    appendItem(GradeNum, getText("Grade100")); }
    else {
    appendItem(GradeNum, "" ); }  
    
    setText("SubjectUser", "Course " + SubInfo);
    if (AddSubjectClick <= 32) {
      showElement("Subject" + (SubInfo - 1));
      showElement("Score" + (SubInfo - 1));
      showElement("Scores" + (SubInfo - 1));
      setText("Subject" + (SubInfo - 1), SubjectName[SubInfo - 2]);
      setText("Score" + (SubInfo-1), getText("Grade"));
      setText("Scores" + (SubInfo-1), GradeNum[SubInfo - 2]);
    }

    if (AddSubjectClick > 8) {
      showElement("NextData1");
      hideElement("CalculateData1");
      Organizer ();
    }
Organizer ();
    if (AddSubjectClick > 16) {
      showElement("NextData2");
      
      Organizer ();
    }

    if (AddSubjectClick === 32) {
      hideElement("AddSubject");
      setScreen("Data1");
      hideElement("BackFromData1");
      Organizer ();
    }
Organizer ();
    hidden();
    setText("NameofSubject", "");
    setText("Weight", "");
    setText("Grade", "");
    setText("Type", "");
    setText("Grade100", "");
  }
  
}, 0);
}); Organizer ();

onEvent("Next", "click", function () {
  setScreen("Data1");
  Check1 = 0;
  Check2 = 0;
  Check3 = 0;
  Check4 = 0;
    }); Organizer ();

onEvent("NextData1", "click", function () {
  setParent("DeleteButton", "Data2");
 setParent("CalculateData1", "Data2");
  setScreen("Data2");
 
  console.log(AddSubjectClick);
  if (SubjectName.length > 8) {
   showElement("NextData1"); 
   
   console.log(Weight);
  } else if (SubjectName.length > 16) {
   showElement("NextData2"); 
   
   console.log(Weight);
  }
    }); Organizer ();
    
onEvent("NextData2", "click", function () {
   setParent("CalculateData1", "Data3");
  setParent("DeleteButton", "Data3");
  setScreen("Data3"); Organizer ();
  console.log(AddSubjectClick);
  if (SubjectName.length > 8) {
   showElement("NextData1"); 

   console.log(Weight);
  } else if (SubjectName.length > 16) {
   showElement("NextData2"); 
   
   console.log(Weight);
  } Organizer ();
    }); Organizer ();
    
  onEvent("NextData3", "click", function () {
   setParent("CalculateData1", "Data4");
  setParent("DeleteButton", "Data4");
  setScreen("Data4"); Organizer ();
  console.log(AddSubjectClick);
  if (SubjectName.length > 8) {
   showElement("NextData1"); 

   console.log(Weight);
  } else if (SubjectName.length > 16) {
   showElement("NextData2"); 
   
   console.log(Weight);
  } Organizer ();
    }); Organizer ();


onEvent("BackData2", "click", function () {
   setParent("CalculateData1", "Data1");
  setParent("DeleteButton", "Data1");
  setScreen("Data1");
  if (SubjectName.length > 8) {
   showElement("NextData1"); 
  
   console.log(Weight);
  } else if (SubjectName.length > 16) {
   showElement("NextData2"); 
   
   console.log(Weight);
  } Organizer ();
    }); Organizer ();
    
onEvent("BackData3", "click", function () {
  setParent("DeleteButton", "Data2");
  setParent("CalculateData1", "Data2");
  setScreen("Data2");
  if (SubjectName.length > 8) {
   showElement("NextData1"); 
  
   console.log(Weight);
  } else if (SubjectName.length > 16) {
   showElement("NextData2"); 
   
   console.log(Weight); Organizer ();
  }
    });
    
onEvent("BackData4", "click", function () {
  setParent("DeleteButton", "Data3");
  setParent("CalculateData1", "Data3");
  setScreen("Data3");
  if (SubjectName.length > 8) {
   showElement("NextData1"); 
  
   console.log(Weight);
  } else if (SubjectName.length > 16) {
   showElement("NextData2"); 
   
   console.log(Weight); Organizer ();
  }
    });
    
    Organizer ();
onEvent("Exit", "click", function () {
  setScreen("ScreenChooseField");
    });Organizer ();

var sum;
onEvent("CalculateData1", "click", function () {
  sum = 0;
  
  Calculate(5, 4.7, 4.3, 4, 3.7, 3.3, 3, 2.7, 2.3, 2, 1, "AP/IB Course");      
  Calculate(4.5, 4.2, 3.8, 3.5, 3.2, 2.8, 2.5, 2.2, 1.8, 1.5, 0, "Pre-AP Course");
  Calculate(4, 3.7, 3.3, 3, 2.7, 2.3, 2, 1.7, 1.3, 1, 0, "Regular Course Offered By School");
  finalScore = 0,
  totalWeights = 0, 
  setText("TotalPointsGained", totalFinalScores);
  totalFinalScores = 0; 
  setScreen("Final");
  Organizer ();
  
  for (var i = 0; i < Weight.length; i++) {
     sum += Weight[i];
}
  setText("CreditDisplay", sum);
  
                                });


Organizer ();
    
  onEvent("HomeMain", "click", function( ) {
  	setScreen("Services");
    });
    
   
onEvent("HomeSubject", "click", function( ) {
  setScreen("Services");
    }); 
    
    
    
 
    
   


onEvent("BackFinalLast", "click", function( ) {
	setScreen("Data1"); Organizer ();
	setParent("CalculateData1", "Data1");
	setParent("DeleteButton", "Data1");
});

onEvent("Reset", "click", function () {

  setScreen("Main");    
  
  });

  
  
   setParent("DeleteButton", "Data1");
 setParent("CalculateData1", "Data1");
  finalScore = 0; Organizer ();
  totalWeights = 0;
  totalFinalScores = 0;
  console.log(Grade);
  console.log(Type);
  console.log(Weight);
  console.log(SubjectName);
  Type.length = 0;
  Weight.length = 0;
  SubjectName.length = 0;
  Grade.length = 0;
  GradeNum.length =0;

  for (var i = 1; i <= 32; i++) {
    setText("Subject" + i, "");
    setText("Score" + i, "A+");
    hideElement("Subject" + i);
    hideElement("Score" + i);
    hideElement("Scores" + i); Organizer ();
  }
Organizer ();
  SubInfo = 1;
  
  setText("NameofSubject", "");
  setText("Type", "");
  setNumber("Weight", "");
  setText("Grade", ""); Organizer ();


  
  

onEvent("AddingSubject", "click", function () {
  SubjectManual(); Organizer ();
  hideElement("AddSubject");
  setText("Grade100", "");
});

onEvent("AddingSubject1", "click", function () {
  SubjectManual(); Organizer ();
  hideElement("AddSubject");
});

onEvent("AddingSubject2", "click", function () {
  SubjectManual(); Organizer ();
  hideElement("AddSubject");
});

onEvent("AddingSubject3", "click", function () {
  SubjectManual(); Organizer ();
  hideElement("AddSubject");
});
var DeleteTargT =0;




onEvent("Save", "click", function () {
    setParent("DeleteButton", "Data1");
    setParent("CalculateData1", "Data1");

    var nameCheck2 = getText("NameofSubject").trim();
    var nameAlreadyUsed2 = false;

    for (var i = 0; i < SubjectName.length && !nameAlreadyUsed2; i++) {
        if (nameCheck2 === SubjectName[i].trim() && nameCheck2 !== SubjectName[currentIndex].trim()) {
            nameAlreadyUsed2 = true;
            setText("Save", "Subject name already taken!");
            setProperty("Save", "background-color", "yellow");
            setProperty("Save", "text-color", "#000");
        }
    }

    if (!nameAlreadyUsed2) {
        SavingData();
        Organizer();
    }
});

var DeleteButton = 0;

onEvent("DeleteButton", "click", function() {

 DeleteButton ++;
  if (DeleteButton % 2 == 1) {
    for (var i = 1; i <= 32; i++) {
      setProperty("Subject" + i, "border-width", 2);
      setProperty("Subject" + i, "border-color", "red");
    }
    setProperty("DeleteButton", "icon-color", "red");
  } else{
    for (var O = 1; O <= 32; O++) {
      setProperty("Subject" + O, "border-width", 1);
      setProperty("Subject" + O, "border-color", "#000");
    }
    setProperty("DeleteButton", "icon-color", "white");
  }
});  



var Delete2;
// Functions   


function SavingData() {
  var Names = getText("NameofSubject");
  Organizer ();
  for (var NF = 0; NF < SubjectName.length; NF++) {
    if (SubjectName[NF] === NamesBefore) {
      removeItem(Weight, NF);
      insertItem(Weight, NF, getNumber("Weight"));

      removeItem(Type, NF);
      insertItem(Type, NF, getText("Type"));

      removeItem(Grade, NF);
      insertItem(Grade, NF, getText("Grade"));

      removeItem(SubjectName, NF);
      insertItem(SubjectName, NF, Names);

      setText("Subject" + (NF + 1), getText("NameofSubject"));
    }
  
Organizer ();
    
     
  
    // Reset checks when "AddSubject" is clicked
    Check1 = 0;
    Check2 = 0;
    Check3 = 0;
    Check4 = 0;
  
    setScreen("Data1"); 
    
    for (var i = 0; i < SubjectName.length; i++) {
      var GradeUpdate = getText("NameofSubject");
      if (GradeUpdate === SubjectName[i]) {
        setText("Score" + (i + 1), getText("Grade"));
        setText("Scores" + (i + 1), getText("Grade100"));
      }
      
}
} 
  
   console.log(Weight); console.log(Type);
      console.log(SubjectName); console.log(Grade);
}

function hidden (){
hideElement("Type"); //hideElement("AddSubject");
hideElement("Grade");
hideElement("Grade100");hideElement("Weight"); hideElement("TypeQ");
hideElement("WeightQ"); hideElement("GradeQ");
}

function hideBegin (){
hideElement("NextData1"); hideElement("Save"); hideElement("Type");
hideElement("Grade"); hideElement("Grade100");
hideElement("NextData1");
hideElement("Weight"); hideElement("AddSubject");
hideElement("TypeQ"); hideElement("WeightQ"); hideElement("GradeQ");
}

  function ResetSelection (Button) {
   if (Delete2 === getText(Button)) {
     SubjectNumber--;
     setProperty(Button, "background-color", "white");
     setProperty(Button, "text-color", "#000");
   } }

function GradeLetterValue (Num1, Num2, Num3, Num4, Num5, Num6, Num7, Num8, Num9, 
Num10, Num11, weight, score) {
  if (score === "A" || score === "A+") {
    return weight * Num1;
  } else if (score === "A-") {
    return weight * Num2;
  } else if (score === "B+") {
    return weight * Num3;
  } else if (score === "B") {
    return weight * Num4;
  } else if (score === "B-") {
    return weight * Num5;
  } else if (score === "C+") {
    return weight * Num6;
  } else if (score === "C") {
    return weight * Num7;
  } else if (score === "C-") {
    return weight * Num8;
  } else if (score === "D+") {
    return weight * Num9;
  } else if (score === "D" || score === "D-") {
    return weight * Num10;
  } else if (score === "F") {
    return weight * Num11;
  } else {
    return "Invalid";
  }
}


function Calculate(GradeScale1, GradeScale2, GradeScale3, GradeScale4, GradeScale5, GradeScale6, 
                    GradeScale7, GradeScale8, GradeScale9, GradeScale10, GradeScale11, SubjectType) {
    console.log(Grade);
    console.log(Type);
    console.log(Weight);
    console.log(SubjectName);
    console.log(GradeNum);

    for (var i = 0; i < Type.length; i++) {

        Type[i];
        Weight[i];
        Grade[i];
        if (Type[i] === SubjectType) {
            finalScore = GradeLetterValue(GradeScale1, GradeScale2, GradeScale3, GradeScale4,
            GradeScale5, GradeScale6, GradeScale7, GradeScale8, GradeScale9,
            GradeScale10, GradeScale11, Weight[i], Grade[i]);

            totalWeights += Weight[i];
            totalFinalScores += finalScore;
        }
    }
    console.log(totalFinalScores);
    var GPA = totalFinalScores / totalWeights;
    GPA = GPA.toFixed(2);
    setText("GPAPoint", GPA);

    var Percent = GPA * 20;
    var Final = Percent + 20;
    Final = Final.toFixed(2);
    Organizer();
    setText("PercentPoint", Final + "%");
}
  
  
  Organizer ();
function setColumnText(subject, maxCount) {
var subjectColumn = getColumn("Subjects", subject);
  for (var i = 0; i < subjectColumn.length && i < maxCount; i++) {
    setText(subject + (i + 1), subjectColumn[i]);
  } Organizer ();
}

onEvent("RefreshS", "click", function () {
  
  setColumnText("Science", 17);
  setColumnText("English", 13);
  setColumnText("Math", 9);
  setColumnText("Performance", 4);
  setColumnText("Economic", 3);
  setColumnText("Arabic", 10);
  setColumnText("Computer", 5);

});

function SUpdate(index) {
  onEvent("Scores" + index, "input", function () {
    var scoresInput = getText("Scores" + index).trim(); // Trim whitespace from input

    // Check if input is empty or contains invalid characters
    if (scoresInput === "" || isNaN(Number(scoresInput))) {
      setText("Score" + index, "A+"); // Set default grade
    } else {
      var ScoresDefine = getNumber("Scores" + index);

      if (ScoresDefine >= 97 && ScoresDefine <= 100) {
        setText("Score" + index, "A+");
      } else if (ScoresDefine >= 93 && ScoresDefine < 97) {
        setText("Score" + index, "A");
      } else if (ScoresDefine >= 90 && ScoresDefine < 93) {
        setText("Score" + index, "A-");
      } else if (ScoresDefine >= 87 && ScoresDefine < 90) {
        setText("Score" + index, "B+");
      } else if (ScoresDefine >= 83 && ScoresDefine < 87) {
        setText("Score" + index, "B");
      } else if (ScoresDefine >= 80 && ScoresDefine < 83) {
        setText("Score" + index, "B-");
      } else if (ScoresDefine >= 77 && ScoresDefine < 80) {
        setText("Score" + index, "C+");
      } else if (ScoresDefine >= 73 && ScoresDefine < 77) {
        setText("Score" + index, "C");
      } else if (ScoresDefine >= 70 && ScoresDefine < 73) {
        setText("Score" + index, "C-");
      } else if (ScoresDefine >= 67 && ScoresDefine < 70) {
        setText("Score" + index, "D+");
      } else if (ScoresDefine >= 60 && ScoresDefine < 67) {
        setText("Score" + index, "D");
      } else if (ScoresDefine < 60) {
        setText("Score" + index, "F");
      } else {
        setText("Score" + index, "Undefined Grade");
      }
    }

    // Update the Grade array
    for (var i = 1; i <= Grade.length; i++) {
      removeItem(Grade, i - 1);
      insertItem(Grade, i - 1, getText("Score" + i));
    }
  });
} Organizer (); 

function ScoreUpdate(i) {
    onEvent("Score" + i, "change", function () {
      removeItem(Grade, i-1); insertItem(Grade, i -1, getText("Score" + i));
        console.log(Grade);
        setText("Scores" + i, "");
/* finalScore =0, totalWeights=0, totalFinalScores=0;
    Calculate(5, 4.7, 4.3, 4, 3.7, 3.3, 3, 2.7, 2.3, 2, 1, "AP/IB Course");
Calculate(4, 3.7, 3.3, 3, 2.7, 2.3, 2, 1.7, 1.3, 1, 0, "Regular Course Offered By School");
Calculate(4.5, 4.2, 3.8, 3.5, 3.2, 2.8, 2.5, 2.2, 1.8, 1.5, 0, "Pre-AP Course"); 
*/


    });
    Organizer ();
}

function ScoresUpdate(i) {
    onEvent("Scores" + i, "input", function () {
      removeItem(GradeNum, i-1); insertItem(GradeNum, i -1, getText("Scores" + i));
        console.log(Grade);
        finalScore =0, totalWeights=0, totalFinalScores=0;
    Calculate(5, 4.7, 4.3, 4, 3.7, 3.3, 3, 2.7, 2.3, 2, 1, "AP/IB Course");
Calculate(4, 3.7, 3.3, 3, 2.7, 2.3, 2, 1.7, 1.3, 1, 0, "Regular Course Offered By School");
Calculate(4.5, 4.2, 3.8, 3.5, 3.2, 2.8, 2.5, 2.2, 1.8, 1.5, 0, "Pre-AP Course");


    });
    Organizer ();
}

function BackMain (ScreenGrade, Screen){
onEvent("BackMain" + ScreenGrade, "click", function (){
  setScreen(Screen);
});
Organizer ();
}

function Scoring(SubjectNumberNo) {
  onEvent("Score" + SubjectNumberNo, "change", function () {
    removeItem(Grade, SubjectNumberNo - 1);
    insertItem(Grade, SubjectNumberNo - 1, getText("Score" + SubjectNumberNo));
  });
  Organizer ();
}





function Log(SubjectNo, WeightNo, TypeNo) {

      
  
  
  Organizer();
    var SubjectNumber = 0;
    onEvent(SubjectNo, "click", function () {
        SubjectNumber++;
        if (SubjectNumber % 2 == 1) {
          appendItem(SubjectName, getText(SubjectNo));
          appendItem(Weight, WeightNo); 
          appendItem(Type, TypeNo);
          appendItem(Grade, "A+");
          appendItem(GradeNum, "");
          SubInfo++;
          AddSubjectClick++;  
         
         
        } else {
          
       for (var i = 0; i < SubjectName.length; i++) {
            var RemoveItem = getText(SubjectNo);
            if (RemoveItem === SubjectName [i]) {
              setProperty(SubjectNo, "background-color", "#fff");
              setProperty(SubjectNo, "text-color", "#000");
              setProperty(SubjectNo, "border-color", "#000");
              setProperty(SubjectNo, "border-width", "2");
              removeItem(SubjectName, i);
              removeItem(Weight, i); 
              removeItem(Type, i);
              removeItem(Grade, i);
              removeItem(GradeNum, i);
              SubInfo--;
              AddSubjectClick--;  
              hideElement("Subject" + (SubjectName.length + 1));
              hideElement("Score" + (SubjectName.length + 1));
              setText("Score" + (i + 1), "A+");
              hideElement("Scores" + (SubjectName.length + 1));
         } 
              //console.log(SubjectName);
        
            } console.log(Grade);
          }
          
      if (SubjectNumber % 2 == 1 && Theme === 3) {
         setProperty(SubjectNo, "background-color", rgb(255, 102, 30));
      } else if (SubjectNumber % 2 == 1 && Theme === 2) {
      
      setProperty(SubjectNo, "background-color", rgb(71, 71, 193));
      
      } else if (SubjectNumber % 2 == 1 && Theme === 1) {
      setProperty(SubjectNo, "background-color", "red");
      }  else if (SubjectNumber % 2 == 1 && Theme === 4) {
      setProperty(SubjectNo, "background-color", "#000");
      setProperty(SubjectNo, "text-color", "#fff");
      setProperty(SubjectNo, "border-color", "yellow");
      setProperty(SubjectNo, "border-width", "1");
      }
      
          if (SubjectName.length === 32) {
            displayDataOnData1();
            setScreen("Data1");
            
          }
             
       Organizer (); 
    });
    
    
onEvent("Reset", "click", function () {
  SubjectNumber = 2;
    setScreen("Main");
    setParent("DeleteButton", "Data1");
    setParent("CalculateData1", "Data1");
    finalScore = 0;
    totalWeights = 0;
    totalFinalScores = 0;
    

    setProperty(SubjectNo, "background-color", "#fff");
    setProperty(SubjectNo, "text-color", "#000");
        
    

    console.log(Grade);
    console.log(Type);
    console.log(Weight);
    console.log(SubjectName);
    Type.length = 0;
    Weight.length = 0;
    SubjectName.length = 0;
    Grade.length = 0;
    GradeNum.length = 0;

    for (var i = 1; i <= 32; i++) {
        setText("Subject" + i, "");
        setText("Score" + i, "A+");
        setText("Scores" + i, "");
        hideElement("Subject" + i);
        hideElement("Score" + i);
        hideElement("Scores" + i);
    }

    SubInfo = 1;
    setText("NameofSubject", "");
    setText("Type", "");
    setNumber("Weight", "");
    setText("Grade", "");
    setText("Grade100", "");
    Organizer();
    
});

onEvent("ResetA2", "click", function () {
      showElement("BackFromData1");
  SubjectNumber = 2;
    setScreen("Services");
    setParent("DeleteButton", "Data1");
    setParent("CalculateData1", "Data1");
    finalScore = 0;
    totalWeights = 0;
    totalFinalScores = 0;
    

    console.log(Grade);
    console.log(Type);
    console.log(Weight);
    console.log(SubjectName);
    Type.length = 0;
    Weight.length = 0;
    SubjectName.length = 0;
    Grade.length = 0;
    GradeNum.length = 0;

    for (var i = 1; i <= 32; i++) {
        setText("Subject" + i, "");
        setText("Score" + i, "A+");
        setText("Scores" + i, "");
        hideElement("Subject" + i);
        hideElement("Score" + i);
        hideElement("Scores" + i);
    }

    SubInfo = 1;
    
    setText("NameofSubject", "");
    setText("Type", "");
    setNumber("Weight", "");
    setText("Grade", "");
    setText("Grade100", "");
    Organizer();
    
});

onEvent("ResetNORMAL", "click", function () {
 
  setScreen("Services");
  
  
}); 
  
  var CalculationNew;
  
  
  onEvent("BackCalculation", "click", function () {
    setScreen("Services");
    
  });
  
function GPARSS () {
    SubjectNumber =2;
  

  showElement("Exit");
  showElement("Reset");
  hideElement("ResetA2");
  showElement("BackFromData1");
  
  if (GPAAPPDefine === 2) {
    setProperty(SubjectNo, "background-color", "#fff");
  setProperty(SubjectNo, "text-color", "#000");
 
 setParent("DeleteButton", "Data1");
 setParent("CalculateData1", "Data1");
  finalScore = 0;
  totalWeights = 0;
  totalFinalScores = 0;
  
  
  console.log(Grade);
  console.log(Type);
  console.log(Weight);  console.log(SubjectName);
  Type.length =0;
  Weight.length =0;
  SubjectName.length =0;
  Grade.length =0;
  GradeNum.length =0;
Organizer ();
  for (var i = 1; i <= 32; i++) {
    setText("Subject" + i, "");
    setText("Score" + i, "A+");
    setText("Scores" + i, "");
    hideElement("Subject" + i);
    hideElement("Score" + i);
    hideElement("Scores" + i);
  }
Organizer ();
  SubInfo = 1;
  setText("NameofSubject", "");
  setText("Type", "");
  setNumber("Weight", "");
  setText("Grade", "");
  setText("Grade100", "");
  setScreen("Main");
  
  
  
    
  } else {
    setScreen("Main");
  }
 GPAAPPDefine = 1;
}

function GPANormal () {
  
    SubjectNumber =1;
   setProperty(SubjectNo, "background-color", "#fff");
    setProperty(SubjectNo, "text-color", "#000");
  
  hideElement("Delete");
  hideElement("Exit");
  hideElement("Reset");
  showElement("ResetA2");
  hideElement("BackFromData1");
  SubjectManual();
  showElement("ResetNORMAL");
  


  
  if (GPAAPPDefine === 1) {
  setProperty(SubjectNo, "background-color", "#fff");
    setProperty(SubjectNo, "text-color", "#000");
      setParent("DeleteButton", "Data1");
 setParent("CalculateData1", "Data1");
  finalScore = 0;
  totalWeights = 0;
  totalFinalScores = 0;
  
  
  console.log(Grade);
  console.log(Type);
  console.log(Weight);  console.log(SubjectName);
  Type.length =0;
  Weight.length =0;
  SubjectName.length =0;
  Grade.length =0;
  GradeNum.length =0;
Organizer ();
  for (var i = 1; i <= 32; i++) {
    setText("Subject" + i, "");
    setText("Score" + i, "A+");
    setText("Scores" + i, "");
    hideElement("Subject" + i);
    hideElement("Score" + i);
    hideElement("Scores" + i);
  }
Organizer ();
  SubInfo = 1;
  setText("NameofSubject", "");
  setText("Type", "");
  setNumber("Weight", "");
  setText("Grade", "");
  setText("Grade100", "");
  setScreen("Subject");
  
  hideElement("AddSubject");
  
    
  } else {
    setScreen("Subject"); hideElement("AddSubject");
  }
  GPAAPPDefine = 2;
 
}
  
onEvent("GPARSS", "click", function () {
  GPARSS ();
});

onEvent("A1", "click", function () {
  GPARSS ();
});

onEvent("A2", "click", function () {
  GPARSS ();
});

onEvent("A3", "click", function () {
  GPARSS ();
});

onEvent("GPANormal", "click", function () {
GPANormal();
});

onEvent("B1", "click", function () {
GPANormal();
});

onEvent("B2", "click", function () {
GPANormal();
});

onEvent("B3", "click", function () {
GPANormal();
});

  onEvent("HomeAdmin", "click", function () {
    setScreen("MockASK");
  });
  
  
  onEvent("Delete", "click", function (){
   for (var i = 0; i < 63; i++) {
     var DeleteTarget = getText("NameofSubject");
      if (DeleteTarget === getText(SubjectNo)) {
        SubjectNumber =2;
        setProperty(SubjectNo, "background-color", "#fff");
        setProperty(SubjectNo, "text-color", "#000");
        
      }
    }Organizer ();
    
  });
  
  
    onEvent("DeleteButton", "click", function () {
     
     for (var G =1; G< 32; G++) {
       
       onEvent("Subject" + G, "click", function () {
         
      ED(G); 
     });
     }
      if (DeleteTarget2 === getText(SubjectNo)) {
        setProperty(SubjectNo, "background-color", "#fff");
        setProperty(SubjectNo, "text-color", "#000");
        SubjectNumber = 2;  
      
    }
    
  });
  
  

  
     
         
        
      
    
  
  



    
onEvent("HomeMain", "click", function( ) {
  
  setScreen("Services");

    }); 
    
    
onEvent("HomeSubject", "click", function( ) {
  setScreen("Services"); 
    
}); 
  
  
}




// functions 

function ED(IDS) { 
  
Organizer();

 var DeleteTarget2;
    onEvent("Subject" + IDS, "click", function () {
      setText("Grade100", "");
      
      
  
      
       DeleteTarget2 = getText("Subject" + IDS);
      
      Delete2 = getText("Subject" + IDS);
      if (DeleteButton % 2 == 1) {
          SubInfo = SubjectName.length;
          //SubjectNumber =2;
          
        
  
  AddSubjectClick--;
   setTimeout(function() {
     
  
   
 for (var i = 0; i < SubjectName.length; i++) {
   if(Delete2 === SubjectName [i]) {
     removeItem(SubjectName, i);
     removeItem(Grade, i);
     removeItem(Type, i);
     removeItem(Weight, i);
     removeItem(GradeNum, i);
    setText("Score" + (i+1), "A+");
    console.log(Grade);
  console.log(Type);
  console.log(Weight);
  console.log(SubjectName);
    
   } 
     for (var F =1; F <= 13; F ++) {
  ResetSelection("English" + F);
  ResetSelection("Arabic" + F);
  ResetSelection("Math" + F);
  ResetSelection("Performance" + F);
  ResetSelection("Economic" + F);
  ResetSelection("Science" + F);
  ResetSelection("Computer" + F);
  ResetSelection("10PSubject" + F);
  ResetSelection("11PSubject" + F);
  ResetSelection("12PSubject" + F);
  ResetSelection("09PSubject" + F);
  
}  
  
   
 
 }
     for (var D = 0; D < SubjectName.length; D++) {
       setText("Subject" + (D + 1), SubjectName [D]);
       setText("Score" + (D + 1), Grade [D]);
       setText("Scores" + (D + 1), GradeNum [D]);
       hideElement("Subject" + (SubjectName.length + 1));
       hideElement("Score" + (SubjectName.length + 1));
       hideElement("Scores" + (SubjectName.length + 1));
     } 
     
        if(SubInfo === 0) {
        SubInfo =1;
         }
  if (SubjectName.length === 0){
         hideElement("Subject1");
         hideElement("Score1");
         hideElement("Scores1");
         SubjectManual(); Organizer ();
  hideElement("AddSubject");
       }  }, 100);
       
           if (SubjectName.length === 16) {
            setScreen("Data2");
            setParent("CalculateData1", "Data2");
            setParent("DeleteButton", "Data2");
            Organizer();
          }
          
          if (SubjectName.length === 8) {
            setScreen("Data1");
            setParent("CalculateData1", "Data1");
            setParent("DeleteButton", "Data1");
            Organizer();
          }
           if (SubjectName.length < 32) {
            showElement("BackFromData1");
          }
          
  Organizer();
          
      } else {
        currentIndex = (IDS -1);
        setText("NameofSubject", getText("Subject" + IDS));
        setText("Type", Type[IDS - 1]);
        setText("Weight", Weight[IDS - 1]);
        setText("Grade", Grade[IDS - 1]);
        setText("Grade100", GradeNum[IDS - 1]);
        hideElement("AddSubject");
        showElement("Save");
        setScreen("Subject");
        showElement("TypeQ");
        showElement("WeightQ");
        showElement("Weight");
        showElement("GradeQ");
        showElement("Grade");
        showElement("Grade100");
        showElement("Delete");
        setText("SubjectUser", "Course " + (IDS)); 
        NamesBefore = getText("NameofSubject");
        Organizer();
      }
        
}); }

function displayDataOnData1() {
  for (var i = 1; i <= 32; i++) {
    if (SubjectName[i - 1]) {
      setText("Subject" + i, SubjectName[i - 1]);
      showElement("Subject" + i);
      showElement("Score" + i);
      showElement("Scores" + i);
    }
  }Organizer ();
}

function Shared (GradeSchool){
  onEvent("PShared" + GradeSchool, "click", function (){
  setScreen("ScreenChooseField");
});
Organizer ();
}

function SharedLook (Field){
  onEvent(Field + "Field","click", function (){
    setScreen(Field);
  });
  Organizer ();
}

function hidden() {
    // Hide relevant elements
    hideElement("Type");
    hideElement("Grade");
    hideElement("Grade100");
    hideElement("Weight");
    hideElement("TypeQ");
    hideElement("WeightQ");
    hideElement("GradeQ");
    Organizer ();
}



function SubjectManual () {
  Organizer ();
  
 setScreen("Subject");
  hideElement("Type");
  hideElement("Save");
  hideElement("Delete");
  hidden();
  setText("NameofSubject", "");
  setText("Weight", "Subject Credit:");
  setText("Grade", "");
  setText("Grade100", "");
  setText("Type", "");
  setText("SubjectUser", "Course " + SubInfo);
  if (SubjectName.length > 8) {
   showElement("NextData1"); 
   
   console.log(Weight);
  } else if (SubjectName.length > 16) {
   showElement("NextData2"); 
   
   console.log(Weight);
}
  setScreen("Subject");
  hideElement("Type");
  hideElement("Save");
  hidden();
  setText("NameofSubject", "");
  setText("Weight", "Subject Credit:");
  setText("Grade", "");
  setText("Grade100", "");
  setText("Type", "");

        onEvent("Type", "change", function () {
          if (Check2 === 0) {
            showElement("WeightQ");
            showElement("Weight");
            Check2 = 1;
          }
          if (getText("Type") === "Pre-AP Course" ||"AP/IB Course") {
            setText("Weight", 1);
            showElement("Grade");
            showElement("Grade100");
            showElement("GradeQ");
            Organizer ();
          }
        });

        onEvent("Weight", "change", function () {
          if (Check3 === 0) {
            showElement("Grade");
            showElement("Grade100");
            showElement("GradeQ");
            Check3 = 1;
            Organizer ();
          }
        });

      onEvent("Grade", "change", function () {
        setText("Grade100", "");
        if (Check4 === 0) {
          showElement("AddSubject");
      Organizer ();
          Check4 = 1;
        }
        if(getText("Grade") === "") {
          hideElement("AddSubject");
        }
      });

      onEvent("NameofSubject", "input", function () {
        if (Check1 === 0) {
          showElement("TypeQ");
          showElement("Type");
          Check1 = 1;
          Organizer ();
        }
        });
 }
 
 
   var ScoresDefine2;
 onEvent("Grade100", "input", function () {
    ScoresDefine2 = getNumber("Grade100");
    
    //if (getText("Grade100") != "") {
      showElement("AddSubject");
    //} else {
      //hideElement("AddSubject");
    //}
    if (ScoresDefine2 >= 97 && ScoresDefine2 <= 100) {
    setText("Grade", "A+");
    } else if (ScoresDefine2 >= 93 && ScoresDefine2 < 97) {
        setText("Grade", "A");
    } else if (ScoresDefine2 >= 90 && ScoresDefine2 < 93) {
        setText("Grade", "A-");
    } else if (ScoresDefine2 >= 87 && ScoresDefine2 < 90) {
        setText("Grade", "B+");
    } else if (ScoresDefine2 >= 83 && ScoresDefine2 < 87) {
        setText("Grade", "B");
    } else if (ScoresDefine2 >= 80 && ScoresDefine2 < 83) {
        setText("Grade", "B-");
    } else if (ScoresDefine2 >= 77 && ScoresDefine2 < 80) {
        setText("Grade", "C+");
    } else if (ScoresDefine2 >= 73 && ScoresDefine2 < 77) {
        setText("Grade", "C");
    } else if (ScoresDefine2 >= 70 && ScoresDefine2 < 73) {
        setText("Grade", "C-");
    } else if (ScoresDefine2 >= 67 && ScoresDefine2 < 70) {
        setText("Grade", "D+");
    } else if (ScoresDefine2 >= 60 && ScoresDefine2 < 67) {
        setText("Grade", "D");
    } else if (ScoresDefine2 < 60) {
        setText("Grade", "F");
    } else if (ScoresDefine2 == "") {
        setText("Grade", "A+");
    } else {
        setText("Grade", "Undefined Grade");
    } }); 

 function Organizer () {
   
    if (SubjectName.length < 8) {
      hideElement("NextData1");
      showElement("CalculateData1");
      
    }
  
   if (SubjectName.length > 8) {
      showElement("NextData1");
   
      
    }
    
     if (SubjectName.length < 16) {
      hideElement("NextData2");
      
      
    }

    if (SubjectName.length > 16) {
      showElement("NextData2");
      
    
      
    }

    if (SubjectName.length === 32) {
      hideElement("AddSubject");
      setScreen("Data1");
      hideElement("BackFromData1");
    } else {
      
      
    }
    
    if (SubjectName.length === 0) {
      hideElement("Next");
      hideElement("CalculateData1");
    }
    
    if (SubjectName.length != 0) {
      showElement("Next");
      showElement("CalculateData1");
    }
 }
 
 // -----------------------Service: AP Unit Test Calc----------------------- \\

var MCQInput, MCQTotalInput, MCQRatio, MCQPercent, MCQPercentRound = 0;
var FRQInput, FRQTotalInput, FRQRatio, FRQPercent, FRQPercentRound = 0;
var SAQInput, SAQTotalInput, SAQRatio, SAQPercent, SAQPercentRound = 0;
var TotalPercent, PartialPercent;
var MCQ, FRQ, SAQ;
var SubjectCalc;

var Max5UnitTest2, Min5UnitTest2, Max4UnitTest2, Min4UnitTest2,
Max3UnitTest2, Min3UnitTest2, Max2UnitTest2, Min2UnitTest2,
Max1UnitTest2, Min1UnitTest2;

var Score5Unit2 = 0, Score4Unit2 = 0, Score3Unit2 = 0, Score2Unit2 = 0, Score1Unit2 = 0;

var Max5UnitTest3, Min5UnitTest3, Max4UnitTest3, Min4UnitTest3,
Max3UnitTest3, Min3UnitTest3, Max2UnitTest3, Min2UnitTest3,
Max1UnitTest3, Min1UnitTest3;

var Score5Unit3 = 0, Score4Unit3 = 0, Score3Unit3 = 0, Score2Unit3 = 0, Score1Unit3 = 0;

hideElement("GradeShort");
hideElement("TotalShort");
hideElement("SAQDisplay");
hideElement("SAQ%");
setText("SAQ%", 0);
setText("MCQ%", 0);
setText("FRQ%", 0);
hideElement("MCQOnlyDesign");
hideElement("AllOnlyDesign");
hideElement("SAQ");

onEvent("SubjectChoose", "change", function () {
  showElement("GradeMCQ");
  showElement("GradeFRQ");
  showElement("TotalShort");
  showElement("TotalMCQ");
  showElement("TotalFRQ");
  showElement("GradeShort");
  showElement("MCQDisplay");
  showElement("FRQDisplay");
  showElement("SAQDisplay");
  showElement("TotalDisplay");
  showElement("ScalingDisplay");
  showElement("ZoneDisplay");
  showElement("MCQ%");
  showElement("FRQ%");
  showElement("SAQ%");
  showElement("MCQ");
  showElement("FRQ");
  showElement("SAQ");
  showElement("Total%");
  showElement("FinalScore");
  showElement("ZoneScore");
    hideElement("MCQOnlyDesign");
    hideElement("MCQFRQOnlyDesign");
    hideElement("AllOnlyDesign");
    setText("FinalScore", "NO Scaling");
    setText("ZoneScore", "No Value");

    scaling();
    setText("SAQ%", 0);
    setText("MCQ%", 0);
    setText("FRQ%", 0);
    setText("GradeMCQ", "");
    setText("GradeFRQ", "");
    setText("GradeShort", "");
    setText("TotalShort", "");
    setText("TotalFRQ", "");
    setText("TotalMCQ", "");
    setText("Total%", "");
    MCQ = 0, FRQ = 0, SAQ = 0;
    MCQInput = 0, MCQTotalInput = 0, MCQRatio = 0, MCQPercent = 0, MCQPercentRound = 0;
    FRQInput = 0, FRQTotalInput = 0, FRQRatio = 0, FRQPercent = 0, FRQPercentRound = 0;
    SAQInput = 0, SAQTotalInput = 0, SAQRatio = 0, SAQPercent = 0, SAQPercentRound = 0;
    TotalPercent = 0, PartialPercent = 0;
    
    
    
    SubjectCalc = getText("SubjectChoose");

    if ( SubjectCalc === "AP Art History"
       ||SubjectCalc === "AP Comparative Government and Politics"
       ||SubjectCalc === "AP Human Geography"
       ||SubjectCalc === "AP United States Government and Politics" 
       ||SubjectCalc === "AP Calculus AB"
       ||SubjectCalc === "AP Calculus BC"
       ||SubjectCalc === "AP Computer Science A"
       ||SubjectCalc === "AP Statistics"
       ||SubjectCalc === "AP Biology"
       ||SubjectCalc === "AP Chemistry"
       ||SubjectCalc ==="AP Physics 1: Algebra-Based"
       ||SubjectCalc === "AP Physics 2: Algebra-Based"
       ||SubjectCalc === "AP Physics C: Electricity and Magnetism"
       ||SubjectCalc ==="AP Physics C: Mechanics"
       ||SubjectCalc === "AP Chinese Language and Culture"
       ||SubjectCalc === "AP French Language and Culture"
       ||SubjectCalc === "AP German Language and Culture"
       ||SubjectCalc === "AP Italian Language and Culture"
       ||SubjectCalc === "AP Japanese Language and Culture"
       ||SubjectCalc === "AP Spanish Language and Culture"
       ||SubjectCalc === "AP Spanish Literature and Culture"
       ||SubjectCalc === "AP Latin" ) 
       
       {
        MCQ = 0.5;
        FRQ = 0.5;
        HideAndShow ();
        Total();
        
        
  } else if (
        SubjectCalc === "AP Music Theory"
      ||SubjectCalc === "AP English Language and Composition"
      ||SubjectCalc === "AP English Literature and Composition"
  ) {
      MCQ = 0.45;
      FRQ = 0.55;
      HideAndShow();
      Total();
  } else if (SubjectCalc === "AP Macroeconomics" || SubjectCalc === "AP Microeconomics") {
      MCQ = 0.66;
      FRQ = 0.33;
      HideAndShow();
      Total();
  } else if (SubjectCalc === "AP Psychology") {
      MCQ = 0.67;
      FRQ = 0.33;
      HideAndShow();
      Total();
  } else if (SubjectCalc === "AP Precalculus") {
      MCQ = 0.625;
      FRQ = 0.375;
      HideAndShow();
      Total();
  } else if (SubjectCalc === "AP Environmental Science") {
      MCQ = 0.6;
      FRQ = 0.4;
      HideAndShow();
      Total();
  } else if (SubjectCalc === "AP Computer Science Principles") {
      MCQ = 1;
      FRQ = 0;
      APCSPHide();
  } else if (
      SubjectCalc === "AP World History: Modern" ||
      SubjectCalc === "AP European History" ||
      SubjectCalc === "AP United States History"
  ) {
      MCQ = 0.4;
      FRQ = 0.4;
      SAQ = 0.2;
      APSAQ();
  }
  
  setText("FinalScore", "NO Scaling");
  setText("ZoneScore", "No Value");
  });


 onEvent("GradeMCQ", "input", function () {
    MCQFinal();
    scaling();
});

onEvent("TotalMCQ", "input", function () {
    MCQFinal();
    scaling();
});

onEvent("GradeFRQ", "input", function () {
    FRQFinal();
    scaling();
});

onEvent("TotalFRQ", "input", function () {
    FRQFinal();
    scaling();
});

onEvent("TotalShort", "input", function () {
    SAQFinal();
    scaling();
});

onEvent("GradeShort", "input", function () {
    SAQFinal();
    scaling();
});

function MCQFinal() {
    var gradeMCQInput = getText("GradeMCQ").trim(); // Trim whitespace from input
    var totalMCQInput = getText("TotalMCQ").trim(); // Trim whitespace from input

    if (gradeMCQInput === "" || isNaN(Number(gradeMCQInput)) || totalMCQInput === "" || isNaN(Number(totalMCQInput))) {
        setText("MCQ%", "0");
    } else {
        var MCQInput = getNumber("GradeMCQ");
        var MCQTotalInput = getNumber("TotalMCQ");
        var MCQRatio = MCQInput / MCQTotalInput;
        var MCQPercent = MCQRatio * MCQ;
        var MCQPercentRound = (MCQPercent * 100).toFixed(3);
        setText("MCQ%", MCQPercentRound);
    }
    Total();
    scaling();
    setText("Total%", TotalPercent);
}

function FRQFinal() {
    var gradeFRQInput = getText("GradeFRQ").trim(); // Trim whitespace from input
    var totalFRQInput = getText("TotalFRQ").trim(); // Trim whitespace from input

    if (gradeFRQInput === "" || isNaN(Number(gradeFRQInput)) || totalFRQInput === "" || isNaN(Number(totalFRQInput))) {
        setText("FRQ%", "0");
    } else {
        var FRQInput = getNumber("GradeFRQ");
        var FRQTotalInput = getNumber("TotalFRQ");
        var FRQRatio = FRQInput / FRQTotalInput;
        var FRQPercent = FRQRatio * FRQ;
        var FRQPercentRound = (FRQPercent * 100).toFixed(3);
        setText("FRQ%", FRQPercentRound);
    }
    Total();
    scaling();
    setText("Total%", TotalPercent);
}

function SAQFinal() {
    var gradeSAQInput = getText("GradeShort").trim(); // Trim whitespace from input
    var totalSAQInput = getText("TotalShort").trim(); // Trim whitespace from input

    if (gradeSAQInput === "" || isNaN(Number(gradeSAQInput)) || totalSAQInput === "" || isNaN(Number(totalSAQInput))) {
        setText("SAQ%", "0");
    } else {
        var SAQInput = getNumber("GradeShort");
        var SAQTotalInput = getNumber("TotalShort");
        var SAQRatio = SAQInput / SAQTotalInput;
        var SAQPercent = SAQRatio * SAQ;
        var SAQPercentRound = (SAQPercent * 100).toFixed(3);
        setText("SAQ%", SAQPercentRound);
    }
    Total();
    scaling();
    setText("Total%", TotalPercent);
}

function Total() {
    TotalPercent = getNumber("MCQ%") + getNumber("FRQ%") + getNumber("SAQ%");
    scaling();
}
var Scale;

setTimeout(function() {
  
Max5UnitTest2 = getKeyValue("Max5UnitTest", function (Max5UnitTests) {
    Max5UnitTest2 = Max5UnitTests;
});

}, 1000);

setTimeout(function() {
Min5UnitTest2 = getKeyValue("Min5UnitTest", function (Min5UnitTests) {
    Min5UnitTest2 = Min5UnitTests;
}); }, 2000);

setTimeout(function() {  
Max4UnitTest2 = getKeyValue("Max4UnitTest", function (Max4UnitTests) {
    Max4UnitTest2 = Max4UnitTests;
    
});     }, 3000);


setTimeout(function() {
Min4UnitTest2 = getKeyValue("Min4UnitTest", function (Min4UnitTests) {
    Min4UnitTest2 = Min4UnitTests;
}); }, 4000);

setTimeout(function() {
Max3UnitTest2 = getKeyValue("Max3UnitTest", function (Max3UnitTests) {
    Max3UnitTest2 = Max3UnitTests;
}); }, 5000);

setTimeout(function() {
Min3UnitTest2 = getKeyValue("Min3UnitTest", function (Min3UnitTests) {
    Min3UnitTest2 = Min3UnitTests;
}); }, 6000);

setTimeout(function() {
Max2UnitTest2 = getKeyValue("Max2UnitTest", function (Max2UnitTests) {
    Max2UnitTest2 = Max2UnitTests;
}); }, 7000);

setTimeout(function() {
Min2UnitTest2 = getKeyValue("Min2UnitTest", function (Min2UnitTests) {
    Min2UnitTest2 = Min2UnitTests;
}); }, 8000);


setTimeout(function() {
Max1UnitTest2 = getKeyValue("Max1UnitTest", function (Max1UnitTests) {
    Max1UnitTest2 = Max1UnitTests;
}); }, 9000);

setTimeout(function() {
Min1UnitTest2 = getKeyValue("Min1UnitTest", function (Min1UnitTests) {
    Min1UnitTest2 = Min1UnitTests;
}); }, 10000);


setTimeout(function() {
Score5Unit2 = getKeyValue("Score5Unit", function (Score5Units2) {
    Score5Unit2 = Score5Units2;
}); }, 11000);



setTimeout(function() {
Score5Unit2 = getKeyValue("Score5Unit", function (Score5Units2) {
    Score5Unit2 = Score5Units2;
}); }, 12000);

setTimeout(function() {
Score4Unit2 = getKeyValue("Score4Unit", function (Score4Units2) {
    Score4Unit2 = Score4Units2;
}); }, 13000);

setTimeout(function() {
Score3Unit2 = getKeyValue("Score3Unit", function (Score3Units2) {
    Score3Unit2 = Score3Units2;
}); }, 14000);

setTimeout(function() {
Score2Unit2 = getKeyValue("Score2Unit", function (Score2Units2) {
    Score2Unit2 = Score2Units2;
}); }, 15000);

setTimeout(function() {
Score1Unit2 = getKeyValue("Score1Unit", function (Score1Units2) {
    Score1Unit2 = Score1Units2;
}); }, 16000);



onEvent("HomeUnitTest", "click", function () {
  setScreen("AdminPreference");
  setNumber("5MaxUnit", "");
  setNumber("4MaxUnit", "");
  setNumber("3MaxUnit", "");
  setNumber("2MaxUnit", "");
  setNumber("1MaxUnit", "");
  setNumber("5MinUnit", "");
  setNumber("4MinUnit", "");
  setNumber("3MinUnit", "");
  setNumber("2MinUnit", "");
  setNumber("1MinUnit", "");
  setNumber("5Score", "");
  setNumber("4Score", "");
  setNumber("3Score", "");
  setNumber("2Score", "");
  setNumber("1Score", "");
});

onEvent("RemoveInputUnitTest", "click", function () {
  setNumber("5MaxUnit", "");
  setNumber("4MaxUnit", "");
  setNumber("3MaxUnit", "");
  setNumber("2MaxUnit", "");
  setNumber("1MaxUnit", "");
  setNumber("5MinUnit", "");
  setNumber("4MinUnit", "");
  setNumber("3MinUnit", "");
  setNumber("2MinUnit", "");
  setNumber("1MinUnit", "");
  setNumber("5Score", "");
  setNumber("4Score", "");
  setNumber("3Score", "");
  setNumber("2Score", "");
  setNumber("1Score", "");
});


/* onEvent("DownloadInputUnitTest", "click", function () {
Max5UnitTest3 = getKeyValue("Max5UnitTest", function (Max5UnitTests2) {
    Max5UnitTest3 = Max5UnitTests2;
});
Min5UnitTest3 = getKeyValue("Min5UnitTest", function (Min5UnitTests2) {
    Min5UnitTest3 = Min5UnitTests2;
});
Max4UnitTest3 = getKeyValue("Max4UnitTest", function (Max4UnitTests2) {
    Max4UnitTest3 = Max4UnitTests2;
});
Min4UnitTest3 = getKeyValue("Min4UnitTest", function (Min4UnitTests2) {
    Min4UnitTest3 = Min4UnitTests2;
});
Max3UnitTest3 = getKeyValue("Max3UnitTest", function (Max3UnitTests2) {
    Max3UnitTest3 = Max3UnitTests2;
});
Min3UnitTest3 = getKeyValue("Min3UnitTest", function (Min3UnitTests2) {
    Min3UnitTest3 = Min3UnitTests2;
});
Max2UnitTest3 = getKeyValue("Max2UnitTest", function (Max2UnitTests2) {
    Max2UnitTest3 = Max2UnitTests2;
});
Min2UnitTest3 = getKeyValue("Min2UnitTest", function (Min2UnitTests2) {
    Min2UnitTest3 = Min2UnitTests2;
});
Max1UnitTest3 = getKeyValue("Max1UnitTest", function (Max1UnitTests2) {
    Max1UnitTest3 = Max1UnitTests2;
});
Min1UnitTest3 = getKeyValue("Min1UnitTest", function (Min1UnitTests2) {
    Min1UnitTest3 = Min1UnitTests2;
});

Score5Unit3 = getKeyValue("Score5Unit", function (Score5Units22) {
    Score5Unit3 = Score5Units22;
});

Score5Unit3 = getKeyValue("Score5Unit", function (Score5Units22) {
    Score5Unit3 = Score5Units22;
});
Score4Unit3 = getKeyValue("Score4Unit", function (Score4Units22) {
    Score4Unit3 = Score4Units22;
});
Score3Unit3 = getKeyValue("Score3Unit", function (Score3Units22) {
    Score3Unit3 = Score3Units22;
});
Score2Unit3 = getKeyValue("Score2Unit", function (Score2Units22) {
    Score2Unit3 = Score2Units22;
});
Score1Unit3 = getKeyValue("Score1Unit", function (Score1Units22) {
    Score1Unit3 = Score1Units22;
});
}); */
  
onEvent("DownloadInputUnitTest", "click", function () {
  setNumber("5MaxUnit", Max5UnitTest2);
  setNumber("4MaxUnit", Max4UnitTest2);
  setNumber("3MaxUnit", Max3UnitTest2);
  setNumber("2MaxUnit", Max2UnitTest2);
  setNumber("1MaxUnit", Max1UnitTest2);
  setNumber("5MinUnit", Min5UnitTest2);
  setNumber("4MinUnit", Min4UnitTest2);
  setNumber("3MinUnit", Min3UnitTest2);
  setNumber("2MinUnit", Min2UnitTest2);
  setNumber("1MinUnit", Min1UnitTest2);
  setNumber("5Score", Score5Unit2);
  setNumber("4Score", Score4Unit2);
  setNumber("3Score", Score3Unit2);
  setNumber("2Score", Score2Unit2);
  setNumber("1Score", Score1Unit2);
});


function scaling() {
    Scale = getNumber("Total%");
    if (Scale >= Min5UnitTest2 && Scale <= Max5UnitTest2) {
        setText("FinalScore", Score5Unit2 + "/" + Score5Unit2);
        setText("ZoneScore", "5");
    } else if (Scale >= Min4UnitTest2 && Scale < Max4UnitTest2) {
        setText("FinalScore", Score4Unit2 + "/" + Score5Unit2);
        setText("ZoneScore", "4");
    } else if (Scale >= Min3UnitTest2 && Scale < Max3UnitTest2) {
        setText("FinalScore", Score3Unit2 + "/" + Score5Unit2);
        setText("ZoneScore", "3");
    } else if (Scale >= Min2UnitTest2 && Scale < Max2UnitTest2) {
        setText("FinalScore", Score2Unit2 + "/" + Score5Unit2);
        setText("ZoneScore", "2");
    } else if (Scale >= Min1UnitTest2 && Scale < Max1UnitTest2) {
        setText("FinalScore", Score1Unit2 + "/" + Score5Unit2);
        setText("ZoneScore", "1");
    } else {
        setText("FinalScore", "No Scaling");
        setText("ZoneScore", "No Value");
    }
}

function HideAndShow () {
  hideElement("GradeShort");
  hideElement("TotalShort");
  hideElement("SAQ");
  hideElement("SAQDisplay");
  hideElement("SAQ%");
  showElement("GradeFRQ");
  showElement("TotalFRQ");
  showElement("FRQ");
  showElement("FRQ%");
  showElement("FRQDisplay");
  showElement("MCQFRQOnlyDesign");
  hideElement("MCQOnlyDesign");
    }
    
    
function APCSPHide () {
  hideElement("GradeFRQ");
  hideElement("TotalFRQ");
  hideElement("FRQ");
  hideElement("FRQ%");
  hideElement("FRQDisplay");
  hideElement("GradeShort");
  hideElement("TotalShort");
  hideElement("SAQ");
  hideElement("SAQDisplay");
  hideElement("SAQ%");
  showElement("MCQOnlyDesign");
  setText("FRQ%", "0");
  setText("SAQ%", "0");
      }
      
      
function APSAQ () {
    showElement("GradeShort");
    showElement("TotalShort");
    showElement("SAQ");
    showElement("SAQDisplay");
    showElement("SAQ%");
    showElement("GradeFRQ");
    showElement("TotalFRQ");
    showElement("FRQ");
    showElement("FRQ%");
    showElement("FRQDisplay");
    showElement("AllOnlyDesign");
    hideElement("MCQOnlyDesign");
          }
          
  
  onEvent("ResetUnitTest", "click", function () {
    setScreen("Services");
     setText("SAQ%", 0);
    setText("MCQ%", 0);
    setText("FRQ%", 0);
    setText("GradeMCQ", "");
    setText("GradeFRQ", "");
    setText("GradeShort", "");
    setText("TotalShort", "");
    setText("TotalFRQ", "");
    setText("TotalMCQ", "");
    setText("Total%", "");
    MCQ = 0, FRQ = 0, SAQ = 0;
    MCQInput = 0, MCQTotalInput = 0, MCQRatio = 0, MCQPercent = 0, MCQPercentRound = 0;
    FRQInput = 0, FRQTotalInput = 0, FRQRatio = 0, FRQPercent = 0, FRQPercentRound = 0;
    SAQInput = 0, SAQTotalInput = 0, SAQRatio = 0, SAQPercent = 0, SAQPercentRound = 0;
    TotalPercent = 0, PartialPercent = 0;
    hideElement("GradeMCQ");
    hideElement("GradeFRQ");
    hideElement("TotalShort");
    hideElement("TotalMCQ");
    hideElement("TotalFRQ");
    hideElement("GradeShort");
    hideElement("MCQDisplay");
    hideElement("FRQDisplay");
    hideElement("SAQDisplay");
    hideElement("TotalDisplay");
    hideElement("ScalingDisplay");
    hideElement("ZoneDisplay");
    hideElement("MCQ%");
    hideElement("FRQ%");
    hideElement("SAQ%");
    hideElement("MCQ");
    hideElement("FRQ");
    hideElement("SAQ");
    hideElement("Total%");
    hideElement("FinalScore");
    hideElement("ZoneScore");
    hideElement("GradeShort");
    hideElement("TotalShort");
    hideElement("SAQDisplay");
    hideElement("SAQ%");
    setText("SAQ%", 0);
    setText("MCQ%", 0);
    setText("FRQ%", 0);
    hideElement("MCQOnlyDesign");
    hideElement("AllOnlyDesign");
    hideElement("MCQFRQOnlyDesign");
    hideElement("SAQ");
    setText("SubjectChoose", "");
  });
  
  
// --------------Service: AP Portfolio Calc----------- \\
var APSubjectCalc, APAssignmentsOutput,APSessionsOutput,
APParticipationOutput,APUnitTestOutput, Result12, Result34, Result1234;
var APAssignments, APSessions, APParticipation, APUnitTest, TotalAP;

var AssignmentsGeneral, AttendanceGeneral, ParticipationGeneral, UnitTestGeneral;
var AssignmentsSeminar, AttendanceSeminar, ParticipationSeminar, UnitTestSeminar;
var APID;

var AssignmentsGeneral2, AttendanceGeneral2, ParticipationGeneral2, UnitTestGeneral2;
var AssignmentsSeminar2, AttendanceSeminar2, ParticipationSeminar2, UnitTestSeminar2;

onEvent("APPortfolioDropdown", "change", function () {
    setNumber("PortfolioAssignment", "");
    setNumber("PortfolioAttendance", "");
    setNumber("PortfolioParticipation", "");
    setNumber("PortfolioUnitTest", "");
});

AssignmentsGeneral2 = getKeyValue("AssignmentsGeneral", function (AssignmentsGenerals2) {
    AssignmentsGeneral2 = AssignmentsGenerals2;
});

AttendanceGeneral2 = getKeyValue("AttendanceGeneral", function (AttendanceGenerals2) {
    AttendanceGeneral2 = AttendanceGenerals2;
});

ParticipationGeneral2 = getKeyValue("ParticipationGeneral", function (ParticipationGenerals2) {
    ParticipationGeneral2 = ParticipationGenerals2;
});

UnitTestGeneral2 = getKeyValue("UnitTestGeneral", function (UnitTestGenerals2) {
    UnitTestGeneral2 = UnitTestGenerals2;
});

AssignmentsSeminar2 = getKeyValue("AssignmentsSeminar", function (AssignmentSeminar2) {
    AssignmentsSeminar2 = AssignmentSeminar2;
});

AttendanceSeminar2 = getKeyValue("AttendanceSeminar", function (AttendancesSeminar2) {
    AttendanceSeminar2 = AttendancesSeminar2;
});

ParticipationSeminar2 = getKeyValue("ParticipationSeminar", function (ParticipationsSeminar2) {
    ParticipationSeminar2 = ParticipationsSeminar2;
});

UnitTestSeminar2 = getKeyValue("UnitTestSeminar", function (UnitTestsSeminar2) {
    UnitTestSeminar2 = UnitTestsSeminar2;
});

onEvent("RemovePortfolio", "click", function () {
   setNumber("PortfolioAssignment", "");
    setNumber("PortfolioAttendance", "");
    setNumber("PortfolioParticipation", "");
    setNumber("PortfolioUnitTest", "");
});

onEvent("SavePortfolio", "click", function () {
  
  showElement("LoadGif5");
  
  setTimeout(function () {
  hideElement("LoadGif5");
  setScreen("AdminPreference");
  }, 2500);
  
  APID = getText("APPortfolioDropdown");
  if (APID === "AP Subjects EXCEPT Seminar") {
  
  AssignmentsGeneral = getNumber("PortfolioAssignment");
  AttendanceGeneral = getNumber("PortfolioAttendance");
  ParticipationGeneral = getNumber("PortfolioParticipation");
  UnitTestGeneral = getNumber("PortfolioUnitTest");
  setTimeout(function(){ setKeyValue("AssignmentsGeneral", AssignmentsGeneral, function () {});}, 500);
  setTimeout(function(){ setKeyValue("AttendanceGeneral", AttendanceGeneral, function () {}); }, 1000);
  setTimeout(function(){ setKeyValue("ParticipationGeneral", ParticipationGeneral, function () {}); }, 1500);
  setTimeout(function(){ setKeyValue("UnitTestGeneral", UnitTestGeneral, function () {}); }, 2000);
  
    
  } else {
  AssignmentsSeminar = getNumber("PortfolioAssignment");
  AttendanceSeminar = getNumber("PortfolioAttendance");
  ParticipationSeminar = getNumber("PortfolioParticipation");
  UnitTestSeminar = getNumber("PortfolioUnitTest");
  
  setTimeout(function(){ setKeyValue("AssignmentsSeminar", AssignmentsSeminar, function () {});}, 500);
  setTimeout(function(){ setKeyValue("AttendanceSeminar", AttendanceSeminar, function () {}); }, 1000);
  setTimeout(function(){ setKeyValue("ParticipationSeminar", ParticipationSeminar, function () {}); }, 1500);
  setTimeout(function(){ setKeyValue("UnitTestSeminar", UnitTestSeminar, function () {}); }, 2000);
  
  }
  
});

onEvent("DownloadPortfolio", "click", function () {
  APID = getText("APPortfolioDropdown");
  


  if (APID === "AP Subjects EXCEPT Seminar") {
    setNumber("PortfolioAssignment", AssignmentsGeneral2);
    setNumber("PortfolioAttendance", AttendanceGeneral2);
    setNumber("PortfolioParticipation", ParticipationGeneral2);
    setNumber("PortfolioUnitTest", UnitTestGeneral2);
    } else {
    setNumber("PortfolioAssignment", AssignmentsSeminar2);
    setNumber("PortfolioAttendance", AttendanceSeminar2);
    setNumber("PortfolioParticipation", ParticipationSeminar2);
    setNumber("PortfolioUnitTest", UnitTestSeminar2);
    }
});



onEvent("SubjectChooseAPPortfolio", "change", function () {
  APSubjectCalc = 0;
  APAssignmentsOutput = 0;
  APSessionsOutput = 0;
  APParticipationOutput = 0;
  APUnitTestOutput = 0;
  Result12 = 0;
  Result34 = 0;
  Result1234 = 0;
  APAssignments = 0;
  APSessions = 0;
  APParticipation = 0;
  APUnitTest = 0;
  TotalAP = 0;
  APAssignmentsInput = 0;
  APSessionsInput = 0;
  APParticipationInput = 0;
  APUnitTestInput = 0;
  ResultPercentage = 0;
  showElement("APAssignments");
  showElement("APAssignments2");
  showElement("APSessions");
  showElement("APSessions2");
  showElement("APParticipation");
  showElement("APParticipation2");
  showElement("APUnitTest");
  showElement("APUnitTest2");
  showElement("APResult");
  showElement("APUnitTest");
  showElement("APUnitTest2");
  showElement("APResultUserView");
  showElement("APResultUser");
  showElement("APResultPercentage");
  showElement("GradeAP");
  showElement("APGradeLetter");
  setText("APResult", "");
  setText("APResultPercentage", "");
  setText("APGradeLetter", "");
  setText("APAssignments", "");
  setText("APSessions", "");
  setText("APParticipation", "");
  setText("APUnitTest", "");
  APSubjectCalc = getText("SubjectChooseAPPortfolio");
     if (APSubjectCalc != "AP Seminar" 
    && APSubjectCalc != "AP Research") {
      APAssignments = (AssignmentsGeneral2 / 100);
      APSessions = (AttendanceGeneral2 / 100);
      APParticipation = (ParticipationGeneral2 / 100);
      APUnitTest = (UnitTestGeneral2 / 100);
      TotalAP = 40;
      showElement("APGradeLetter");
      setText("APResultUserView", "Result out of 40");
      showElement("GradeAP");
    } else if (APSubjectCalc === "AP Seminar") {
      APAssignments = (AssignmentsSeminar2 / 100);
      APSessions = (AttendanceSeminar2 / 100);
      APParticipation = (ParticipationSeminar2 / 100);
      APUnitTest = (UnitTestSeminar2 / 100);
      TotalAP = 30;
      setText("APResultUserView", "Result out of 30");
      hideElement("APGradeLetter");
      hideElement("GradeAP");
    }
});



var APAssignmentsInput, APSessionsInput, APParticipationInput;
var APUnitTestInput, ResultPercentage;

onEvent("APAssignments", "input", function () {
  var assignmentsInput = getText("APAssignments").trim(); // Trim whitespace from input
  if (assignmentsInput === "" || isNaN(Number(assignmentsInput)) || parseFloat(assignmentsInput) > 100 || parseFloat(assignmentsInput) < 0) {
    APAssignmentsInput = 0;
    setText("APAssignments", "");
  } else {
    APAssignmentsInput = getNumber("APAssignments");
  }
  APAssignmentsOutput = APAssignmentsInput * APAssignments;
  ResultAP();
});

onEvent("APSessions", "input", function () {
  var sessionsInput = getText("APSessions").trim(); // Trim whitespace from input
  if (sessionsInput === "" || isNaN(Number(sessionsInput)) || parseFloat(sessionsInput) > 100 || parseFloat(sessionsInput) < 0) {
    APSessionsInput = 0;
    setText("APSessions", "");
  } else {
    APSessionsInput = getNumber("APSessions");
  }
  APSessionsOutput = APSessionsInput * APSessions;
  ResultAP();
});

onEvent("APParticipation", "input", function () {
  var participationInput = getText("APParticipation").trim(); // Trim whitespace from input
  if (participationInput === "" || isNaN(Number(participationInput)) || parseFloat(participationInput) > 100 || parseFloat(participationInput) < 0) {
    APParticipationInput = 0;
    setText("APParticipation", "");
  } else {
    APParticipationInput = getNumber("APParticipation");
  }
  APParticipationOutput = APParticipationInput * APParticipation;
  ResultAP();
});

onEvent("APUnitTest", "input", function () {
  var unitTestInput = getText("APUnitTest").trim(); // Trim whitespace from input
  if (unitTestInput === "" || isNaN(Number(unitTestInput)) || parseFloat(unitTestInput) > 100 || parseFloat(unitTestInput) < 0) {
    APUnitTestInput = 0;
    setText("APUnitTest", "");
  } else {
    APUnitTestInput = getNumber("APUnitTest");
  }
  APUnitTestOutput = APUnitTestInput * APUnitTest;
  ResultAP();
});

var GradeLetter40;

function ResultAP () {
  Result12 = (APAssignmentsOutput + APSessionsOutput);
  console.log(Result12);
  Result34 = (APParticipationOutput + APUnitTestOutput);
  console.log(Result34);
  Result1234 = Result12 + Result34;
  console.log(Result1234);
  Result1234 = Result1234.toFixed(3);
  setText("APResult", Result1234);
  ResultPercentage = (Result1234/TotalAP)*100;
  ResultPercentage = ResultPercentage.toFixed(3);
  console.log(ResultPercentage);
  setText("APResultPercentage", ResultPercentage + "%");
  GradeLetter40 = getNumber("APResult");
  if (GradeLetter40 >= 36 && GradeLetter40 <= 40) {
  setText("APGradeLetter", "A");
} else if (GradeLetter40 >= 32 && GradeLetter40 < 36) {
  setText("APGradeLetter", "B");
} else if (GradeLetter40 >= 28 && GradeLetter40 < 32) {
  setText("APGradeLetter", "C");
} else if (GradeLetter40 >= 24 && GradeLetter40 < 28) {
  setText("APGradeLetter", "D");
} else if (GradeLetter40 >= 0 && GradeLetter40 < 24) {
  setText("APGradeLetter", "F");
}
}

onEvent("ResetAPPortfolio", "click", function ( ) {
  setScreen("Services");
APSubjectCalc = 0;
  APAssignmentsOutput = 0;
  APSessionsOutput = 0;
  APParticipationOutput = 0;
  APUnitTestOutput = 0;
  Result12 = 0;
  Result34 = 0;
  Result1234 = 0;
  APAssignments = 0;
  APSessions = 0;
  APParticipation = 0;
  APUnitTest = 0;
  TotalAP = 0;
  APAssignmentsInput = 0;
  APSessionsInput = 0;
  APParticipationInput = 0;
  APUnitTestInput = 0;
  ResultPercentage = 0;
  hideElement("APAssignments");
  hideElement("APAssignments2");
  hideElement("APSessions");
  hideElement("APSessions2");
  hideElement("APParticipation");
  hideElement("APParticipation2");
  hideElement("APUnitTest");
  hideElement("APUnitTest2");
  hideElement("APResult");
  hideElement("APUnitTest");
  hideElement("APUnitTest2");
  hideElement("APResultUserView");
  hideElement("APResultUser");
  hideElement("APResultPercentage");
  hideElement("GradeAP");
  hideElement("APGradeLetter");
  setText("APResult", "");
  setText("APResultPercentage", "");
  setText("APGradeLetter", "");
  setText("APAssignments", "");
  setText("APSessions", "");
  setText("APParticipation", "");
  setText("APUnitTest", "");  
  setText("SubjectChooseAPPortfolio", "");
});

onEvent("APUnitTestAdmin", "click", function () {
  setScreen("UnitTestAdmin");
  
Max5UnitTest2 = getKeyValue("Max5UnitTest", function (Max5UnitTests) {
    Max5UnitTest2 = Max5UnitTests;
});
Min5UnitTest2 = getKeyValue("Min5UnitTest", function (Min5UnitTests) {
    Min5UnitTest2 = Min5UnitTests;
});
Max4UnitTest2 = getKeyValue("Max4UnitTest", function (Max4UnitTests) {
    Max4UnitTest2 = Max4UnitTests;
});
Min4UnitTest2 = getKeyValue("Min4UnitTest", function (Min4UnitTests) {
    Min4UnitTest2 = Min4UnitTests;
});
Max3UnitTest2 = getKeyValue("Max3UnitTest", function (Max3UnitTests) {
    Max3UnitTest2 = Max3UnitTests;
});
Min3UnitTest2 = getKeyValue("Min3UnitTest", function (Min3UnitTests) {
    Min3UnitTest2 = Min3UnitTests;
});
Max2UnitTest2 = getKeyValue("Max2UnitTest", function (Max2UnitTests) {
    Max2UnitTest2 = Max2UnitTests;
});
Min2UnitTest2 = getKeyValue("Min2UnitTest", function (Min2UnitTests) {
    Min2UnitTest2 = Min2UnitTests;
});
Max1UnitTest2 = getKeyValue("Max1UnitTest", function (Max1UnitTests) {
    Max1UnitTest2 = Max1UnitTests;
});
Min1UnitTest2 = getKeyValue("Min1UnitTest", function (Min1UnitTests) {
    Min1UnitTest2 = Min1UnitTests;
});

Score5Unit2 = getKeyValue("Score5Unit", function (Score5Units2) {
    Score5Unit2 = Score5Units2;
});

Score5Unit2 = getKeyValue("Score5Unit", function (Score5Units2) {
    Score5Unit2 = Score5Units2;
});
Score4Unit2 = getKeyValue("Score4Unit", function (Score4Units2) {
    Score4Unit2 = Score4Units2;
});
Score3Unit2 = getKeyValue("Score3Unit", function (Score3Units2) {
    Score3Unit2 = Score3Units2;
});
Score2Unit2 = getKeyValue("Score2Unit", function (Score2Units2) {
    Score2Unit2 = Score2Units2;
});
Score1Unit2 = getKeyValue("Score1Unit", function (Score1Units2) {
    Score1Unit2 = Score1Units2;
});
});


onEvent("APPortfolioAdmin", "click", function () {
  setScreen("AdminPortfolio");
   
AssignmentsGeneral2 = getKeyValue("AssignmentsGeneral", function (AssignmentsGenerals2) {
    AssignmentsGeneral2 = AssignmentsGenerals2;
});

AttendanceGeneral2 = getKeyValue("AttendanceGeneral", function (AttendanceGenerals2) {
    AttendanceGeneral2 = AttendanceGenerals2;
});

ParticipationGeneral2 = getKeyValue("ParticipationGeneral", function (ParticipationGenerals2) {
    ParticipationGeneral2 = ParticipationGenerals2;
});

UnitTestGeneral2 = getKeyValue("UnitTestGeneral", function (UnitTestGenerals2) {
    UnitTestGeneral2 = UnitTestGenerals2;
});

AssignmentsSeminar2 = getKeyValue("AssignmentsSeminar", function (AssignmentSeminar2) {
    AssignmentsSeminar2 = AssignmentSeminar2;
});

AttendanceSeminar2 = getKeyValue("AttendanceSeminar", function (AttendancesSeminar2) {
    AttendanceSeminar2 = AttendancesSeminar2;
});

ParticipationSeminar2 = getKeyValue("ParticipationSeminar", function (ParticipationsSeminar2) {
    ParticipationSeminar2 = ParticipationsSeminar2;
});

UnitTestSeminar2 = getKeyValue("UnitTestSeminar", function (UnitTestsSeminar2) {
    UnitTestSeminar2 = UnitTestsSeminar2;
});
});


// --------------------------- Service Cumulative GPA Calculator-------------------\\
var GPACalculateCumu, GPAAverage, GPA9, GPA10, GPA11, GPA12, GPAComposite, GPACompo,
PercentCompositeGPA;
setText("GPADropbox", "");

onEvent("GPADropbox", "change", function () {
  GPA9 = 0;
  GPA10 = 0;
  GPA11 = 0;
  GPA12 = 0;
  showElement("GPA9");
  showElement("PercentCum");
  showElement("GPACum");
  showElement("GPA10");
  showElement("GPA11");
  showElement("GPA12");
  showElement("C1");
  showElement("C2");
  showElement("C3");
  showElement("C4");
  setText("GPA9", "");
  setText("GPA10", "");
  setText("GPA11", "");
  setText("GPA12", "");
  setText("GPACum", "");
  setText("PercentCum", "");
  GPACalculateCumu = getText("GPADropbox");
  
  if (GPACalculateCumu === "1 Year (Grade 9)") {
    GPAAverage =1;
    hideElement("GPA10");
    hideElement("GPA11");
    hideElement("GPA12");
    showElement("GPA9");
    GPA10 = 0;
    GPA11 = 0;
    GPA12 = 0;
  } else if (GPACalculateCumu === "2 Years (Grade 9 - 10)") {
    GPAAverage =2;
    showElement("GPA9");
    showElement("GPA10");
    hideElement("GPA11");
    hideElement("GPA12");
    GPA11 = 0;
    GPA12 = 0;
  } else if (GPACalculateCumu === "3 Years (Grade 9 - 11)") {
    GPAAverage =3;
    showElement("GPA9");
    showElement("GPA10");
    showElement("GPA11");
    hideElement("GPA12");
    GPA12 = 0;
  } else if (GPACalculateCumu === "4 Years (Grade 9 - 12)") {
    GPAAverage =4;
    showElement("GPA9");
    showElement("GPA10");
    showElement("GPA11");
    showElement("GPA12");
  } 
});


onEvent("GPA9", "input", function () {
  var GPA9Input = getText("GPA9").trim(); // Trim whitespace from input
  if (GPA9Input === "" || isNaN(Number(GPA9Input)) || parseFloat(GPA9Input) > 5 || parseFloat(GPA9Input) < 0) {
    GPA9 = 0;
    setText("GPA9", "");
  } else {
    GPA9 = getNumber("GPA9");
  }
  GPACumulative();
});

onEvent("GPA10", "input", function () {
  var GPA10Input = getText("GPA10").trim(); // Trim whitespace from input
  if (GPA10Input === "" || isNaN(Number(GPA10Input)) || parseFloat(GPA10Input) > 5 || parseFloat(GPA10Input) < 0) {
    GPA10 = 0;
    setText("GPA10", "");
  } else {
    GPA10 = getNumber("GPA10");
  }
  GPACumulative();
});

onEvent("GPA11", "input", function () {
  var GPA11Input = getText("GPA11").trim(); // Trim whitespace from input
  if (GPA11Input === "" || isNaN(Number(GPA11Input)) || parseFloat(GPA11Input) > 5 || parseFloat(GPA11Input) < 0) {
    GPA11 = 0;
    setText("GPA11", "");
  } else {
    GPA11 = getNumber("GPA11");
  }
  GPACumulative();
});

onEvent("GPA12", "input", function () {
  var GPA12Input = getText("GPA12").trim(); // Trim whitespace from input
  if (GPA12Input === "" || isNaN(Number(GPA12Input)) || parseFloat(GPA12Input) > 5 || parseFloat(GPA12Input) < 0) {
    GPA12 = 0;
    setText("GPA12", "");
  } else {
    GPA12 = getNumber("GPA12");
  }
  GPACumulative();
});

  
  function GPACumulative () {
    GPAComposite = (GPA9 + GPA10) + (GPA11 + GPA12);
    GPAComposite = GPAComposite.toFixed(2);
    GPACompo = (GPAComposite/GPAAverage);
    GPACompo = GPACompo.toFixed(2);
    setText("GPACum", GPACompo);
    PercentCompositeGPA = ((GPACompo*20) + 20);
    PercentCompositeGPA = PercentCompositeGPA.toFixed(2);
    setText("PercentCum", PercentCompositeGPA);
  }




onEvent("ResetCumu", "click", function () {
  GPA9 = 0;
  GPA10 = 0;
  GPA11 = 0;
  GPA12 = 0;
  hideElement("GPA9");
  hideElement("GPA10");
  hideElement("GPA11");
  hideElement("GPA12");
  hideElement("C1");
  hideElement("C2");
  hideElement("C3");
  hideElement("C4");
  hideElement("PercentCum");
  hideElement("GPACum");
  
  setText("GPA9", "");
  setText("GPA10", "");
  setText("GPA11", "");
  setText("GPA12", "");
  setText("GPACum", "");
  setText("GPADropbox", "");
  setText("PercentCum", "");
});

// ----------- Pre-AP Portfolio Calc-------------------////
var PreAPSubjectCalc, 
PreAPAttendance, PreAPParticipation, PreAPPopQuiz, PreAPHomework, PreAPTest,
PreAPLab, PreAPProject, TotalPreAP, PreAPAttendanceOutput, PreAPParticipationOutput,
PreAPPopQuizOutput, PreAPHomeworkOutput, PreAPTestOutput, PreAPLabOutput, PreAPProjectOutput, 
PreAPAttendance2, PreAPParticipation2, PreAPPopQuiz2, PreAPHomework2,
PreAPTest2, PreAPLab2, PreAPProject2;


onEvent("YesProject", "click", function () {
    hideElement("YesProject");
    showElement("NoProject");
    hideElement("PreApProject");
    TotalPreAP = TotalPreAP - (PreAPProject * 100);
    setText("PreAPResultUserView", "Result out of " + TotalPreAP);
    PreAPProject = 0;
});

onEvent("NoProject", "click", function () {
    showElement("YesProject");
    hideElement("NoProject");
    showElement("PreApProject");
      if (PreAPSubjectCalc === "Pre-AP Science Course") {
    PreAPProject = 0.15;
  }  else if (PreAPSubjectCalc === "Pre-AP Math Course" 
  || PreAPSubjectCalc === "Pre-AP English Course"
  || PreAPSubjectCalc === "Other Pre-AP Course"
  ) {
    PreAPProject = 0.20;
  } 
  TotalPreAP = TotalPreAP + (PreAPProject * 100);
  setText("PreAPResultUserView", "Result out of " + TotalPreAP);
});

onEvent("BackSettings3", "click", function () {
    setScreen("PreAPPortfolioCalc");
});

onEvent("SettingsPreAP", "click", function () {
  setScreen("PreAPSettings");
});

onEvent("SubjectChoosePreAPPortfolio", "change", function () {
  showElement("SettingsPreAP");
  hideElement("NoProject");
  showElement("YesProject");
  showElement("SettingsPreAP");
  PreAPSubjectCalc = 0;
  PreAPAttendance = 0;
  PreAPParticipation = 0;
  PreAPPopQuiz = 0;
  PreAPHomework = 0;
  PreAPTest = 0;
  PreAPLab = 0;
  PreAPProject = 0;
  TotalPreAP = 0;
  PreAPAttendanceOutput = 0;
  PreAPParticipationOutput = 0;
  PreAPPopQuizOutput = 0;
  PreAPHomeworkOutput = 0;
  PreAPTestOutput = 0;
  PreAPLabOutput = 0;
  PreAPProjectOutput = 0;
  PreAPAttendance2 = 0;
  PreAPParticipation2 = 0;
  PreAPPopQuiz2 = 0;
  PreAPHomework2 = 0;
  PreAPTest2 = 0;
  PreAPLab2 = 0;
  PreAPProject2 = 0;
  PreResult12 = 0;
  PreResult34 = 0;
  PreResult56 = 0;
  PreResult7 = 0;
  PreResultFinal = 0;
  PreResultPercentage = 0;
  showElement("PreApHomework");
  showElement("PreApAttendance");
  showElement("PreApParticipation");
  showElement("PreApPopQuiz");
  showElement("PreApTest");
  showElement("PreApProject");
  showElement("PreApLab");
  showElement("PreAPResult");
  showElement("PreAPResultUserView");
  showElement("PreAPResultUser");
  showElement("PreAPResultPercentage");
  showElement("GradePreAP");
  showElement("PreAPGradeLetter");
  setText("PreAPResult", "");
  setText("PreAPResultPercentage", "");
  setText("PreAPGradeLetter", "");
  setText("PreApHomework", "");
  setText("PreApAttendance", "");
  setText("PreApParticipation", "");
  setText("PreApPopQuiz", "");
  setText("PreApTest", "");
  setText("PreApLab", "");
  setText("PreApProject", "");
  
  PreAPSubjectCalc = getText("SubjectChoosePreAPPortfolio");
  if (PreAPSubjectCalc === "Pre-AP Science Course") {
    PreAPAttendance = 0.05;
    PreAPParticipation = 0.08;
    PreAPHomework= 0.10;
    PreAPPopQuiz = 0.10;
    PreAPTest = 0.2;
    PreAPLab = 0.07;
    PreAPProject = 0.15;
    TotalPreAP = 75;
    showElement("PreAPGradeLetter");
    setText("PreAPResultUserView", "Result out of 75");
    showElement("PreApLab");
    showElement("GradePreAP");
  }  else if (PreAPSubjectCalc === "Pre-AP Math Course" 
  || PreAPSubjectCalc === "Pre-AP English Course"
  || PreAPSubjectCalc === "Other Pre-AP Course"
  ) {
    PreAPAttendance = 0.05;
    PreAPParticipation = 0.08;
    PreAPHomework= 0.12;
    PreAPPopQuiz = 0.10;
    PreAPTest = 0.2;
    PreAPLab = 0;
    PreAPProject = 0.20;
    TotalPreAP = 75;
    showElement("PreAPGradeLetter");
    hideElement("PreApLab");
    
    setText("PreAPResultUserView", "Result out of 75");
    showElement("GradePreAP");
  } 
});

onEvent("PreApHomework", "input", function () {
  var homeworkInput = getText("PreApHomework").trim(); // Trim whitespace from input
  if (homeworkInput === "" || isNaN(Number(homeworkInput))) {
    PreAPHomework2 = 0;
    setText("PreApHomework", "");
  } else {
    PreAPHomework2 = getNumber("PreApHomework");
  }
  PreAPHomeworkOutput = PreAPHomework2 * PreAPHomework;
  ResultPreAP();
});

onEvent("PreApParticipation", "input", function () {
  var participationInput = getText("PreApParticipation").trim(); // Trim whitespace from input
  if (participationInput === "" || isNaN(Number(participationInput))) {
    PreAPParticipation2 = 0;
    setText("PreApParticipation", "");
  } else {
    PreAPParticipation2 = getNumber("PreApParticipation");
  }
  PreAPParticipationOutput = PreAPParticipation2 * PreAPParticipation;
  ResultPreAP();
});

onEvent("PreApAttendance", "input", function () {
  var attendanceInput = getText("PreApAttendance").trim(); // Trim whitespace from input
  if (attendanceInput === "" || isNaN(Number(attendanceInput))) {
    PreAPAttendance2 = 0;
    setText("PreApAttendance", "");
  } else {
    PreAPAttendance2 = getNumber("PreApAttendance");
  }
  PreAPAttendanceOutput = PreAPAttendance2 * PreAPAttendance;
  ResultPreAP();
});

onEvent("PreApPopQuiz", "input", function () {
  var popQuizInput = getText("PreApPopQuiz").trim(); // Trim whitespace from input
  if (popQuizInput === "" || isNaN(Number(popQuizInput))) {
    PreAPPopQuiz2 = 0;
    setText("PreApPopQuiz", "");
  } else {
    PreAPPopQuiz2 = getNumber("PreApPopQuiz");
  }
  PreAPPopQuizOutput = PreAPPopQuiz2 * PreAPPopQuiz;
  ResultPreAP();
});

onEvent("PreApTest", "input", function () {
  var testInput = getText("PreApTest").trim(); // Trim whitespace from input
  if (testInput === "" || isNaN(Number(testInput))) {
    PreAPTest2 = 0;
    setText("PreApTest", "");
  } else {
    PreAPTest2 = getNumber("PreApTest");
  }
  PreAPTestOutput = PreAPTest2 * PreAPTest;
  ResultPreAP();
});

onEvent("PreApProject", "input", function () {
  var projectInput = getText("PreApProject").trim(); // Trim whitespace from input
  if (projectInput === "" || isNaN(Number(projectInput))) {
    PreAPProject2 = 0;
    setText("PreApProject", "");
  } else {
    PreAPProject2 = getNumber("PreApProject");
  }
  PreAPProjectOutput = PreAPProject2 * PreAPProject;
  ResultPreAP();
});

onEvent("PreApLab", "input", function () {
  var labInput = getText("PreApLab").trim(); // Trim whitespace from input
  if (labInput === "" || isNaN(Number(labInput))) {
    PreAPLab2 = 0;
    setText("PreApLab", "");
  } else {
    PreAPLab2 = getNumber("PreApLab");
  }
  PreAPLabOutput = PreAPLab2 * PreAPLab;
  ResultPreAP();
});

var PreResult12, PreResult34, PreResult56, PreResult7, PreResultFinal;
var PreResultPercentage;
function ResultPreAP () {
  PreResult12 = (PreAPAttendanceOutput + PreAPParticipationOutput);
  console.log(PreResult12);
  PreResult34 = (PreAPHomeworkOutput + PreAPPopQuizOutput);
  console.log(PreResult34);
  PreResult56 = (PreAPTestOutput + PreAPProjectOutput);
  console.log(PreResult56);
  PreResult7 = (PreAPLabOutput);
  console.log(PreResult7);
  PreResultFinal = PreResult12 + PreResult34 + PreResult56 + PreResult7;
  console.log(PreResultFinal);
  PreResultFinal = PreResultFinal.toFixed(3);
  setText("PreAPResult", PreResultFinal);
  PreResultPercentage = (PreResultFinal/TotalPreAP)*100;
  PreResultPercentage = PreResultPercentage.toFixed(3);
  console.log(PreResultPercentage);
  setText("PreAPResultPercentage", PreResultPercentage + "%");
}

onEvent("PreAPPortfolioCalcHome", "click", function () {
   if (Mode === 1) {
     setScreen("Services");
   } else {
     setScreen("Services2");
   }
});

onEvent("ResetPreAP", "click", function () {
  hideElement("NoProject");
  showElement("YesProject");
  hideElement("SettingsPreAP");
  PreAPSubjectCalc = 0;
  PreAPAttendance = 0;
  PreAPParticipation = 0;
  PreAPPopQuiz = 0;
  PreAPHomework = 0;
  PreAPTest = 0;
  PreAPLab = 0;
  PreAPProject = 0;
  TotalPreAP = 0;
  PreAPAttendanceOutput = 0;
  PreAPParticipationOutput = 0;
  PreAPPopQuizOutput = 0;
  PreAPHomeworkOutput = 0;
  PreAPTestOutput = 0;
  PreAPLabOutput = 0;
  PreAPProjectOutput = 0;
  PreAPAttendance2 = 0;
  PreAPParticipation2 = 0;
  PreAPPopQuiz2 = 0;
  PreAPHomework2 = 0;
  PreAPTest2 = 0;
  PreAPLab2 = 0;
  PreAPProject2 = 0;
  PreResult12 = 0;
  PreResult34 = 0;
  PreResult56 = 0;
  PreResult7 = 0;
  PreResultFinal = 0;
  PreResultPercentage = 0;
  hideElement("PreApHomework");
  hideElement("PreApAttendance");
  hideElement("PreApParticipation");
  hideElement("PreApPopQuiz");
  hideElement("PreApTest");
  hideElement("PreApProject");
  hideElement("PreApLab");
  hideElement("PreAPResult");
  hideElement("PreAPResultUserView");
  hideElement("PreAPResultUser");
  hideElement("PreAPResultPercentage");
  hideElement("GradePreAP");
  hideElement("PreAPGradeLetter");
  setText("PreAPResult", "");
  setText("PreAPResultPercentage", "");
  setText("PreAPGradeLetter", "");
  setText("PreApHomework", "");
  setText("PreApAttendance", "");
  setText("PreApParticipation", "");
  setText("PreApPopQuiz", "");
  setText("PreApTest", "");
  setText("PreApLab", "");
  setText("PreApProject", "");
  setText("SubjectChoosePreAPPortfolio", "");
  
  
});


  
  
}, 100);

onEvent("Admin2", "keydown", function(event) {
    if (event.key === "Enter") {
        console.log("Enter key pressed");
        // Add your desired functionality here
    }
});


onEvent("HomeAdmin2", "click", function( ) {
	setScreen("MockASK");
});


onEvent("BackUnitNoteTest", "click", function () {
  setScreen("UnitTestAdmin");
});

onEvent("NoteUnitTest", "click", function () {
  setScreen("NoteScreen");
});







//            Kuwait University Admission GPA Score 

setText("CollegeSelection", "");
onEvent("KUGPA", "click", function () {
  setScreen("KUGPAScreen");
});
onEvent("E1", "click", function () {
  setScreen("KUGPAScreen");
});
onEvent("E2", "click", function () {
  setScreen("KUGPAScreen");
});



/* onEvent("APAssignments", "input", function () {
  var assignmentsInput = getText("APAssignments").trim(); // Trim whitespace from input
  if (assignmentsInput === "" || isNaN(Number(assignmentsInput)) || parseFloat(assignmentsInput) > 100 || parseFloat(assignmentsInput) < 0) {
    APAssignmentsInput = 0;
    setText("APAssignments", "");
  } else {
    APAssignmentsInput = getNumber("APAssignments");
  }
  APAssignmentsOutput = APAssignmentsInput * APAssignments;
  ResultAP();
}); */


var CumulativeGPAWeight = 0;
var EnglishWeight =0;
var ArabicWeight = 0;
var MathWeight = 0;
var WhichCollege = "";
var CumulativeGPA2 = 0;

onEvent("CollegeSelection", "change", function () {
  setText("CumulativeGPA", "");
setText("ENGTEST", "");
setText("MATHTEST", "");
setText("ARTEST", "");
setText("CollegeScorePoints", "");
setText("TotalPercetnage", "");
  CumulativeGPAWeight = 0;
EnglishWeight =0;
ArabicWeight = 0;
MathWeight = 0;
WhichCollege = "";
CumulativeGPA2 = 0;
Totals = 0;
ENGTestInput = 0;
MathTestInput = 0;
ArabicTestInput = 0;
PercentGPA2 = 0;


  hideElement("button251");
  hideElement("button252");
  hideElement("button253");
  hideElement("button254");
  hideElement("CumulativeGPA");
  hideElement("ENGTEST");
  hideElement("MATHTEST");
  hideElement("ARTEST");
  hideElement("text_area27");
  hideElement("text_area32");
  hideElement("CollegeScorePoints");
  hideElement("TotalPercetnage");
  WhichCollege = getText("CollegeSelection");
  
 if (WhichCollege === "Medicine - الطب") {
    CumulativeGPAWeight = 0.75;
    EnglishWeight = 0.15;
    MathWeight = 0.1;
    showElement("button251");
    showElement("button252");
    showElement("button253");
    
    showElement("CumulativeGPA");
    showElement("ENGTEST");
    showElement("MATHTEST");
    
    showElement("text_area27");
    showElement("text_area32");
    showElement("CollegeScorePoints");
    showElement("TotalPercetnage");
    
} else if (WhichCollege === "Dental Medicine - طب الأسنان") {
    CumulativeGPAWeight = 0.75;
    EnglishWeight = 0.15;
    MathWeight = 0.1;
     showElement("button251");
    showElement("button252");
    showElement("button253");
    
    showElement("CumulativeGPA");
    showElement("ENGTEST");
    showElement("MATHTEST");
    
    showElement("text_area27");
    showElement("text_area32");
    showElement("CollegeScorePoints");
    showElement("TotalPercetnage");
    
} else if (WhichCollege === "Pharmacy - الصيدلة") {
    CumulativeGPAWeight = 0.70;
    EnglishWeight = 0.15;
    MathWeight = 0.15;
     showElement("button251");
    showElement("button252");
    showElement("button253");
    
    showElement("CumulativeGPA");
    showElement("ENGTEST");
    showElement("MATHTEST");
    
    showElement("text_area27");
    showElement("text_area32");
    showElement("CollegeScorePoints");
    showElement("TotalPercetnage");
    
} else if (WhichCollege === "Public Health - الصحة العامة") {
    CumulativeGPAWeight = 0.70;
    EnglishWeight = 0.15;
    MathWeight = 0.15;
    
     showElement("button251");
    showElement("button252");
    showElement("button253");
    
    showElement("CumulativeGPA");
    showElement("ENGTEST");
    showElement("MATHTEST");
    
    showElement("text_area27");
    showElement("text_area32");
    showElement("CollegeScorePoints");
    showElement("TotalPercetnage");
    
} else if (WhichCollege === "Allied Health Sciences - العلوم الطبية المساعدة") {
    CumulativeGPAWeight = 0.70;
    EnglishWeight = 0.20;
    MathWeight = 0.10;
    
     showElement("button251");
    showElement("button252");
    showElement("button253");
    
    showElement("CumulativeGPA");
    showElement("ENGTEST");
    showElement("MATHTEST");
    
    showElement("text_area27");
    showElement("text_area32");
    showElement("CollegeScorePoints");
    showElement("TotalPercetnage");
    
} else if (WhichCollege === "Engineering and Petroleum - الهندسة والبترول") {
    CumulativeGPAWeight = 0.65;
    EnglishWeight = 0.15;
    MathWeight = 0.20;
    
     showElement("button251");
    showElement("button252");
    showElement("button253");
    
    showElement("CumulativeGPA");
    showElement("ENGTEST");
    showElement("MATHTEST");
    
    showElement("text_area27");
    showElement("text_area32");
    showElement("CollegeScorePoints");
    showElement("TotalPercetnage");
    
} else if (WhichCollege === "Architecture - العمارة") {
    CumulativeGPAWeight = 0.70;
    EnglishWeight = 0.15;
    MathWeight = 0.15;
    
     showElement("button251");
    showElement("button252");
    showElement("button253");
    
    showElement("CumulativeGPA");
    showElement("ENGTEST");
    showElement("MATHTEST");
    
    showElement("text_area27");
    showElement("text_area32");
    showElement("CollegeScorePoints");
    showElement("TotalPercetnage");
    
} else if (WhichCollege === "Biological Sciences - العلوم الحياتية") {
    CumulativeGPAWeight = 0.70;
    EnglishWeight = 0.15;
    MathWeight = 0.15;
    
     showElement("button251");
    showElement("button252");
    showElement("button253");
    
    showElement("CumulativeGPA");
    showElement("ENGTEST");
    showElement("MATHTEST");
    
    showElement("text_area27");
    showElement("text_area32");
    showElement("CollegeScorePoints");
    showElement("TotalPercetnage");
    
    
} else if (WhichCollege === "Business Administration - العلوم الإدارية") {
    CumulativeGPAWeight = 0.70;
    EnglishWeight = 0.15;
    MathWeight = 0.15;
     showElement("button251");
    showElement("button252");
    showElement("button253");
    
    showElement("CumulativeGPA");
    showElement("ENGTEST");
    showElement("MATHTEST");
    
    showElement("text_area27");
    showElement("text_area32");
    showElement("CollegeScorePoints");
    showElement("TotalPercetnage");
    
} else if (WhichCollege === "Education (Science) - التربية (علمي)") {
    CumulativeGPAWeight = 0.80;
    EnglishWeight = 0.075;
    MathWeight = 0.075;
    ArabicWeight = 0.05;
    
    showElement("button251");
showElement("button252");
showElement("button253");
showElement("button254");
showElement("CumulativeGPA");
showElement("ENGTEST");
showElement("MATHTEST");
showElement("ARTEST");
showElement("text_area27");
showElement("text_area32");
showElement("CollegeScorePoints");
showElement("TotalPercetnage");



} else if (WhichCollege === "Education (Arts) - التربية (أدبي)") {
    CumulativeGPAWeight = 0.80;
    EnglishWeight = 0.10;
    ArabicWeight = 0.10;
    
showElement("button251");
showElement("button252");

showElement("button254");
showElement("CumulativeGPA");
showElement("ENGTEST");

showElement("ARTEST");
showElement("text_area27");
showElement("text_area32");
showElement("CollegeScorePoints");
showElement("TotalPercetnage");
    
    
} else if (WhichCollege === "Arts and Humanities - الآداب") {
    CumulativeGPAWeight = 0.85;
    ArabicWeight = 0.15;
    
    showElement("button251");


showElement("button254");
showElement("CumulativeGPA");


showElement("ARTEST");
showElement("text_area27");
showElement("text_area32");
showElement("CollegeScorePoints");
showElement("TotalPercetnage");


} else if (WhichCollege === "English Language and Literature - الآداب/قسم اللغة الإنجليزية") {
    CumulativeGPAWeight = 0.85;
    EnglishWeight = 0.15;
    
showElement("button251");
showElement("button252");


showElement("CumulativeGPA");
showElement("ENGTEST");

showElement("text_area27");
showElement("text_area32");
showElement("CollegeScorePoints");
showElement("TotalPercetnage");
    
    
} else if (WhichCollege === "Islamic Studies - الشريعة") {
    CumulativeGPAWeight = 0.85;
    ArabicWeight = 0.15;
    
    
    showElement("button251");


showElement("button254");
showElement("CumulativeGPA");


showElement("ARTEST");
showElement("text_area27");
showElement("text_area32");
showElement("CollegeScorePoints");
showElement("TotalPercetnage");


} else if (WhichCollege === "Social Sciences - العلوم الاجتماعية") {
    CumulativeGPAWeight = 0.90;
    ArabicWeight = 0.10;
 
 showElement("button251");   
showElement("button254");
showElement("CumulativeGPA");


showElement("ARTEST");
showElement("text_area27");
showElement("text_area32");
showElement("CollegeScorePoints");
showElement("TotalPercetnage");


}

  console.log(WhichCollege);
  console.log("GPA " + CumulativeGPAWeight);
  console.log("English " + EnglishWeight);
  console.log("Math " + MathWeight);
  console.log("Arabic " + ArabicWeight);
  console.log(CumulativeGPA2);
  console.log(ENGTestInput);
  
});


onEvent("CumulativeGPA", "input", function () {
   CumulativeGPA2 = getText("CumulativeGPA").trim(); // Trim whitespace from input
  if (CumulativeGPA2 === "" || isNaN(Number(CumulativeGPA2)) || parseFloat(CumulativeGPA2) > 100 || parseFloat(CumulativeGPA2) < 0) {
    CumulativeGPA2 = 0;
    setText("CumulativeGPA", "");
  } else {
    CumulativeGPA2 = getNumber("CumulativeGPA");
    
    CumulativeGPA2 = CumulativeGPA2*CumulativeGPAWeight;
    Total ();
  } Total ();
});

var ENGTestInput = 0;
onEvent("ENGTEST", "input", function () {
   ENGTestInput = getText("ENGTEST").trim(); // Trim whitespace from input
  if (ENGTestInput === "" || isNaN(Number(ENGTestInput)) || parseFloat(ENGTestInput) > 100 || parseFloat(ENGTestInput) < 0) {
    ENGTestInput = 0;
    setText("ENGTEST", "");
  } else {
    ENGTestInput = getNumber("ENGTEST");
    
    ENGTestInput = ENGTestInput*EnglishWeight;
    Total ();
  } Total ();
});

var MathTestInput = 0;
onEvent("MATHTEST", "input", function () {
   MathTestInput = getText("MATHTEST").trim(); // Trim whitespace from input
  if (MathTestInput === "" || isNaN(Number(MathTestInput)) || parseFloat(MathTestInput) > 100 || parseFloat(MathTestInput) < 0) {
    MathTestInput = 0;
    setText("MATHTEST", "");
  } else {
    MathTestInput = getNumber("MATHTEST");
    
    MathTestInput = MathTestInput*MathWeight;
    Total ();
  } Total ();
});




var ArabicTestInput = 0;
onEvent("ARTEST", "input", function () {
   ArabicTestInput = getText("ARTEST").trim(); // Trim whitespace from input
  if (ArabicTestInput === "" || isNaN(Number(ArabicTestInput)) || parseFloat(ArabicTestInput) > 100 || parseFloat(ArabicTestInput) < 0) {
    ArabicTestInput = 0;
    setText("ARTEST", "");
  } else {
    ArabicTestInput = getNumber("ARTEST");
    
    ArabicTestInput = ArabicTestInput*ArabicWeight;
    
  } Total ();
});

var PercentGPA2 = 0;
var Totals = 0;
function Total () {
 Totals =  CumulativeGPA2 + ENGTestInput + MathTestInput + ArabicTestInput;
 Totals = Totals.toFixed(2);
  setText("TotalPercetnage", Totals + "%");
  
  
     PercentGPA2 = (Totals - 20)/20;
   PercentGPA2 = PercentGPA2.toFixed(2);
    
  
    
   
  
   setText("CollegeScorePoints", PercentGPA2);
}
  
  
  
  
onEvent("HomeKUGPA", "click", function () {
  setScreen("Services");
});



onEvent("RefreshKUGPA", "click", function () {
  
CumulativeGPAWeight = 0;
EnglishWeight =0;
ArabicWeight = 0;
MathWeight = 0;
WhichCollege = "";
CumulativeGPA2 = 0;
Totals = 0;
ENGTestInput = 0;
MathTestInput = 0;
ArabicTestInput = 0;
PercentGPA2 = 0;


setText("CumulativeGPA", "");
setText("ENGTEST", "");
setText("MATHTEST", "");
setText("ARTEST", "");
setText("CollegeScorePoints", "");
setText("TotalPercetnage", "");

setText("CollegeSelection", "");
  hideElement("button251");
  hideElement("button252");
  hideElement("button253");
  hideElement("button254");
  hideElement("CumulativeGPA");
  hideElement("ENGTEST");
  hideElement("MATHTEST");
  hideElement("ARTEST");
  hideElement("text_area27");
  hideElement("text_area32");
  hideElement("CollegeScorePoints");
  hideElement("TotalPercetnage");
  
  
});
  

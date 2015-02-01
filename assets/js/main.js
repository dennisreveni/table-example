(function() {
  var homeWorks = {
    'Program Structure': 'js-lessons/js-basics-1',
    'Functions': 'js-lessons/js-basics-2',
    'Objects and Arrays': 'js-lessons/js-basics-3',
    'Higher order functions': 'js-lessons/js-basics-4'
  };

  var githubResults = [
    {
      repo: 'js-lessons/js-basics-1',
      build: {
        movax10: 'success',
        dimavetrov: 'failure',
        vorobey9: 'failure',
        kulinichdenis: 'success',
        Sazonova: 'failure',
        asdhomer: 'success',
        lush81: 'success',
        dneprm: 'success',
        Alytar: 'success',
        dennisreveni: 'success',
        KudryashovAV: 'success',
        'dmitriy-kiriyenko': 'success'
      }
    },
    {
      repo: 'js-lessons/js-basics-2',
      build: {
       asdhomer: 'success',
       vorobey9: 'success',
       dimavetrov: 'failure',
       movax10: 'success',
       lush81: 'success',
       dennisreveni: 'success',
       Alytar: 'failure',
       dneprm: 'success',
       Sazonova: 'success',
       kulinichdenis: 'success',
       KudryashovAV: 'success',
       'dmitriy-kiriyenko': 'success',
       MsSterh: 'failure'
      }
    },
    {
      repo: 'js-lessons/js-basics-3',
      build: {
        KudryashovAV: 'success',
        'dmitriy-kiriyenko': 'success',
        MsSterh: 'success'
      }
    },
    {
      repo: 'js-lessons/js-basics-4',
      build:{
        KudryashovAV: 'success',
        'dmitriy-kiriyenko': 'success',
        MsSterh: 'failure'
      }
    }
  ];

  var students = [
    { Name: 'Douglas Crockford', Github: 'dimavetrov' },
    { Name: 'Tony Morris', Github: 'vorobey9' },
    { Name: 'Slava Pestov', Github: 'kulinichdenis' },
    { Name: 'Graydon Hoare', Github: 'Sazonova' },
    { Name: 'Nikodemus Siivola', Github: 'asdhomer' },
    { Name: 'Max Bolingbroke', Github: 'lush81' },
    { Name: 'Daniel Spiewak', Github: 'dneprm' },
    { Name: 'Rich Hickey', Github: 'Alytar' },
    { Name: 'David Nolen', Github: 'dennisreveni' },
    { Name: 'Martin Odersky', Github: 'movax10' }
  ];

function addNewHW(students) {  //доюавляем ещё домашки
	//console.log(students);
	var student;
	for (i = 0; i < students.length; i++) {  // перебираем всех студентов...
		console.log(students[i]);
		student = students[i];
		for (var oneHome in homeWorks) { // перебираем все домашки
			var results = {};
			//console.log(homeWorks);
			for (var title in homeWorks) {
				results[title] = githubBuild(homeWorks[title], githubResults).build;
			}
			//console.log(results[oneHome][student.Github]);
			//console.log(oneHome, student.Github)
			if (results[oneHome][student.Github] == 'success'){
				student[oneHome] = 'ok';
			}else if(results[oneHome][student.Github] == 'failure'){
				student[oneHome] = 'no';
			}else{
				student[oneHome] = '-';
			}   
		}
	}
	return students;
}

function githubBuild(repoName, githubResults) {
	for (var i = 0; i < githubResults.length; i++) {
		if (githubResults[i].repo === repoName) return githubResults[i];
	}
}

//console.log(students);
var studentsTable = new Table(objectToRows(addNewHW(students))).draw();
document.getElementById('students-list').innerHTML = studentsTable;
})();

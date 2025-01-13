/// Sélection des éléments
const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const addTaskButton = document.getElementById('addTaskButton');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchDate = document.getElementById('searchDate');
const searchDateButton = document.getElementById('searchDateButton');
const lightThemeButton = document.getElementById('lightThemeButton');
const darkThemeButton = document.getElementById('darkThemeButton');
const taskList = document.getElementById('taskList');
const clearCompletedButton = document.getElementById('clearCompletedButton');

// Fonction pour ajouter une tâche
function addTask() {
    const taskText = taskInput.value.trim();
    const taskDueDate = taskDate.value;

    if (!taskText) {
        alert('Veuillez entrer une tâche avant d\'ajouter.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.textContent = taskDueDate
        ? `${taskText} (à faire avant le ${taskDueDate})`
        : taskText;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        taskItem.classList.toggle('completed', checkbox.checked);
    });

    const terminateButton = document.createElement('button');
    terminateButton.textContent = 'Terminer';
    terminateButton.className = 'terminate-button';
    terminateButton.addEventListener('click', () => {
        taskItem.classList.add('completed');
        checkbox.checked = true;
    });

    taskItem.prepend(checkbox);
    taskItem.appendChild(terminateButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
    taskDate.value = '';
}

// Fonction pour rechercher une tâche
function searchTask() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const tasks = taskList.querySelectorAll('li');
    tasks.forEach(task => {
        const taskText = task.textContent.toLowerCase();
        task.style.display = taskText.includes(searchTerm) ? '' : 'none';
    });
}

// Fonction pour rechercher une tâche par date
function searchTaskByDate() {
    const searchTermDate = searchDate.value;
    const tasks = taskList.querySelectorAll('li');
    tasks.forEach(task => {
        task.style.display = task.textContent.includes(searchTermDate) ? '' : 'none';
    });
}

// Fonction pour supprimer les tâches terminées
function clearCompletedTasks() {
    const completedTasks = taskList.querySelectorAll('li.completed');
    completedTasks.forEach(task => task.remove());
}

// Fonction pour appliquer le thème clair
function applyLightTheme() {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
}

// Fonction pour appliquer le thème sombre
function applyDarkTheme() {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
}

// Ajout des événements
addTaskButton.addEventListener('click', addTask);
searchButton.addEventListener('click', searchTask);
searchDateButton.addEventListener('click', searchTaskByDate);
clearCompletedButton.addEventListener('click', clearCompletedTasks);
lightThemeButton.addEventListener('click', applyLightTheme);
darkThemeButton.addEventListener('click', applyDarkTheme);

const generateEmployees = (employees) => {
    console.log(employees);
    const generateManager = manager => {

        return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
            <p class="card-text">${manager.id}</p>
            <a href="#" class="card-link">${manager.email}</a>
            <a href="#" class="card-link">${manager.office}</a>
        </div>
    </div>
    `;
    };

    const generateEngineer = engineerInfo => {
        if (!engineerInfo) {
            return '';
        }

        return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
            <p class="card-text">${engineer.id}</p>
            <a href="#" class="card-link">${engineer.email}</a>
            <a href="#" class="card-link">${engineer.office}</a>
        </div>
    </div>
    `;
    };

    const generateIntern = internInfo => {
        if (!internInfo) {
            return '';
        }

        return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
            <p class="card-text">${intern.id}</p>
            <a href="#" class="card-link">${intern.email}</a>
            <a href="#" class="card-link">${intern.office}</a>
        </div>
    </div>
    `;
    };
}

module.exports = templateData => {
    const { manager, engineer, intern } = templateData;

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../src/style.css">
    <title>Team Page</title>
</head>

<body>
    <div class="container">
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Team Contact Page</span>
        </div>
    </nav>

    <div class="row">
       ${generateEmployees(employees)}
    </div>
</div>

</body>

</html>
    `;
}
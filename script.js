//your code here
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Styled Assignment with JavaScript</title>
</head>
<body>
    <script>
        // Create the container div with the class 'main'
        const container = document.createElement('div');
        container.className = 'main';

        // Apply styles to the container
        container.style.width = '200px';
        container.style.backgroundColor = 'purple';
        container.style.borderLeft = '5px solid green';
        container.style.padding = '10px';

        // Create the heading element with id and class 'heading'
        const heading = document.createElement('h1');
        heading.id = 'heading';
        heading.className = 'heading';
        heading.textContent = 'This is a Heading';

        // Apply styles to the heading
        heading.style.fontSize = '20px';
        heading.style.color = 'white';
        heading.style.textDecoration = 'underline';

        // Append the heading to the container
        container.appendChild(heading);

        // Append the container to the body
        document.body.appendChild(container);
    </script>
</body>
</html>
Explanation:
window.onload = function () {
      document.querySelector(".size-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Change Size"); 
      })
      document.querySelector(".petal-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Petal Orientation"); 
      })
      document.querySelector(".flower-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Flower Orientation"); 
      })
      document.querySelector(".leaf-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Leaf Fusion"); 
      })
      document.querySelector(".growth-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Growth Habit"); 
      })
      document.querySelector(".color-button").addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Honeysuckle Color"); 
      })
    }

    document.getElementById("#small-scale-button").onclick = function() {smallHoneySuckle()};
    function smallHoneySuckle()
    {
        document.getElementById("#small-scale-button").innerHTML = 
            // here you can change also a-scene or a-entity properties, like
            // changing your 3D model source, size, position and so on
            // or you can just open links, trigger actions...
            alert("Small Honeysuckle!");     
    }

    document.getElementById("#medium-scale-button").onclick = function() {mediumHoneySuckle()};
    function mediumHoneySuckle()
    {
      document.getElementById("#medium-scale-button").innerHTML = 
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Medium Honeysuckle!");
    }

    function largeHoneySuckle()
    {
      document.getElementById("#large-scale-button").innerHTML = addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("Large Honeysuckle!");
      })
    }

    document.getElementById("#radial-button").onclick = function() {radialButton()};
    function radialButton()
    {
      document.getElementById("#radial-button").innerHTML = 
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("You chose the Radial petal orientation"); 
    }

    function two21Button()
    {
      document.getElementById("#two21-button").innerHTML = addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("You chose the 2+2+1 petal orientation"); 
      })
    }

    function four1Button()
    {
      document.getElementById("#four1-button").innerHTML = addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("You chose the 4+1 petal orientation"); 
      })
    }
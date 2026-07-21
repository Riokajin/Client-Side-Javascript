document.addEventListener("DOMContentLoaded", () => {

    // Insert student info
    document.getElementById("student-info").textContent = "Adam Evans - 100142217";

    const form = document.getElementById("pizzaForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    
        // Capture required values
        const size = document.querySelector("input[name='size']:checked")?.value;
        const thickness = document.querySelector("input[name='thickness']:checked")?.value;
        const bake = document.querySelector("input[name='bake']:checked")?.value;
        const crustBase = document.getElementById("crustBase").value;
        const cheese = document.querySelector("input[name='cheese']:checked")?.value;

        // Capture toppings
        const toppings = [...document.querySelectorAll("input[name='toppings']:checked")]
            .map(t => t.value);

        // Capture seasonings
        const seasonings = [...document.querySelectorAll("input[name='seasonings']:checked")]
            .map(s => s.value);

        // Order details
        const pickupOption = document.querySelector("input[name='pickup-option']:checked").value;
        const pickupTime = document.getElementById("pickup-time").value;
        const notes = document.getElementById("notes").value;

        // Validation
        if (!size || !thickness || !bake || !cheese) {
            alert("Please complete all required fields.");
            return;
        }

        // Create Pizza object
        const pizza = new Pizza(
            size,
            thickness,
            bake,
            crustBase,
            cheese,
            toppings,
            seasonings,
            pickupOption,
            pickupTime,
            notes
        );

        // Display description
        document.getElementById("pizzaDescription").textContent = pizza.getDescription();
    });
});
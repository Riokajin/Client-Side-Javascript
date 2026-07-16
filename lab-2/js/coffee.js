// Output container
const output = document.querySelector("#output");

/* Coffee Class (Parent)
Represents a basic coffee with size and isDecaf.
includes serveIt(), which displays a coffee cup image.
*/

class Coffee {
    constructor(size, isDecaf) {
        this.size = size;
        this.isDecaf = isDecaf;
    }

    /* serveIt()
    creates an img element representing the coffee cup, sets its size and caffeine status, and appens it to the #output. */
    serveIt() {

        // Create the IMG element
        let cup = document.createElement("img");

        // set caffeine status image
        if (this.isDecaf) {
            cup.setAttribute("src", "images/coffee-cup-green.svg");
        } else {
            cup.setAttribute("src", "images/coffee-cup.svg");
        }

        // set cup height based on size
        switch (this.size) {
            case "small":
                cup.setAttribute("height", 100);
                break;
            case "medium":
                cup.setAttribute("height", 150);
                break;
            case "large":
                cup.setAttribute("height", 200);
                break;
            default:
                cup.setAttribute("height", 150);
        }

        // Tooltip description
        cup.setAttribute(
            "title",
            `A ${this.size} ${this.isDecaf ? "decaffeinated" : "caffeinated"} Coffee`
        );

        // append the image to the page
        output.appendChild(cup);
    }
}
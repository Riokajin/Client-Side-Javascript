/*
Latte Sublass
Extends Coffee and adds milktype
Includes latteDesc(), which returns a description string. */

class Latte extends Coffee {

    constructor(size, isDecaf, milkType) {
        super(size, isDecaf);
        this.milkType = milkType;
    }

    /* latteDesc()
    returns a description of the latte including milk type. */
    latteDesc() {
        return `A ${this.size} ${this.isDecaf ? "decaffeinated" : "caffeinated"} Latte with ${this.milkType} milk`;
    }
}

// create two latte objects
let latte1 = new Latte("medium", false, "whole");
let latte2 = new Latte("large", true, "oat");

// call serveIt() on both (inherited from Coffee)
latte1.serveIt();
latte2.serveIt();

// display latteDesc() output on the page
const p1 = document.createElement("p");
p1.textContent = latte1.latteDesc();
output.appendChild(p1);

const p2 = document.createElement("p");
p2.textContent = latte2.latteDesc();
output.appendChild(p2);
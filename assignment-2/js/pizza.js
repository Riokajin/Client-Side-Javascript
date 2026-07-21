class Pizza {
    constructor(size, thickness, bake, crustBase, cheese, toppings, seasonings, pickupOption, pickupTime, notes) {
        this.size = size;
        this.thickness = thickness;
        this.bake = bake;
        this.crustBase = crustBase;
        this.cheese = cheese;
        this.toppings = toppings;
        this.seasonings = seasonings;
        this.pickupOption = pickupOption;
        this.pickupTime = pickupTime;
        this.notes = notes;
    }

    getDescription() {
        let desc = `You ordered a ${this.size} pizza with ${this.thickness} crust, baked ${this.bake}, using ${this.crustBase || "standard"} base and topped with ${this.cheese}.`;
        
        if (this.toppings.length > 0) {
            desc += ` Toppings include: ${this.toppings.join(", ")}.`;
        } else {
            desc += ` No additional toppings selected.`;
        }

        if (this.seasonings.length > 0) {
            desc += ` Seasonings: ${this.seasonings.join(", ")}.`;
        }

        if (this.pickupOption === "scheduled" && this.pickupTime) {
            desc += ` Pickup time: ${this.pickupTime}.`;
        } else {
            desc += ` Pickup: ASAP.`;
        }

        if (this.notes) {
            desc += ` Special instructions: ${this.notes}.`;
        }

        return desc;
    }
}
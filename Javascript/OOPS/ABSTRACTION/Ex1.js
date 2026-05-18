class Mobile {
  call(number) {
    this.#connectNetwork(); // hidden logic
    console.log("Calling " + number);
  }

  #connectNetwork() {
    console.log("Connecting to network...");
  }
}

let phone = new Mobile();
phone.call("9876543210");

// phone.#connectNetwork(); ❌ Not allowed


console.log("============================================================")

class Light {
  turnOn() 
  {
    this.#powerSupply();
    console.log("Light is ON 💡");
  }

  #powerSupply()
   {
    console.log("Power supply connected");
  }
}

let l = new Light();
l.turnOn();
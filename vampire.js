class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfvampires = 0;
    let currentvampires = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentvampires.creator) {
      currentvampires = currentvampires.creator;
      numberOfvampires++;
    }

    return numberOfvampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return (
      this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal
    );
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    let vampire = null;
    //console.log(this.name);
    if (this.name === name) {
      return this;
    }
    for (const offspring of this.offspring) {
      if (!vampire) {
        vampire = offspring.vampireWithName(name);
      } else {
        break;
      }
    }
    return vampire;
    /*test */

    /*    let vamp = []; // 1
    let nameVamp = [];
    if (this.name === name) {
      vamp.push(this); // 2
    }

    for (const subOffspring of this.offspring) {
      const vampireWithNameOver = subOffspring.vampireWithName(name); // 3
      vamp = vamp.concat(vampireWithNameOver);
    }

    vamp.forEach(element => {
      if (typeof element == Object) {
        console.log(`this the good one: ${element.name}`);
        nameVamp.push(element.name);
      }
    });
     if (vamp === 3) {
       return nameVamp.join();
    } else {
      return null;
    } */
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let total = 0;
      for (const offspringOne of this.offspring) {
        offspringOne.totalDescendents;
        console.log(offspringOne)
       ;
      }
      return ;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {}

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {}
}
/* */
let rootVampire;
rootVampire = new Vampire("root");
offspring1 = new Vampire("andrew");
offspring2 = new Vampire("sarah");
offspring3 = new Vampire("c");
offspring4 = new Vampire("d");
offspring5 = new Vampire("e");
rootVampire.addOffspring(offspring1);
offspring1.addOffspring(offspring2);
rootVampire.addOffspring(offspring3);
offspring3.addOffspring(offspring4);
offspring4.addOffspring(offspring5);

console.log(rootVampire.totalDescendents); 

module.exports = Vampire;

class Storage{
    constructor(items) {
       this.items = items;
      //  console.log(items);
    }

    getItems() {
       return this.items; 
   }
   
   addItem(item) {
      this.items.push(item);
   }

   removeItem(item) {
      this.items = this.items.reduce((acc, accItem) => {
         if (accItem !== item) {
            acc.push(accItem);
         }
         
         return acc;
      }, []);
   }
}

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
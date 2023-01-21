   //TASK 1

   const shoppingMallData = {
       shops: [{
               width: 10,
               length: 5
           },
           {
               width: 15,
               length: 7
           },
           {
               width: 20,
               length: 5
           },
           {
               width: 8,
               length: 10
           }
       ],
       height: 5,
       moneyPer1m3: 30,
       budget: 50000
   }

   function isBudgetEnough(shoppingMall) {

       let allShopsArea = 0;

       shoppingMall.shops.forEach((shop) => {
           allShopsArea = allShopsArea + (shop.width * shop.length);
       })

       const mallVolume = allShopsArea * shoppingMall.height;

       if ((mallVolume * shoppingMall.moneyPer1m3) <= shoppingMall.budget) {
           return "Бюджета достаточно";
       } else {
           return "Бюджета недостаточно";
       }


   }


   function isBudgetEnough(shoppingMall) {

       const {
           shops,
           height,
           moneyPer1m3,
           budget
       } = shoppingMall;

       let allShopsArea = 0;

       shops.forEach((shop) => {
           allShopsArea = allShopsArea + (shop.width * shop.length);
       })

       const mallVolume = allShopsArea * height;

       if ((mallVolume * moneyPer1m3) <= budget) {
           return "Бюджета достаточно";
       } else {
           return "Бюджета недостаточно";
       }


       //TASK 2

       const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Sergey', 'Vika'];

       function sortStudentsByGroups(arr) {
           const groupsAmount = 3;
           const gameMembers = 3;
           const finalGroups = [];
           const sortedArr = [...arr].sort((a, b) => a.toLowerCase() - b.toLowerCase());

           for (let i = 0; i < groupsAmount; i++) {
               if (!sortedArr.length) {
                   break;
               }
               finalGroups.push(sortedArr.splice(0, gameMembers));
           };
           //    const firstNine = sortedArr.splice(0, 9);
           //    while (firstNine.length) {
           //        finalGroups.push(firstNine.splice(0, 3));
           //    };
           finalGroups.push(`Оставшиеся студенты: ${sortedArr.length !== 0 ? sortedArr.join(", ") : '-'}`);
           return finalGroups;
       }
    }
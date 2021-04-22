// function fib(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }

// console.log(fib(10)); // returns 55

// function arrayLength(array, index) {
//   index = index || 0;

//   if (array[index + 1]) {
//     return arrayLength(array, index + 1);
//   } else if (index === 0) {
//     return 0;
//   } else {
//     return index + 1;
//   }
// }

// console.log(arrayLength([1, 2, 3]));
// console.log(arrayLength([]));

const car = [
    {
      title: "Car",
      subNav: [
        {
          title: "HONDA",
          path: "honda",
          subNav: [
            {
              title: "DONGFENG",
              path: "dongfeng",
              subNav: [
                { title: "NSPIRE", path: "nspire" },
                { title: "ENVIX", path: "envix" },
                { title: "CIVIC", path: "civic" },
              ],
            },
            {
              title: "GUANGQI",
              path: "guangqi",
              subNav: [
                { title: "AVANCIER", path: "avancier" },
                { title: "ACCORD", path: "accord" },
              ],
            },
          ],
        },
        {
          title: "TOYOTA",
          path: "toyota",
          subNav: [
            { title: "COROLLA", path: "corolla" },
            { title: "CAMRY", path: "camry" },
            { title: "PRADO", path: "prado" },
            { title: "ALPHARD", path: "alphard" },
          ],
        },
      ],
      path: "car",
    },
    {
      title: "Area",
      path: "area",
      subNav: [
        {
          title: "NORTH",
          path: "north",
          subNav: [
            { title: "BEIJING", path: "beijing" },
            { title: "CHANGCHU", path: "changchu" },
          ],
        },
        {
          title: "SOUTH",
          path: "south",
          subNav: [
            { title: "SHANGHAI", path: "shanghai" },
            { title: "GUANGZHOU", path: "guangzhou" },
          ],
        },
      ],
    },
    {
      title: "Country",
      path: "country",
      subNav: [
        {
          title: "CHINA",
          path: "china",
          subNav: [
            { title: "MAINLAND", path: "mainland" },
            { title: "TAIWAN", path: "taiwan" },
          ],
        },
        { title: "American", path: "american" },
      ],
    },
  ];
  
  function findNode(data, value) {
    /*** 1 title === value; return; 结束条件* 
     * 2 拿一个 ----> 对节点操作 --- 如果子节点----递归自己 // 可能找到或找不到* 
     * 3 剩下节点 ----------------------------->* 
     * 4 return null;* */

    /*** 1 title === value; return; end* 
     * 2 take a node ----> check if it is sub-node ---recursion itself // find the target or not* 
     * 3 rest of nodes -----------------------------> do the same thing* 
     * 4 return null;* */
    const node = data.slice(0, 1)[0];
    if (node.title === value) {
      return node;
    }
    if (node.subNav) {
      const result = findNode(node.subNav, value);
      if (result) {
        return result;
      }
    }
    const restNodes = data.slice(1);
    if (restNodes.length) {
      const result = findNode(restNodes, value);
      if (result) {
        return result;
      }
    }
  
    return null;
  }
  //console.log(car.slice(0,1)[0]);
  console.log(findNode(car, "SHANGHAI"));
  
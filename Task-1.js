/**
 * Input => Array range ranking, Array nilai
 * output => array rank nilai
 * Steps :
 * 1. tentukan urutan rank masing-masing range pada array 1
 * 2.
 */

const denseRank = (arr1, arr2) => {
  const ranked = [];
  const ranks = [];

  let newArr = [...new Set(arr1)];
  for (let i = 0; i < newArr.length; i++) {
    ranks.push(i + 1);
  }

  for (const score of arr2) {
    let rank = 1;
    for (const ranking of newArr) {
      if (score >= ranking) {
        ranked.push(rank);
      }
      rank++;
    }
    return ranked;
  }

  //   for (let score of arr2) {
  //     let rank = 1;
  //     for (let scoreRank of newArr) {
  //       if (score >= scoreRank) {
  //         ranked.push(rank);
  //       } else if (score < scoreRank) {
  //         rank++;
  //       }
  //       rank++;
  //       ranked.push(rank);
  //     }
  //     return ranked;
  //   }
  //   console.log(ranked);
};

console.log(denseRank([100, 100, 90, 80, 70, 60], [50, 60, 76, 80, 105]));
// console.log(denseRank());

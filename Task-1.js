/**
 * Input => Array range ranking, Array nilai
 * output => array rank nilai
 * Steps :
 * 1. tentukan urutan rank masing-masing range pada array 1
 * 2.
 */

function denseRank(leaderboard, scores) {
  let uniqueRanks = [...new Set(leaderboard)].sort((a, b) => b - a);

  let result = [];

  for (let score of scores) {
    let rank = 1;
    for (let rankScore of uniqueRanks) {
      if (score >= rankScore) {
        break;
      }
      rank++;
    }
    result.push(rank);
  }

  return result;
}

console.log(denseRank([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]));

console.log(denseRank([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]));

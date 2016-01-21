/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.findNRooksSolution = function(n) {
  var board = new Board({n:n});

  var findNSol = function(board, count, n) {
    if (count === n) {
      return board.rows();
    }
    for (var i = count; i < n; i++) {
      for (var j = 0; j < n; j++) {
        board.togglePiece(i, j);
        if (!board.hasAnyRooksConflicts()) {
          return findNSol(board, count + 1, n);
        }
        board.togglePiece(i,j);
      }
    }
  };

  for (var i = 0; i < n; i++) {
    board.togglePiece(0, i);
    if (!board.hasAnyRooksConflicts()) {
      solution = findNSol(board, 1, n);
    } else {
      board.togglePiece(0, i);
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //var solutionCount = factorial(n);
  var solutionCount = 0;

  var board = new Board({n:n});

  var findNSol = function(board, count, n) {
    if (count === n) {
      solutionCount++;
    }
    for (var i = count; i < n; i++) {
      for (var j = 0; j < n; j++) {
        board.togglePiece(i, j);
        if (!board.hasAnyRooksConflicts()) {
          findNSol(board, count + 1, n);
        }
        board.togglePiece(i,j);
      }
    }
  };

  for (var i = 0; i < n; i++) {
    board.togglePiece(0, i);
    if (!board.hasAnyRooksConflicts()) {
      findNSol(board, 1, n);
    }
    board.togglePiece(0, i);
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

 //  console.log('aaaaaa');
 //  var board = new Board({n:n});
 //  console.log(board.rows().toString())
 //  var sol;
 //  var shouldRun = true;

 //  var findNQSol = function(board, count, n) {
 //    if (n === 0 && count === 0 && sol === undefined) {
 //      sol = board.rows();
 //    }

 //    if (n === 1 && count === 0 && sol === undefined) {
 //      board.togglePiece(0,0);
 //      sol = board.rows();
 //    } 
 //    // else if (n === 1 && count === 0) {
 //    //   board.togglePiece(0,0);
 //    //   console.log('board returned ', board);
 //    //   return board.rows();
 //    // }
 //    console.log('n is equal to: ', n)
 //    console.log('count is equal to: ', count);

 //    if (count === n && sol === undefined) {
 //      console.log('the current board', board.rows());
 //      sol =  board.rows();
 //    }
 //    for (var i = 0; i < n; i++) {
 //      for (var j = 0; j < n; j++) {
 //        if (!board.get(i)[j]) {
 //          board.togglePiece(i, j);
 //          if (!board.hasAnyQueensConflicts()) {
 //            findNQSol(board, count + 1, n);
 //          }
 //          board.togglePiece(i,j);
 //        }
 //      }
 //    }
 //  }
  
 //  var solution = findNQSol(board, 0, n);
 //  //if (solution === undefined) {
 //   // return 0;
 // // }

 //  //console.log('solution: ', solution.rows().toString());
 //  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
 //  return undefined;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  // var solutionCount = n - 1;

  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  // return solutionCount;
};



//

var factorial = function(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}


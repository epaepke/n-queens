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

  var findNSol = function(board, count) {
    if (count === n) {
      return board.rows();
    }
    for (var j = 0; j < n; j++) {
      board.togglePiece(count, j);
      if (!board.hasAnyRooksConflicts()) {
        return findNSol(board, count + 1);
      }
      board.togglePiece(count, j);
    }
  };
    solution = findNSol(board, 0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //var solutionCount = factorial(n);
  if (n == 1) {
    return 1;
  }
  var solutionCount = 0;
  var board = new Board({n:n});

  var findNSol = function(board, count) {
    for (var j = 0; j < n; j++) {
      board.togglePiece(count, j);
      if (!board.hasAnyRooksConflicts()) {
        if (count + 1 === n) {
          solutionCount++;
        } else {
          findNSol(board, count + 1);
        }
      }
      board.togglePiece(count, j);
    }
  };
  
  findNSol(board, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var newBoard = new Board({n:n});
  var sol;
  var foundSolution = false;
  if (n == 1) {
    board.togglePiece(0,0);
    return board.rows();
  }

  var findNQSol = function(board, count) {
    if (!foundSolution) {
      return;
    }
    if (count === n && sol === undefined) {
      sol = board.rows().slice();
      for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
          newBoard.get(i)[j] = sol[i][j];
        }
      }
      foundSolution = true;
    } else {
    for (var j = 0; j < n; j++) {
      board.togglePiece(count, j);
      if (!board.hasAnyQueensConflicts()) {
        findNQSol(board, count + 1);
      }
      board.togglePiece(count, j);
    }
  }
  };

  findNQSol(board, 0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(sol));
  return newBoard.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n:n});
  var newBoard = new Board({n:n});
  var solutionCount = 0;
  var keepRunning = true;

  var findNQSol = function(board, count) {
    if (count === n) {
      solutionCount++;
    } else {
    for (var j = 0; j < n; j++) {
      board.togglePiece(count, j);
      if (!board.hasAnyQueensConflicts()) {
        findNQSol(board, count + 1);
      }
      board.togglePiece(count, j);
    }
  }
  };

  findNQSol(board, 0);

  if (n == 1 || n == 0) {
    solutionCount = 1;
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



//

var factorial = function(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}


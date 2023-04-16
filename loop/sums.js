//Create a function named sums that accepts a number and returns its partitions.
//A partition is a group of numbers, where the sum of the partition is equal to the number argument. Duplicate partitions are not allowed. [1, 2] and [2, 1] are considered duplicates. The array of partitions must be sorted.

function sums(n) {
    if (n < 2) return [];
    var partitions = [],
        current = [];

    function addPartition() {
        partitions.push(current.slice());
    }

    function findPartitions(start, remaining) {
        if (remaining === 0) {
            addPartition();
        } else {
            for (var i = start; i <= remaining; i++) {
                current.push(i);
                findPartitions(i, remaining - i);
                current.pop();
            }
        }
    }

    findPartitions(1, n);

    return partitions.slice(0, -1);
}

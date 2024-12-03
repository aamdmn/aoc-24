const input = await Bun.file("inputs/01.txt").text();

const firstList: number[] = [];
const secondList: number[] = [];

input.split("\n").forEach((line) => {
  if (line.trim()) {
    const [first, second] = line.split(/\s+/);
    firstList.push(Number(first));
    secondList.push(Number(second));
  }
});

let totalDistance = 0;

while (firstList.length !== 0 && secondList.length !== 0) {
  const smallestInFirst = Math.min(...firstList);
  const smallestInSecond = Math.min(...secondList);

  const result = Math.abs(smallestInFirst - smallestInSecond);

  totalDistance += result;

  const firstIndex = firstList.indexOf(smallestInFirst);
  const secondIndex = secondList.indexOf(smallestInSecond);

  firstList.splice(firstIndex, 1);
  secondList.splice(secondIndex, 1);
}

console.log(totalDistance);

const k = 3; // K = possible states
const entries = 7; // minimun sum is 0, max is 6, so we have 7 different possibilities
const totalRules = Math.pow(k, entries);

// Generate all ternary totalistic rules
function generateRules() {
  const rules = [];
  for (let i = 0; i < totalRules; i++) {
    let rule = [];
    let x = i;
    for (let j = 0; j < entries; j++) {
      rule.unshift(x % k);
      x = Math.floor(x / k);
    }
    rules.push(rule);
  }
  return rules;
}

// Apply one rule to a row
function step(row, rule) {
  const next = [];
  for (let i = 0; i < row.length; i++) {
    const left = row[(i - 1 + row.length) % row.length];
    const self = row[i];
    const right = row[(i + 1) % row.length];
    const sum = left + self + right;
    next[i] = rule[sum];
  }
  return next;
}

function simulate(rule, width, steps) {
  let row = Array(width)
    .fill(0)
    .map(() => Math.floor(Math.random() * k));
  const history = [row];
  for (let s = 1; s < steps; s++) {
    row = step(row, rule);
    history.push(row);
  }
  return history;
}

module.exports = () => {
  const rules = generateRules();
  return rules.slice(0, 5).map((rule, idx) => ({
    id: idx,
    rule,
    history: simulate(rule, 100, 50),
  }));
};

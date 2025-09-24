# ternary-totalistic-elementary-cellular-automata-statically-generated-html
statically generated site representing all rulesets of a tenary totalistic (n=3) cellular automata (CA)

# meaning
- ternary: 3 possible states
- totalistic: next state is calculated by sum of the neighbourhood
- N=3: 3 neighbours, self, right and left
- elementary: flat list. As opposed to 2d of game of life
- cellular-automata: https://en.wikipedia.org/wiki/Cellular_automaton
- statically generated html: the result is rendered as html at build time

# rule table
with a totalistic CA we don't care about the order of the neihbourhood, just the sum.
N=3, so we have 3 values, they can be 0, 1 or 2.
Minimum value: 0 + 0 + 0 = 0
Max value: 2 + 2 + 2 = 6
So we have 7 possibilities.
3 * 3 * 3 * 3 * 3 * 3 * 3 = 2187. So 2187 possible rulesets.


# plan
generate a list of each possible ruleset
use 11ty to statically render the result of each ruleset.

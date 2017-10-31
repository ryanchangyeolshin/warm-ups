function groupBy(list, key) {
  return list
    .reduce((grouped, item) => ({
      ...grouped,
      [item[key]]: item[key] in grouped ? [...grouped[item[key]], item] : [item]
    }), {})
}

const foods = [
  { name: 'broccoli', type: 'veggie' },
  { name: 'kale', type: 'veggie' },
  { name: 'cheese', type: 'dairy' },
  { name: 'chicken', type: 'meat' },
  { name: 'oats', type: 'grain' },
  { name: 'milk', type: 'dairy' },
  { name: 'yogurt', type: 'dairy' },
  { name: 'bacon', type: 'meat' }
]

console.log(groupBy(foods, 'type'))
/**
 * {
 *   veggie: [
 *     { name: 'broccoli', type: 'veggie' },
 *     { name: 'kale', type: 'veggie' }
 *   ],
 *   dairy: [
 *     { name: 'cheese', type: 'dairy' },
 *     { name: 'milk', type: 'dairy' },
 *     { name: 'yogurt', type: 'dairy' }
 *   ],
 *   meat: [
 *     { name: 'chicken', type: 'meat' },
 *     { name: 'bacon', type: 'meat' }
 *   ]
 *   grain: [
 *     { name: 'oats', type: 'grain' }
 *   ]
 * }
 */

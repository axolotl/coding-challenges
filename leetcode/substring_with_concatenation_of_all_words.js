// You are given a string, s, and a list of words, words, that are all of the same length.
// Find all starting indices of substring(s) in s that is a concatenation of each word in
// words exactly once and without any intervening characters.

// Example 1:

// Input:
//   s = "barfoothefoobarman",
//   words = ["foo","bar"]
// Output: [0,9]
// Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar" respectively.
// The output order does not matter, returning [9,0] is fine too.
// Example 2:

// Input:
//   s = "wordgoodgoodgoodbestword",
//   words = ["word","good","best","word"]
// Output: []

// function findPermutations(current, remaining, permuations) {
//   if (remaining.length === 0) {
//     console.log('adding permutation')
//     console.log(permuations)
//     permuations.push(current)
//   } else {
//     remaining.forEach(item => {
//       findPermutations(
//         current.concat(item),
//         removeInstanceFromArray(item, remaining),
//         permuations
//       )
//     })
//   }
// }

// function findSubstring(s, words) {
//   // place to store results
//   const results = []

//   // find all permuations of words
//   const permuations = []
//   findPermutations('', words, permuations)
//   const permutation_length = permuations[0].length

//   // iterate over s looking for permutations
//   for (let i = 0; i + permutation_length - 1 < s.length; i++) {
//     if (permuations.includes(s.slice(i, i + permutation_length))) {
//       results.push(i)
//     }
//   }

//   // return results
//   return results
// }

function removeInstanceFromArray(item, array) {
  const index = array.indexOf(item)
  if (index >= 0) {
    return [...array.slice(0, index), ...array.slice(index + 1)]
  } else {
    return array
  }
}

function findSubstring(s, words) {
  // handle empty case
  if (words.length == 0) {
    return []
  }

  // store results here
  const results = []

  // various useful vars
  const word_length = words[0].length // we know all words will have same length

  // start with set
  let set = [...words]

  let in_word = false
  let start_of_group = 0

  // loop over array
  for (let i = 0; i < s.length; i += in_word ? word_length : 1) {
    let chunk = s.slice(i, i + word_length)

    if (in_word) {
      // check for word in set
      if (set.includes(chunk)) {
        set = removeInstanceFromArray(chunk, set)
      } else {
        // reset i back to one before the group started
        i -= (words.length - set.length) * word_length
        // reset looker
        in_word = false
        set = [...words]
      }
      if (set.length === 0) {
        // reset i back to one before the group started
        i -= (words.length - 1) * word_length
        results.push(start_of_group)
        in_word = false
        set = [...words]
      }
    } else {
      if (set.includes(chunk)) {
        start_of_group = i
        set = removeInstanceFromArray(chunk, set)
        in_word = true
        if (set.length === 0) {
          // reset i back to one before the group started
          i -= (words.length - 1) * word_length
          results.push(start_of_group)
          in_word = false
          set = [...words]
        }
      }
    }
  }

  // return results
  return results
}

console.log(findSubstring('a', ['a'])) // should be [0]

console.log(findSubstring('barfoothefoobarman', ['foo', 'bar'])) // should be [0,9]

console.log(
  findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])
) // should be []

console.log(
  findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good'])
) // should be [8]

console.log(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])) // should be [6,9,12]

console.log(
  findSubstring('lingmindraboofooowingdingbarrwingmonkeypoundcake', [
    'fooo',
    'barr',
    'wing',
    'ding',
    'wing'
  ])
) // should be [13]

console.log(
  findSubstring(
    'pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel',
    [
      'dhvf',
      'sind',
      'ffsl',
      'yekr',
      'zwzq',
      'kpeo',
      'cila',
      'tfty',
      'modg',
      'ztjg',
      'ybty',
      'heqg',
      'cpwo',
      'gdcj',
      'lnle',
      'sefg',
      'vimw',
      'bxcb'
    ]
  )
)

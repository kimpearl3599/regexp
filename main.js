let str = `
010-3217-3599
thewisdom3592@naver.com
The dog is walking with his fox father.
https://www.
aaabbbccccdddd
한글사랑_동해물과
http://localhose:1234
`

console.log(
  str.match(/(?<=@).{1,}/g)
)
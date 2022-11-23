//https://leetcode.com/problems/intersection-of-two-arrays/

function intersection(nums1: number[], nums2: number[]): number[] {
  const hash1: any = {}
  const res: any = []

  for(let i = 0; i < nums1.length; i++){
    hash1[nums1[i]] ? hash1[nums1[i]]++ : (hash1[nums1[i]] = 1)
  }

  for(let i = 0; i < nums2.length; i++){
    hash1[nums2[i]] && !res.includes(nums2[i]) && res.push(nums2[i])
  }

  return res
};
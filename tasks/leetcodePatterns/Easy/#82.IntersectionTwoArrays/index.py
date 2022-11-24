class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return Counter(nums1) & Counter(nums2)
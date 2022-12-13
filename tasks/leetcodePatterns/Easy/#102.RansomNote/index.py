# https://leetcode.com/problems/ransom-note/

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        return (Counter(ransomNote) & Counter(magazine)) == Counter(ransomNote)
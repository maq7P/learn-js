class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:

        uniq = set()

        for email in emails:
            name, domain = email.split("@")

            name = name.split("+")[0]
            name = name.replace(".", "")

            uniq.add(f'{name}@{domain}')

        return len(uniq)
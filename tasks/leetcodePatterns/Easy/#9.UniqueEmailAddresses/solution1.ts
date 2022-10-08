function numUniqueEmails(emails: string[]): number {
  const uniq = [];

  for (let i = 0; i < emails.length; i++){
    let cur = emails[i]

    const separate = cur.split("@")
    let local = separate[0]
    let domain = separate[1]

    local.replaceAll(".", "")
  }
};
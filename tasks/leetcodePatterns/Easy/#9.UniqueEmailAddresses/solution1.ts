function numUniqueEmails(emails: string[]): number {
  const uniq: string[] = [];

  for (let i = 0; i < emails.length; i++){
    let cur = emails[i]

    const separate = cur.split("@")

    let local = separate[0].replace(/\./g, "").split("+")[0]
    let domain = separate[1]

    const newEmail = local + "@" + domain

    uniq.indexOf(newEmail) === -1 && uniq.push(newEmail)
  }

  return uniq.length
};
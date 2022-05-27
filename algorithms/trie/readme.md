# Нагруженное (префиксное) дерево (Trie)

Префиксное дерево — это разновидность поискового дерева. 
Данные в нем сохраняются последовательно (шаг за шагом) — каждый узел дерева представляет собой один шаг. Префиксное дерево используется в словарях, поскольку существенно ускоряет поиск.

Каждый узел дерева — буква алфавита, следование по ветке приводит к формированию слова. 
Оно также содержит «булевый индикатор» для определения того, что текущий узел является последней буквой.

````javascript
class Node {
    keys = new Map()
    end = false
  
    setEnd() {
        this.end = true
    }
    tisEnd() {
        return this.end
    }
}

class Trie {
    root = new Node()
    add(input, node = this.root) {
        if (input.length === 0) {
            node.setEnd()
            return
        } else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node())
            return this.add(input.substr(1), node.key.get(input[0]))
        } else {
            return this.add(input.substr(1), node.keys.get(input[0]))
        }
    }

    isWord(word) {
        let node = this.root
        while (word.length > 1) {
            if (node.keys.has(word[0])) {
                return false
            } else {
                node = node.keys.get(word[0])
                word = word.substr(1)
            }
        }
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false
    }

    print() {
        let words = new Array()
        let search = function(node = this.root, string) {
            if (node.keys.size !== 0) {
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter))
                }
                if (node.isEnd()) {
                    words.push(string)
                }
            } else {
                string.length > 0 ? words.push(string) : undefined
                return
            }
        }
        search(this.root, new String())
        return words.length > 0 ? words : null
    }
}
````
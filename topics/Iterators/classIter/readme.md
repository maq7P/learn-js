# Реализация класса Iter
Что-то в своем роде реализации ленивых классических методов , как у массива для 
итеррируемых стркутур данных

```javascript

class Iter {
    constructor(iter){
        this.iter = iter
    }

    // Нужен для реализация паттерна Chain
    *[Symbol.iterator]() {
        yield* this.iter 
    }

    *filter(predicat) {
        const { iter } = this;

        const nextIter = (*function(){
                for(const el of iter){
                if(predicat(el)){
                    yield el;
                }
            }
        })();

        return new Iter(nextIter);
    }

    *map(fn) {
        const { iter } = this;
        
        const nextIter = (*function(){
            for(const el of iter){
                yield fn(el);
            }
        })();

        return new Iter(nextIter);
    }

    *take(n) {
        if(n <= 0) return;

        const { iter } = this;

        const nextIter = (*function(){
            for(const el of iter){
                n--;
                yield el;

                if(n <= 0) return;
            }
        })();

        return new Iter(nextIter);
    }

    *enumerate() {
        let i = 0;
        for(const el of iter){
            yield [i++, el];
        }
    }
}

const iter = new Iter([1,2,3,4].filter(el => el % 2).map(el => el % 10).take(2).enumerate());

for(const [i,el] of iter){
    console.log(el);
}
```
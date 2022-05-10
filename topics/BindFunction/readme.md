
### Way1 with method call 
```javascript
Function.prototype.myBind = function(ctx, ...args) {
	return (...rest){
		this.call(ctx, ...args.concat(rest))
  }
}
```

### Way2 without method call
```javascript
Fumction.prototype.myCall = function(ctx){
	ctx = ctx ? Object(ctx) : window;
	
	const callerFn = Symbol('callerFn');
	ctx[callerFn] = this;
	
	const res = ctx[callerFn](...arguments)
  delete ctx[callerFn];
	
	return ctx.callerFn(...arguments)
}

Function.prototype.myBind = function(ctx, ...args) {
	return (...rest){
		this.myCall(ctx, ...args.concat(rest))
	}
}
```
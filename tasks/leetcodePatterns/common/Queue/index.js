var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Queue_storage, _Queue_last, _Queue_first;
export default class Queue {
    constructor() {
        _Queue_storage.set(this, {});
        _Queue_last.set(this, 0);
        _Queue_first.set(this, 0);
    }
    enqueue(item) {
        var _a;
        __classPrivateFieldGet(this, _Queue_storage, "f")[__classPrivateFieldGet(this, _Queue_last, "f")] = item;
        __classPrivateFieldSet(this, _Queue_last, (_a = __classPrivateFieldGet(this, _Queue_last, "f"), _a++, _a), "f");
    }
    dequeue() {
        var _a;
        if (this.size === 0)
            return new Error("empty data");
        const val = __classPrivateFieldGet(this, _Queue_storage, "f")[__classPrivateFieldGet(this, _Queue_first, "f")];
        delete __classPrivateFieldGet(this, _Queue_storage, "f")[__classPrivateFieldGet(this, _Queue_first, "f")];
        __classPrivateFieldSet(this, _Queue_first, (_a = __classPrivateFieldGet(this, _Queue_first, "f"), _a++, _a), "f");
        return val;
    }
    get size() {
        return __classPrivateFieldGet(this, _Queue_last, "f") - __classPrivateFieldGet(this, _Queue_first, "f");
    }
    getIndex(idx) {
        return __classPrivateFieldGet(this, _Queue_storage, "f")[idx];
    }
}
_Queue_storage = new WeakMap(), _Queue_last = new WeakMap(), _Queue_first = new WeakMap();

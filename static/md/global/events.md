## this.$event
this.$event 用于组件交互。
### on(instance, eventName, callback);
**说明**

该接口用于注册事件响应。

**参数**
| 参数    | 说明      | 示例 |
| ------- |---------|-----|
| instance    |  当前组件的实例 | 请直接传入 this |
| eventName  | 事件名称（字符串）        | ’change‘ |
| callback   | 回调函数，当事件被触发时调用 | data=> {} |
**示例**
```javascript
export default {
  data() {
    return { text: '' }
  },
  mounted() {
    // 触发change事件，传入一个新的 text
    this.$event.on(this, 'change', data=> {
      this.text = data.text;
    })
  }
}
```

### emit(instance, eventName, data);
**说明**

该接口用于触发事件。

**参数**
| 参数    | 说明      | 示例 |
| ------- |---------|-----|
| instance    |  当前组件的实例 | 请直接传入 this |
| eventName  | 事件名称（字符串）        | ’change‘ |
| data   | 事件发出的数据 | {text: 'new Text'} |
**示例**
```javascript
export default {
  data() {
    return { text: '' }
  },
  methods: {
    onclick() {
      // 触发change事件，将text传出
      this.$event.emit(this, 'change', {text: this.text});
    }
  }
}
```
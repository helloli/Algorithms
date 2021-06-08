## Vue 初始化流程

1. 创建了一个 Vue 方法，并初始化了 init/state/events/lifecycle/render，然后注册全局 API，包括 extend/nextTick/set/delete/directive/filter/component/use/mixin/compile/observable/version
2. init 
2.1 会进行 options 的合并处理，其中默认的合并方案是子覆盖父的 options，如果在 optionMergeStrategies 里有对单独的 key 做特别的合并策略(为一个函数)，则进行这个函数的处理。对于 data 的合并，返回的是一个函数，函数在执行的时候也是先执行需要合并的 options 里的 data 的函数，再进行合并。
2.2 initData 的时候，会给 data 里的数据初始化 obeserver，一是对每个属性都增加 getter/setter 方法，二是实例化了一个 dep。在 getter 被触发的时候，会执行 dep.depend() 将 watcher，也就是 dep.target 加入到 dep 的订阅列表 subs 中。watcher 在实例化的时候就会执行 Dep.target = this 并取一次值用来加入到 subs。
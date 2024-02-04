import eventUtil from "../core/utils/event-util";
Component({
    externalClasses: ["l-class", "l-symbol-class", "l-count-class", "l-disabled-class"],
    properties: {
        count: {
            type: Number,
            value: 1
        },
        max: {
            type: Number,
            value: 9999
        },
        min: {
            type: Number,
            value: 1
        },
        step: {
            type: Number,
            value: 1
        },
        disabled: Boolean,
        iconSize: String,
        iconColor: String
    },
    data: {
        focus: !1
    },
    observers: {
        count: function (t) {
            
        },
        "count,min,max": function () {
            this.valueRange(this.data.count, "parameter")
        }
    },
    methods: {
        doNothing(t) {
            const {
                type: e
            } = t.currentTarget.dataset;
            eventUtil.emit(this, "linout", {
                type: e,
                way: "icon"
            })
        },
        onCount() {
            this.setData({
                focus: !0
            })
        },
        onBlur(t) {
            let {
                value: e
            } = t.detail;
            setTimeout(() => {
                this.blurCount(Number(e), () => {
                    eventUtil.emit(this, "lintap", {
                        count: this.data.count,
                        type: "blur"
                    })
                })
            }, 50)
        },
        blurCount(t, e) {
            t && this.valueRange(t), e && e()
        },
        valueRange(t, e = "input") {
            const {
                count: n,
                min: a,
                max: i
            } = this.data;
            "parameter" === e && t > i && console.error(`Counter 组件：初始值 ${n} 大于了最大值 ${i}，请注意修正`), "parameter" === e && t < a && console.error(`Counter 组件：初始值 ${n} 小于了最小值 ${a}，请注意修正`), t > i && eventUtil.emit(this, "linout", {
                type: "overflow_max",
                way: e
            }), t < a && eventUtil.emit(this, "linout", {
                type: "overflow_min",
                way: e
            }), (t = (t = t > i ? i : t) < a ? a : t) === this.data.count && this.setData({
                focus: !1
            }), t !== this.data.count && this.setData({
                count: t
            }, () => {
                this.setData({
                    focus: !1
                })
            })
        },
        onTapChange(t) {
            
            const e = t.currentTarget.dataset.changeType,
                {
                    count: n,
                    step: a,
                    min: i,
                    max: o
                } = this.data;
            let s;
            "add" === e ? s = n + a > o ? o : n + a : "reduce" === e && (s = n - a < i ? i : n - a), this.setData({
                count: s
            }), eventUtil.emit(this, "lintap", {
                count: this.data.count,
                type: e
            })

            console.log("dianji加号叫我去二", this.data);
            eventUtil.emit(this, "linchange", {
                count: this.data.count
            })
        },
        onInput(t) {
            eventUtil.emit(this, "lininput", t.detail)
        }
    }
});
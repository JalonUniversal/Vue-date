export default {
	install(Vue) {
		function Instance() {
			this.date = null;
			this.cache = null;
			this.now = () => {
				return Date.now();
			}
			this.date = () => {
				return new Date();
			}
			this.genDate = (type = {}) => {
				const date = this.date();
				const dateObj = {
					year: date.getFullYear(),
					month: date.getMonth() + 1,
					date: date.getDate(),
					day: date.getDay(),
					sec: Date.now()
				}
				const dateArray = [];
				if(Array.isArray(type)) {
					for(let k in dateObj) {
						dateArray.push(dateObj[k]);
					}
					return dateArray;
				}
				return dateObj;
			}
		}
		var __instance = __instance || new Instance();
		Vue.prototype.$date = __instance;
	}
}
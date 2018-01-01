# Vue-date
## A smart vue-plugin for operating cookie in your project

## How to use
npm install vue-date -S
## Details
this plugin apply abilities to operate date object in your own vue program;
now first get the date

### get instance
import Vue from 'vue';
import date from 'vue-date';
Vue.use(date);

### now ?
const now = this.$date.now();

### date ?
const date = this.$date.date();

### complete date object / array
const complete_date = this.$date.genDate(); 
// got {
          year: 2017,
          month: 12,
          date: 31,
          day: 31,
          sec: 219034345
        }
// get array when do like this
const complete_date_array = this.$date.genDate([]);
// got [2017, 12, 31, 31, 219034345]

### to be continue...


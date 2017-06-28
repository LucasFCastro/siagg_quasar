<template>
  <div>
    <h4>Página para Gráficos</h4>
    <div class="row">
      <div class="width-3of6">
        <h5>Negociações por UF</h5>
        <donut-chart
          id='donut'
          :data='donutData'
          colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
          resize=true
          >
        </donut-chart>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="width-3of6">
        <h5>Status Negociações</h5>
        <bar-chart
        id='bar'
        :data='barData'
        :xkey="'year'"
        :ykeys="barKeys"
        :labels='barLabels'
        :bar-colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
        :grid='true'
        :resize='true'
        ></bar-chart>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Raphael from 'raphael/raphael'
global.Raphael = Raphael

import {DonutChart, BarChart} from 'vue-morris'

export default {
  components: {
    DonutChart, BarChart
  },
  data () {
    return {
      donutData: [
        {label: 'Red', value: 300},
        {label: 'Blue', value: 50},
        {label: 'Yellow', value: 100}
      ],
      barData: [
        {year: 2012, and: 10, ios: 5, win: 2},
        {year: 2013, and: 20, ios: 15, win: 3},
        {year: 2014, and: 20, ios: 25, win: 2},
        {year: 2015, and: 40, ios: 20, win: 1}
      ],
      barKeys: ['and', 'ios', 'win'],
      barLabels: ['android', 'ios', 'windows']
    }
  }
}
</script>

<style>
</style>

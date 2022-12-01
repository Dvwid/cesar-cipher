import {Component, OnInit} from '@angular/core';

export interface KnapsackItem {
  name: string;
  value: number;
  weight: number;
}

@Component({
  selector: 'app-knapsack',
  templateUrl: './knapsack.component.html',
  styleUrls: ['./knapsack.component.scss']
})
export class KnapsackComponent implements OnInit {

  memo: any[] = [];
  capacity = 300;
  items: KnapsackItem[] = [];

  demoItems: KnapsackItem[] = [
    {name: 'Zegarek', weight: 70, value: 500},
    {name: 'Łańcuszek', weight: 73, value: 60},
    {name: 'Pierścionek', weight: 77, value: 70},
    {name: 'Nożyk', weight: 80, value: 80},
    {name: 'Latarka', weight: 82, value: 90},
    {name: 'Sznurek', weight: 87, value: 100},
  ]
  itemName = '';
  itemWeight = 0;
  itemValue = 0;

  knapsackItems: KnapsackItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.items = this.demoItems;
    this.knapsack();
  }

  removeItem(name: string) {
    this.items = this.items.filter(item => item.name !== name);
    this.knapsack();
  }

  addItem() {
    this.items.push({
      name: this.itemName,
      value: this.itemValue,
      weight: this.itemWeight
    });
    this.knapsack();
  }

  knapsack() {
    this.memo = [];

    for (let i = 0; i < this.items.length; i++) {
      const row = [];
      for (let cap = 1; cap <= this.capacity; cap++) {
        row.push(this.getSolution(i, cap));
      }
      this.memo.push(row);
    }

    this.knapsackItems = this.getLast()?.subset || [];

    console.log(this.items)
    console.log(this.knapsackItems)
    console.log(this.getLast())
    return this.getLast();
  }

  private getSolution(row: any, cap: any) {
    const NO_SOLUTION = {maxValue: 0, subset: []};
    const col = cap - 1;
    const lastItem = this.items[row];
    const remaining = cap - lastItem.weight;

    const lastSolution = row > 0 ? this.memo[row - 1][col] || NO_SOLUTION : NO_SOLUTION;

    const lastSubSolution = row > 0 ? this.memo[row - 1][remaining - 1] || NO_SOLUTION : NO_SOLUTION;

    if (remaining < 0) {
      return lastSolution;
    }

    const lastValue = lastSolution.maxValue;
    const lastSubValue = lastSubSolution.maxValue;

    const newValue = lastSubValue + lastItem.value;
    if (newValue >= lastValue) {
      const _lastSubSet = lastSubSolution.subset.slice();
      _lastSubSet.push(lastItem);
      return {maxValue: newValue, subset: _lastSubSet};
    } else {
      return lastSolution;
    }
  }

  private getLast() {
    const lastRow = this.memo[this.memo.length - 1];
    return lastRow?.[lastRow?.length - 1];
  }

}

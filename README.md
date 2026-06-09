stats = [
  { title: 'Balance', value: 0, target: 845620},
  { title: 'Savings', value: 0, target: 210000 },
  { title: 'Income', value: 0, target: 125000 },
  { title: 'Expenses', value: 0, target: 48200 },
  { title: 'Investments', value: 0, target: 375000 }
];

ngOnInit() {
  this.stats.forEach(stat => {
    this.animate(stat);
  });
}

animate(stat: any) {

  const increment = stat.target / 100;

  const timer = setInterval(() => {

    stat.value += increment;

    if (stat.value >= stat.target) {
      stat.value = stat.target;
      clearInterval(timer);
    }

  }, 20);
}

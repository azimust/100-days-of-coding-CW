Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, el) => {
      const key = fn ? fn(el) : el;
      if (!acc[key]) {
        acc[key] = [el];
      } else {
        acc[key].push(el);
      }
      return acc;
    }, {});
  };

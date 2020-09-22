let key = ["|   ", "/   ", "-   ", "\\   ", "|   ", "/   ", "-   ", "\\   ", "|   "];
timer = 100;
for (let item of key) {
  setTimeout(() => {
    process.stdout.write("\r" + item);
  }, timer)
  timer += 200;
};




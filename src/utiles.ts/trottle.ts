function throttle(callee: Function, timeout: number) {
  let timer:any;
  let lastArgs: any[];

  return function perform(...args: any) {
    if (timer) {
      lastArgs = args;
      return;
    }

    timer = setTimeout(() => {
      callee(...lastArgs);
      clearTimeout(timer);
      timer = null;
    }, timeout);
  };
}

export class ExecuteOnce {
  public setTimeout = null;

  public execute(callback, timeout) {
    return new Promise((resolve) => {
      if (!callback) {
        throw new Error("Parameter callback is required");
      }

      this.tryDisableTimeout();

      this.setTimeout = setTimeout(() => {
        resolve(callback());
      }, timeout);
    });
  }

  public tryDisableTimeout() {
    if (this.setTimeout) {
      clearTimeout(this.setTimeout);
      this.setTimeout = null;
    }
  }

  public clear() {
    this.tryDisableTimeout();
  }
}

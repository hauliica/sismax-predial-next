interface IBanPaymentConfig {
  endpoint: string;
}

class BanPayment {
  private static config: IBanPaymentConfig = { endpoint: "" };
  private static pK: string = "";

  public static setEnv(pa: string): void {
    this.urlEnv(pa);
    this.getPk();
    // TODO: Further implementation including dynamic loading of the script replacing jQuery modal with a react modal.
  }

  // TODO: Other methods
  // ...

  public static async authenticate(p: string): Promise<{ _code: any; _num?: string }> {
    try {
      const response = await fetch(`${this.config.endpoint}/authenticateV2`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ crypt: p }),
      });

      return { _code: JSON.parse(await response.json()) };
    } catch (error: any) {
      return { _code: false, _num: error.response?.numeroControl };
    }
  }

  private static async urlEnv(pa: string): Promise<void> {
    try {
      // POST request using fetch to the endpoint
      const response = await fetch(`${this.config.endpoint}/gP`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const resOrig = await response.json();
      const re2 = JSON.parse(resOrig.env);
      this.config.endpoint = re2[pa];
    } catch (error) {
      console.error(error);
    }
  }

  private static async getPk(): Promise<void> {
    //Fetch Pk
    try {
      const response = await fetch(`${this.config.endpoint}/orquestador/rsa`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      this.pK = await JSON.parse(await response.json().pK);
    } catch (error) {
      console.error(error);
    }
  }

  private static injectStylesheet(href: string): void {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = href;
    document.head.appendChild(link);
  }

  private static loadScripts(scripts: string[]): Promise<void[]> {
    return Promise.all(
      scripts.map(
        (src) =>
          new Promise<void>((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve();
            script.onerror = () => reject();
            document.head.appendChild(script);
          })
      )
    );

    // TODO: More methods.
  }

  // TODO: Additional private methods to be written for authenticate, toggleLockHostPage, and others.
  // ...
}

export default BanPayment;

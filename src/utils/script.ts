type LoadedScriptMap = Record<string, boolean>;
type ScriptMap = Record<string, string>;
const loadedScripts: LoadedScriptMap = {};

function setLoaded(key: string): void {
  loadedScripts[key] = true;
}

function isLoaded(key: string): boolean {
  return Boolean(loadedScripts[key]);
}

export function loadScript(key: string, url: string): Promise<void> {
  if (isLoaded(key)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);

    script.onload = () => {
      setLoaded(key);
      resolve();
    };
    script.src = url;
  });
}

export function loadScripts(scriptMap: ScriptMap): Promise<void> {
  return new Promise((resolve, reject) => {
    const results = Object.entries(scriptMap).map((pair) =>
      loadScript(pair[0], pair[1])
    );
    Promise.all(results).then(() => resolve());
  });
}

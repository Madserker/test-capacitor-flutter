export interface ExamplePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
export interface PluginRegistry {
  MyFlutterPlugin: MyFlutterPluginPlugin;
}

export interface MyFlutterPluginPlugin {
  simpleTest(): Promise<{ test: number }>;
}
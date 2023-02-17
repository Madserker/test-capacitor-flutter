import 'package:flutter/services.dart';

class MyFlutterPlugin {
  static const MethodChannel _channel = MethodChannel('test_plugin');

  static Future<int> simpleTest() async {
    final int test = await _channel.invokeMethod('simpleTest');
    return test;
  }
}

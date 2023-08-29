function decodeUplink(input) {
    // input has the following structure:
    // {
    //   "bytes": [1, 2, 3], // FRMPayload (byte array)
    //   "fPort": 1
    // }
    
    var len = input.bytes.length;
    var sensorDetected = input.bytes[7] == 0x01 ? true : false;
    var batteryVoltage = ((input.bytes[0] << 8 | input.bytes[1]) & 0x3FFF) / 1000;
    var distanceInMm = (input.bytes[2] << 8 | input.bytes[3]);
    var distanceInCm = distanceInMm / 10;
    var distanceinM = distanceInMm / 1000;
    
    return {
      data: {
        sensorDetected: sensorDetected,
        batteryVoltage: batteryVoltage,
        distanceInMm: distanceInMm,
        distanceInCm: distanceInCm,
        distanceInM: distanceinM,
        currentTimestamp: Math.floor(Date.now() / 1000),
        currentIsoTime: Date.toISOString()
      },
      warnings: [], // optional
      errors: [] // optional (if set, the decoding failed)
    };
  }

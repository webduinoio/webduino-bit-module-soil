Blockly.Blocks['soil_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SOIL, "土壤濕度偵測，類比腳位：")
      .appendField(new Blockly.FieldDropdown(this.getPinDropdown), "pin_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl(mainUrl + 'basic/sensor/soil.html' + utmUrl);
  },
  getPinDropdown: function () {
    var tags = Code.getTags(),
      mappings = [
        ["A4", "4"],
        ["A5", "5"],
        ["A7", "7"]
      ];

    return mappings;
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#xqkech
Blockly.Blocks['soil_detected'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("soil"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_SOIL_DETECTED, "開始偵測");
    this.appendStatementInput("detected_")
      .appendField(Blockly.Msg.WEBDUINO_SOIL_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl(mainUrl + 'basic/sensor/soil.html' + utmUrl);
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#syxm8m
Blockly.Blocks['soil_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("soil"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_SOIL_VAL, "偵測的數值");
    this.setOutput(true);
    this.setColour(35);
    this.setTooltip('');
    this.setHelpUrl(mainUrl + 'basic/sensor/soil.html' + utmUrl);
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#pdtd2m
Blockly.Blocks['soil_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("soil"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_SOIL_STOP, "停止偵測");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl(mainUrl + 'basic/sensor/soil.html' + utmUrl);
  }
};
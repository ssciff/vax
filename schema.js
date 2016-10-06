var vxSchema = {
  "types": {
    "Numeric": {
      "isGeneric": false
    }
  },
  "components": {
    "Constant": {
      "title": "Constant",
      "color": "0-#495-#075:20-#335",
      "width": 150,
      "height": 80,
      "attrs": {
        "V": {
          "title": "Value",
          "type": "Numeric"
        }
      },
      "out": {
        "O": {
          "type": "Numeric"
        }
      }
    },
    "Add": {
      "title": "+",
      "color": "0-#490-#070:20-#333",
      "width": 100,
      "height": 100,
      "in": {
        "A": {
          "type": "Numeric"
        },
        "B": {
          "type": "Numeric"
        }
      },
      "out": {
        "O": {
          "type": "Numeric"
        }
      }
    },
    "Sub": {
      "title": "-",
      "color": "0-#490-#070:20-#333",
      "width": 100,
      "height": 100,
      "in": {
        "A": {
          "type": "Numeric"
        },
        "B": {
          "type": "Numeric"
        }
      },
      "out": {
        "O": {
          "type": "Numeric"
        }
      }
    },
    "Mul": {
      "title": "*",
      "color": "0-#490-#070:20-#333",
      "width": 100,
      "height": 100,
      "in": {
        "A": {
          "type": "Numeric"
        },
        "B": {
          "type": "Numeric"
        }
      },
      "out": {
        "O": {
          "type": "Numeric"
        }
      }
    },
    "Div": {
      "title": "/",
      "color": "0-#490-#070:20-#333",
      "width": 100,
      "height": 100,
      "in": {
        "A": {
          "type": "Numeric"
        },
        "B": {
          "type": "Numeric"
        }
      },
      "out": {
        "O": {
          "type": "Numeric"
        }
      }
    },
    "Result": {
      "color": "0-#690-#670:20-#933",
      "width": 80,
      "height": 70,
      "title": "Result",
      "in": {
        "I": {
          "type": "Numeric"
        }
      }
    }
  }
}
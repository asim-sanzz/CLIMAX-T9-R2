var APP_DATA = {
  "scenes": [
    {
      "id": "0-back-side",
      "name": "BACK SIDE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.9269694681746081,
        "pitch": 0.11703600636135292,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.5636921405398354,
          "pitch": 0.13288719659191628,
          "rotation": 0,
          "target": "1-screen-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-screen-side",
      "name": "SCREEN SIDE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.02650478098252229,
          "pitch": 0.12884592073248058,
          "rotation": 0,
          "target": "0-back-side"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CLIMAX T9 R2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

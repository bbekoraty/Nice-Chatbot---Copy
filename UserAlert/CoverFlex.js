const cover_Flex = () => {
    const cover_Flex = {
        "type": "bubble",
        "direction": "ltr",
        "body": {
          "type": "box",
          "layout": "vertical",
          "height": "200px",
          "borderWidth": "0px",
          "backgroundColor": "#650485",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "height": "250px",
              "borderWidth": "2px",
              "contents": [
                {
                  "type": "image",
                  "url": "https://img2.pic.in.th/pic/image-removebg-preview-1366a7512157e9572.png",
                  "size": "lg"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "height": "200px",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Notification",
                      "size": "3xl",
                      "color": "#D6FF82",
                      "align": "center",
                      "gravity": "center",
                      "wrap": true,
                      "position": "relative",
                      "contents": []
                    },
                    {
                      "type": "text",
                      "text": "IoT Security System ",
                      "size": "xs",
                      "color": "#FFFFFFFF",
                      "align": "center",
                      "offsetTop": "8px",
                      "contents": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    return cover_Flex;
  };
  module.exports =  cover_Flex;
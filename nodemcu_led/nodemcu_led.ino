#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>


const char *ssid =  "wifiname";    
const char *pass =  "password";

const char *host = "http://10.0.0.25:8001";
const int port = 8001;

String data;

WiFiClient client;
HTTPClient http;
 
void setup() 
{
  Serial.begin(9600);
  delay(10);

  pinMode(D1, OUTPUT);
          
  Serial.println("Connecting to ");
  Serial.println(ssid); 

  WiFi.begin(ssid, pass); 
  while (WiFi.status() != WL_CONNECTED) 
    {
      delay(500);
      Serial.print(".");
    }
  Serial.println("");
  Serial.println("WiFi connected"); 

  
}

 
void loop() 
{      

//  delay(1000);/

  http.begin(host);
  int statusCode = http.GET();

  if (statusCode == 200) {
    
    data = http.getString();
    
    if(data == "HIGH") {
      digitalWrite(D1, HIGH);
      return;
    }
    digitalWrite(D1, LOW); 
  }
}

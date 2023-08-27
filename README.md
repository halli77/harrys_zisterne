# harrys_zisterne

## Hardware

### Raspberry Pi 3 B
* mac-adresse: B8:__:__:__:ED:28
* ip: 172.xx.xx.9
* Port: 8123

## Software
* Home assistant
* user: harry



## Wasserstand


```
    Sensor
________________         _
                         |
                         | z (Abstand Sensor Unterkante zu Füllstand max) 
                         |
                         _ Füllstand max
|               |        |
|               |        |
|      _        |        _ Wassterstand
|               |        |  
|               |        |
|               |        |      
|               |        |
|_______________|        _ Füllstand min

```
Wasserstand = Messwert - z

## Füllstand

Füllstand in Liter = Fläche * Wasserstand * 1000

## Entitäten

Füllstand in Litern
Füllstand in Prozent

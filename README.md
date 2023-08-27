# harrys_zisterne

## Hardware
* Raspberry Pi 3
* The Things Indoor Gateway
* Dragino LDDS75

## Software
* Home assistant
* The Things Network


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

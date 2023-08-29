# Harrys Zisterne

## Hardware
* Raspberry Pi 3
* The Things Indoor Gateway TBMH100 Minihub
* Dragino LDDS75

## Software
* Home Assistant
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

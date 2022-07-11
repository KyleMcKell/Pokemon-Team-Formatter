# Pokemon Team Formatter

To make it easier to make pokepastes and update trainer info

## How to run

You will need to have installed nodejs on your computer.

Install packages (only package is for better copy and pasting experience)

First run `node formatNicknames` to format your code into Pokemon with nicknames added. It will prompt you to input a pokemon to format. I just copy and paste all of my lines into my terminal (with new lines to make it prompt me again), and it works great.

- This adds the trainer name and location to each pokemon.
- If you didn't add Trainer or locations to your doc, skip this step

Then run `node formatInput` to generate your showdown importable pokemon layout.

- Same idea as before, copy and paste into the terminal.

**I use the VSCode bash terminal, your terminal may behave differently**

## How to set up your file

Here is a general overview with how your layout should look:

```
~Location
*Trainer Name
Name Lv.00 @Item: Move 1, Move 2, Move 3, Move 4 {Nature|Ability} /IVs/ <EVs>
```

And here is an example of a few lines with formatting

```
~Pokemon Tower
*Channeler Ruth
Pincurchin Lv.55 @Sitrus Berry: Rising Voltage, Bouncy Bubble, Volt Switch, Spikes {Modest|Electric Surge}
Grimmsnarl Lv.56 @Light Clay: Spirit Break, Darkest Lariat, Reflect, Light Screen {Careful|Prankster}
Drifblim Lv.56 @Electric Seed: Shadow Ball, Air Slash, Strength Sap, Calm Mind {Modest|Unburden}
Cresselia Lv.56 @Electric Seed: Psyshock, Moonblast, Calm Mind, Moonlight {Timid|Levitate}
Polteageist Lv.56 @White Herb: Shadow Ball, Stored Power, Hidden Power Fighting, Shell Smash {Timid|Cursed Body}
*Ghost [+1 to all stats]
Marowak-Alola Lv.58 @Thick Club: Shadow Bone, Fire Punch, Bonemerang, Thunder Punch {Jolly|Bone Zone} <252 HP>
~Saffron City Gym
*Sabrina
TapuFini Lv.59 @Focus Sash: Moonblast, Muddy Water, Misty Explosion, Flip Turn {Quiet|Misty Surge} /0 Spe/
Camerupt-Mega Lv.59 @Cameruptite: Flamethrower, Earth Power, Steam Eruption, Slack Off {Quiet|Sheer Force} /0 Spe/
Jellicent Lv.59 @Mystic Water: Water Spout, Hydro Pump, Shadow Ball, Strength Sap {Quiet|Water Bubble} /0 Spe/
Melmetal Lv.59 @Assault Vest: Double Iron Bash, High Horsepower, Brick Break, Thunder Punch {Sassy|Clear Body} /0 Spe/
Magearna Lv.59 @Fightinium-Z: Moonblast, Flash Cannon, Thunderbolt, Focus Blast {Quiet|Soul Heart} /0 Spe/
Glastrier Lv.59 @Iapapa Berry: Ice Hammer, High Horsepower, Close Combat, Swords Dance {Brave|Moxie} /0 Spe/
```

To show a little more consiseness, here is an example of each step:

Starting code:

```
~Saffron City Gym
*Sabrina
TapuFini Lv.59 @Focus Sash: Moonblast, Muddy Water, Misty Explosion, Flip Turn {Quiet|Misty Surge} /0 Spe/
Camerupt-Mega Lv.59 @Cameruptite: Flamethrower, Earth Power, Steam Eruption, Slack Off {Quiet|Sheer Force} /0 Spe/
Jellicent Lv.59 @Mystic Water: Water Spout, Hydro Pump, Shadow Ball, Strength Sap {Quiet|Water Bubble}
Mr.Mime Lv.59 @Mystic Water: Shadow Ball, Psychic, Confuse Ray, Shadow Ball {Quiet|Levitate} <252 HP, 252 SpD>
```

This spits out

```
Sabrina - Saffron City Gym (TapuFini) Lv.59 @Focus Sash: Moonblast, Muddy Water, Misty Explosion, Flip Turn {Quiet|Misty Surge} /0 Spe/
Sabrina - Saffron City Gym (Camerupt-Mega) Lv.59 @Cameruptite: Flamethrower, Earth Power, Steam Eruption, Slack Off {Quiet|Sheer Force} /0 Spe/
Sabrina - Saffron City Gym (Jellicent) Lv.59 @Mystic Water: Water Spout, Hydro Pump, Shadow Ball, Strength Sap {Quiet|Water Bubble}
Sabrina - Saffron City Gym (Mr.Mime) Lv.59 @Mystic Water: Shadow Ball, Psychic, Confuse Ray, Shadow Ball {Quiet|Levitate} <252 HP, 252 SpD>
```

Which then turns into

```
Sabrina - Saffron City Gym (Tapu Fini) @ Focus Sash
Level: 59
IVs: 0 Spe
Quiet Nature
Ability: Misty Surge
- Moonblast
- Muddy Water
- Misty Explosion
- Flip Turn

Sabrina - Saffron City Gym (Camerupt-Mega) @ Cameruptite
Level: 59
IVs: 0 Spe
Quiet Nature
Ability: Sheer Force
- Flamethrower
- Earth Power
- Steam Eruption
- Slack Off

Sabrina - Saffron City Gym (Jellicent) @ Mystic Water
Ability: Water Bubble
Level: 59
Quiet Nature
- Water Spout
- Hydro Pump
- Shadow Ball
- Strength Sap

Sabrina - Saffron City Gym (Mr. Mime) @ Mystic Water
Level: 59
EVs: 252 HP /  252 SpD
Quiet Nature
Ability: Levitate
- Shadow Ball
- Psychic
- Confuse Ray
- Shadow Ball
```

Perfect! (you'll notice that it doesn't spit out both IVs and EVs currently. Since I primarily play without EVs, this isn't something I am putting a priority on at the moment, let me know if you'd like me to add this)

## A Few Notes

### Don't put spaces in Pokemon's names

Don't Do: `Mr. Mime`

Instead do: `Mr.Mime`

Don't Do: `Tapu Fini`

Instead do: `TapuFini`

**There may be more edge cases that I haven't covered**

### Format names and moves as importable by Showdown Calculator

Don't Do: `MegaCharizardX`

Instead Do: `Charizard-Mega-X`

Don't Do: `Farfetch'd`

Instead Do: `Farfetch’d` (apostrophe different)

Don't Do: `UrshifuRapidStrike`

Instead do: `Urshifu-Rapid-Strike`

Don't Do: `Urshifu-Single-Strike`

Instead Do: `Urshifu`

There may be more than this that I haven't covered.

## To Dos

- Make code read file and spit out a file rather than making you copy and paste each line into the terminal

- Find more edge cases for naming

- Find more edge cases for moves

- Implement allowing both EVs and IVs to work together (they currently work separately)

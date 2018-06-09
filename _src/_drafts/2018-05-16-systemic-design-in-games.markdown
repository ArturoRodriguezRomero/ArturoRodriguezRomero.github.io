---
layout: post
title: "Systemic Design in Games."
date: 2018-05-16
categories:
  - Game-Design
description: Systemic Design in Games.
image: https://i.pinimg.com/originals/e2/fe/a7/e2fea784fa11708f6c8cc22dbba283a2.jpg
image-sm: https://i.pinimg.com/originals/e2/fe/a7/e2fea784fa11708f6c8cc22dbba283a2.jpg
---

There's a lot of talk about systemic design in games lately, but what is it really?

Well, if we go by Wikipedia's description...

> Systemic design is a recent initiative in design that integrates systems thinking and human-centered design.

Seems simple enough, **systemic design is the combination of Systems Thinking and Human-Centered Design**.

Then, before understanding systemic design we will have to understand these two.

#### Systems Theory.

Systems theory is the study of systems. A system is made of different parts.

Systems are limited by **boundaries**, surrounded and influenced by its **environment** and described by its **function**.

Usually, a system is more than the sum of its parts. This means that changing a part of the system has system-wide repercutions and can affect many or all other systems.

The goal of systems theory is to accurately define a system's dynamics, constraints, conditions and principles. If we know this, we can precisely predict the outcome of an action in a complicated system. And therefore, we can add new parts to the system, knowing how it and its different parts will react.

This is not only useful in game design, but in many (if not all) design works you can think of.

foto/dibujo

To know more about Systems Theory, check out its [Wikipedia post](https://en.wikipedia.org/wiki/Systems_theory).

#### Human-Centered Design.

Human-centered design is a way to develop solutions to problems by having in mind the **human perspective** in all parts and steps of the problem-solving process.

This proccess usually involves the designers immersing themselves in the problem and context of the users, brainstoming new ideas, modeling, prototyping and implementing the new systems keeping in mind the perspective of the final user. With the objective of increasing productivity, usability, ease of use, etc.

You can never forget that the systems that you are designing will be used by other people (who most likely won't be designers).

foto/dibujo

To know more about Human-Centered Design, check out its [Wikipedia post](https://en.wikipedia.org/wiki/Human-centered_design).

## Systemic Design in Games.

If we design our game following both the Systems theory and the Human-center design, we will come up with something like this:

> A game is built by different **systems**. Each system is built by different **parts** and affected by different **rules**. All having in mind the **user's perspective**.

Usually, a system can **trigger** an **action** that will produce a **reaction** in other systems, we call this **synergy**.

Let's take a look at a few typical examples of systems being synergetic with each other.

**Fire arrow in oil puddle.**


Trigger: player or NPC.
Action: shoot a fire arrow to a puddle of oil.
Reaction: oil puddle catches fire, triggers fire action to nearby systems (NPCs get damage, other oil puddles catch fire, etc).

**Rain.**


Trigger: game manager or spell-casted by player or NPC.
Action: rains starts in the area.
Reaction: rain visual effect, triggers rain action to nearby systems (floor gets slippery, NPCs get wet, fire extinguishes, etc).

**Guard triggers alarm on player detection.**


Trigger: NPC.
Action: runs to alarm box and triggers a level-wide alarm.
Reaction: enemies enter a combat stance, they leave their usual post, search for the player, etc.

As you can imagine, when systems are triggered, ideally, they tend to extend this to other nearby systems. This produces a waterfall effect in which systems really do interact with each other in a very satisfying way.

esquema de cadena de sistemas siendo disparados piramide 1 - 2 - 4 oooo mitico domino con muchas cosas, bolas tobogan, etc

When designing a game based on a systemic design your biggest concern should not be not giving the player enough to do, but quite the opposite. It can be dangerous to give the player too much power and possibilities to do things you didn't intent them to do. Players always exploit game systems when they can, even when it means breaking the game (and the fun).

If you are lucky they will see this opportunities as fun and make a Youtube video out of it. If you are unlucky they will gain the system and ruin the game for themselves.

Let's say you give the player the ability to jump. You also give them a jelly baloon that when thrown, makes a puddle of very bouncy material. This is great, players can come up with lots of things to do with this two interactive systems. But they can also be exploited.

Imaging spending all the time to design and build a great level, only to see players throw a bunch of jelly ballons to the floor a jump over the invisible wall and into the exit trigger.

This is great for speedrunners, but make sure that your exploitable situations are hard enough that regular players won't be able to perform them.

dibujo de jelly baloon

#### Why is Systemic Design Good?

A few things.

It's easier for developers (you) to create 10 reactive systems that interact with each other allowing for 100 oportunities than to create 100 isolated "scripted" oportunities. The less time you have to spend "hard coding" things for the player to do, the more time you can spend doing other things.

Also, players really like to combine systems, it rewards their creativity and out-of-the-box thinking!
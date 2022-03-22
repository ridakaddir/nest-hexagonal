# NestJS -Clean code using Hexagonal Architecture

## Introduction

"**the only constant is change**"
Software architecture is key in responding to dynamic market pressures, a well-designed software allows the company to deliver new features faster to meet evolving user needs.

I remember in my early days as an SDE, I was always looking for how can I better structure my code, to make it easy to understand and add new features for my colleges and future me. so I was constantly refactoring my working feature trying to find the perfect Application Architecture. yes, I was young and stupid, and I am today as well. ‍😄
Then later I discovered **SOLID** principles, **clean code**, **Domain-Driven Design** and the **HA** (Hexagonal Architecture). this was a big discovery for me because that was exactly what I was looking for.

I know many of you already read about clean code, SOLID and HA. but today I decided to write an article where I'll be explaining step by step how to implement these principles using HA with [NestJS](https://github.com/nestjs/nest) Framework.

## Why and When should I use HA? 💁🏽‍♂️

With the adoption of cloud-managed services in our applications and the high frequency cloud providers ship new capabilities that help to improve our application performence and/or reduce its cost.
To keep up with an evolving market, and a demanding customer. If there is one thing we are sure about is Technical and Business **Request For Change**.
In this circumstances, it makes more sense to use HA because it allows us to replace and maintain infrastructure components code and business logic code in total isolation, which protects us from code regression.
Infrastructure components code examples: storing blob objects into AWS S3 bucket, publishing an event into an AWS SNS topic…
All this code has nothing to do with our Business features (Domain)and has NO direct business value. 
Storing our users' images in S3 or in desk, publishing users events into SNS or SQS, migrating from SNS to EventBridge, trigger the business logic synchronously from an HTTP call or asynchronously from an Event. all these NFRs (Non-functional requirements) are requested by a technical person, an Architect, a technical lead or a developer. and all its related code should reside in a dedicated package (the adapters).
On the other hand, a business requirement like send an email notification after a user uploads an image should NOT change my infrastructure code responsible for uploading images to S3.  
Another reason is automated tests, HA makes writing Unit and Integration tests easy, as it allows you to test your Business code without requiring your infrastructure to be set up. for example you can mock an AWS S3 service in your code to Unit test your business logic, or create an AWS S3 service stub to run your integration tests.

## Application Architecture?

![Architecture](./architecture.drawio.png)

The application code is split into two main components, the Application Core Domain and the Adapters, the idea is to design our code to be close to modification but open for extension.
How?
The output ports allow us to extend our code by adding Adapters as needed then use DI (dependency injection) to orchestrate which Adapter implementation to execute.
the

## Coding time!

To start we need an existing or new [Nest](https://github.com/nestjs/nest) application, then create a new module, in my case I created a module named `employee`

```
nest generate modue
```

Inside our module w'll need to create some directories where w'll be creating our Domain Entities, Input Ports, Output Ports and Adapters.

```
cd employee && mkdir -p apdapters domain/model domain/ports
```

now let's start implementing our Entity `employee`
to introduce the concept of [value object](https://martinfowler.com/bliki/ValueObject.html) I'll create a value object for the employee name, for this let's create a class named `EmployeeName` inside the model directory.

```typescript {.line-numbers}
export class EmployeeName {
  private value: string;

  private constructor(value: string) {
    if (value == 'invalid name') {
      throw new Error('value not valid');
    }

    this.value = value;
  }

  public static of(name: string) {
    return new EmployeeName(name);
  }

  public get(): string {
    return this.value;
  }
}
```

then create an `Employee` class

```typescript {.line-numbers, highlight=6}
import { randomUUID } from 'crypto';
import { EmployeeName } from './employeeName.valueobject';

export class Employee {
  private id: string;
  name: EmployeeName;
  type: string;
  startDate: Date;
  endDate: Date;
  salary: Number;

  constructor(
    name: string,
    type: string,
    startDate: Date,
    endDate: Date,
    salary: Number,
  ) {
    this.id = randomUUID();
    this.name = EmployeeName.of(name);
    this.type = type;
    this.startDate = startDate;
    this.endDate = endDate;
    this.salary = salary;
  }
}
```

Notice here that the attribute `name` is of type value object `EmployeeName`, which give a better readability to our code. instead of a string type that could accept any value, now we know that we need to provide a valid object of type `EmployeeName` . If we provide an invald name the value object will verify it against the implemented business rule then throw an exeption, `EmployeeName` class line number 6.

## Bonus

TODO Dockerfile multistage & prune

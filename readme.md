# JS basics

## OOP - object oriented programming

1. Abstraction - jak zaimplementujemy to jest
2. Inheritance - dziedziczenia nie ma w JS (prototype chaining) - korzystanie z pół rodzica
3. Polymorphism - jak napiszemy w js to jest
4. Encapsulation - (js only public, ts - all)
   1. Access modifiers
      1. private
      2. protected
      3. public
      4. read only

### SOLID - dobre praktyki OOP

1. Single responsibility principle - jedna klasa, jedna funkcjonalność
2. Open/closed principle - klasa napisana raz musi taka zostać
3. Liskov substitution principle - obiekt klasy dziedziczcej mozna zamienic na obiekt klasy tworzacej i musi dzialac
4. Interface segregation - odseparowanie logiki od implementacji za pomoca interfaców
5. Dependency inversion - rodzic nie może być zależny od dziecka

TS nie ma interpretera, ma tylko transpilator, jest kompilowany do JS

## This

- a functionality this references the execution context for that call, determined entirely by how the function was called.

## new keyword

1. Create a band-new empty object
2. Link that object to another object
3. Call function with "this" set to new object
4. If function does not return an object, assume return of "this"

## This precedence

1. if the function called by new - this is empty object
2. is the function called by call() or apply()? bind() uses apply()
3. Is the function called on a context object? (coś takiego jak metoda)
4. default: global object (except strict mode)

## Arrow function this => arrow function does not have this (lexical this), not have arguments, not have super and not have new.target

# JavaScript Classes

## Exercise
### The Department of Education wants the catalog to hold quick reference material for each school in the city.

+ We need to create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:

1. School
+ Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
+ Getters: all properties have getters
+ Setters: the numberOfStudents property has a setter
+ Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)

2. Primary
+ Includes everything in the School class, plus one additional property
+ Properties: pickupPolicy (string)
Middle
+ Does not include any additional properties or methods

3. High
+ Includes everything in the School class, plus one additional property
+ Properties: sportsTeams (array of strings)

### Exercise provided by Codecademy


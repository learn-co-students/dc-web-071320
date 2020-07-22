## Questions about OO

* `self` - example (Steven)
* 4 principles (Steven)
* AirBnB lab (Jina)
* Does the join table exist in the problem (Christina)

## Process

* Tourist (name)
  * has many trips
  * has many landmarks through trips
* Landmark (name, city)
  * has many trips
  * has many tourists through trips
* Trip (tourist, landmark)
  * belongs to a tourist
  * belongs to a landmark

Landmark -< Trip >- Tourist

1. Identify the models
2. Identify the attributes
3. Identify the relationships
4. Verify my understanding of the domain
5. Set up models/classes with attributes
6. Test that our models work with their attributes
5. Set up models/classes with relationships (tested EVERY STEP OF THE WAY)
   1. Add your @@all code to each class
   2. Add our attr_reader for the belongs_to's
   2. Add has many relationships
   3. Add has many through relationships
1. Logic problems

## Deliverables

We've provided you with a console that you can use to test your code. To enter a console session, run `ruby tools/console.rb` from the command line. You'll be able to test out the methods that you write here. Take a look at that file to see how you can pre-define variables and create object instances, rather than manually doing it in every single console session.

### Basic Class Methods and Properties

Task:  Build out the methods and relationships for a `Tourist` model, a `Landmark` model, and a `Trip` model.

- A `Tourist` has a name
- A `Landmark` has a name and a city
- A `Tourist` can visit many `Landmark`s.
- A `Landmark` can be visited by many `Tourist`s
- A `Trip` belongs to a `Tourist`
- A `Trip` belongs to a `Landmark`
- A `Tourist` can take many `Trip`s
- A `Landmark` can have many `Trip`s

#### Build the following methods on the `Tourist` class

<!-- - `Tourist.all`
  - should return **all** of the `Tourist` instances -->
<!-- - `Tourist#name`
  - returns the name of the given `Tourist` -->
<!-- - `Tourist.find_by_name(name)`
  - given a string of a name, returns the **first tourist** whose  name matches -->
<!-- - `Tourist#trips`
  - returns an **array** of all the trips taken by the given `Tourist` -->
<!-- - `Tourist#landmarks`
  - returns an **array** of all the landmarks for the given `Tourist` -->
<!-- - `Tourist#visit_landmark(landmark)` should create a new trip for that tourist to the given landmark -->
- `Tourist#never_visited` should return an array of all the landmarks this tourist has never traveled to

#### Build out the following methods on the `Landmark` class

<!-- - `Landmark.all`
  - returns an **array** of all landmarks -->
- `Landmark.find_by_city(city)`
  - returns an **array** of all landmarks in that city
<!-- - `Landmark#trips`
  - returns an **array** of all the trips taken to a given landmark -->
<!-- - `Landmark#tourists`
  - returns an **array** of all the tourists at a given landmark -->

#### Build out the following methods on the `Trip` class

<!-- - `Trip.all`
  - returns an array of all trips -->
<!-- - `Trip#tourist`
  - returns the tourist who has taken that trip -->
<!-- - `Trip#landmark`
  - returns the landmark visited on the trip -->
